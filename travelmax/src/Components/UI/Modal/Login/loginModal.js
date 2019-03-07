import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleReactValidator from 'simple-react-validator';
import { withRouter, Link } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import { withFirebase } from '../../../Firebase';
import PasswordForget from '../../../PasswordForget';
import { Button, Container, Col, Row,  Form, FormGroup, Label, Input } from 'reactstrap';

class LoginModal extends React.Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator();
    this.state = {
      InitRegisterUser: {
        email: '',
        password: '',
        error: null
      },
      modal: false
    };

    this.toggle = this.toggle.bind(this);
    this.submitFormHandler = this.submitFormHandler.bind(this);
    this.userFormHandler = this.userFormHandler.bind(this);
  }
  userFormHandler(event){
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { InitRegisterUser } = this.state;
        this.setState({
            InitRegisterUser: {
              ...InitRegisterUser,
              [name]: value
            }
        });
    // console.log(event.target.value);
  }
  
 
  submitFormHandler(event){
     this._isMounted = true;
    event.preventDefault();
    if( this.validator.allValid() ){
      this.setState({loading: true});
      
      const {email, password} = this.state.InitRegisterUser;
        this.props.firebase.doSignInWithEmailAndPassword(email, password)
        .then(authUser =>{
          this.setState({
            ...this.state.InitRegisterUser,
            loading: false,
             modal: false
          });
          this.props.history.push({pathname: '/dashboard'});
        })
        .catch(error =>{
          this.setState({
            ...this.state.InitRegisterUser,
            InitRegisterUser: {error: error},
            loading: false,
            modal: true
          });
          console.log(error);
        });
    
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  }
 
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { InitRegisterUser } = this.state;
    let form = <Form onSubmit={this.submitFormHandler}>
                <span style={{color:'red'}}>{InitRegisterUser.error && <p>{InitRegisterUser.error.message}</p>}</span>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input name="email" type="text" value={InitRegisterUser.email}  onChange={this.userFormHandler} id="email" placeholder="Email" />
                   <span style={{color:'red'}}>{this.validator.message('email', InitRegisterUser.email, 'required|email|regex')}</span>
                </FormGroup>
                <FormGroup>
                  <Label for="Password">Password</Label>
                  <Input type="password" name="password" value={InitRegisterUser.password} onChange={this.userFormHandler} id="Password" placeholder="Password" />
                  <span style={{color:'red'}}>{this.validator.message('password', InitRegisterUser.password, 'required|min:7')}</span>
                </FormGroup>
                <Button color="primary">Sign in</Button>
            </Form>;
    if(this.state.loading){
      form = <Spinner />;
    }
    return (
      <div>
         <Container>
         <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
             <h4  style={{color:"#ef5635", marginTop: "20px"}}>Please Login!</h4>
          </Col>
         </Row>
         <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
           {form}
            <PasswordForget />
            <div>
             <div><span>Don't have an account yet? <Button tag={Link} to='/register' color="link">Register</Button></span></div>
              <Button color="secondary" tag={Link} to='/'>Cancel</Button>
            </div>
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}

export default (withRouter(withFirebase(LoginModal)));
