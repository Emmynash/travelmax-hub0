import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleReactValidator from 'simple-react-validator';
// import { NavHashLink as NavLink } from 'react-router-hash-link';
import { withRouter, Link } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import { withFirebase } from '../../../Firebase';
// import { compose } from 'recompose'
import { Button, Container, Col, Row,  Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class RegisterModal extends React.Component {
   _isMounted = false;
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator();
    this.state = {
      InitRegisterUser: {
        email: '',
        password: ''
      },
      modal: false,
      loading: false,
      userform: {
          title: 'Mr.',
          firstname: '',
          lastname:  '',
          phone:  '',
          accepted: true,
          error: null,
      },
    };

    this.toggle = this.toggle.bind(this);
    this.submitFormHandler = this.submitFormHandler.bind(this);
    this.userFormHandler = this.userFormHandler.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  
  userFormHandler(event){
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { userform, InitRegisterUser } = this.state;
        this.setState({
            userform: {
                ...userform,
                [name]: value
            },
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
      const {firstname, lastname, phone, title} = this.state.userform;
      const {email, password} = this.state.InitRegisterUser;
        this.props.firebase.doCreateUserWithEmailAndPassword(email, password)
        .then(authUser =>{
          // console.log(authUser.user);
          // Create a user in your Firebase realtime database
        return this.props.firebase
          .user(authUser.user.uid)
          .set({
            title,
            firstname,
            lastname,
            phone,
            email,
          });
          })
        .then(() => {
          return this.props.firebase.doVerifyEmailAddress();
        })
        .then(() => {
          this.setState({
            ...this.state.InitRegisterUser,
            loading: false,
             ...this.state.userform,
             modal: false
          });
          this.props.history.push({pathname: '/'});
        })
        .catch(error =>{
          this.setState({
            ...this.state.InitRegisterUser,
            ...this.state.userform,
            userform: {error: error},
            loading: false,
            modal: true
          });
          console.log(error);
        });
      // this.props.firebase.doVerifyEmailAddress()
      //   .then(authUser => {
      //     window.localStorage.setItem('emailForSignIn', email);
          
      //     console.log(authUser);
      //   })
      //   .catch(error =>{
      //     console.log(error);
      //   });
    
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  }
  
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    const { userform } = this.state;
    const { InitRegisterUser } = this.state;
    
    let form = (
           <Form onSubmit={this.submitFormHandler}>
                <FormGroup>
                  <Label for="gender">Title</Label>
                  <Input type="select" name="title" value={userform.title} onChange={this.userFormHandler} id="title" placeholder="Title">
                    <option value="Mr.">Mr.</option>  
                    <option value="Mrs.">Mrs.</option>
                    <option value="Ms.">Ms.</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="firstname">First name</Label>
                  <Input type="text" name="firstname" id="firstname" value={userform.firstname}  onChange={this.userFormHandler} placeholder="First Name" />
                </FormGroup>
                 <FormGroup>
                  <Label for="lastname">Last name</Label>
                  <Input type="text" name="lastname" id="lastname" value={userform.lastname} onChange={this.userFormHandler} placeholder="Last Name" />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input name="email" type="text" value={InitRegisterUser.email}  onChange={this.userFormHandler} id="email" placeholder="Email" />
                   <span style={{color:'red'}}>{this.validator.message('email', InitRegisterUser.email, 'required|email|regex')}</span>
                   <span style={{color:'red'}}>{userform.error && <p>{userform.error.message}</p>}</span>
                </FormGroup>
                <FormGroup>
                  <Label for="phone">Phone Number</Label>
                  <Input name="phone" type="text" value={userform.phone}  onChange={this.userFormHandler} id="phone" placeholder="Phone Number" />
                  <span style={{color:'red'}}>{this.validator.message('phone', userform.phone, 'required|phone|min:11|max:14')}</span>
                </FormGroup>
                <FormGroup>
                  <Label for="Password">Password</Label>
                  <Input type="password" name="password" value={InitRegisterUser.password} onChange={this.userFormHandler} id="Password" placeholder="Password" />
                  <span style={{color:'red'}}>{this.validator.message('password', InitRegisterUser.password, 'required|min:7')}</span>
                </FormGroup>
                <FormGroup>
                  <Input style={{marginLeft: "5px"}} type="checkbox" defaultChecked={userform.accepted} name="accepted" id="accepted" onChange={this.userCheckHandler} />
                  <FormText style={{marginLeft: "25px"}} color="muted">
                   Agreed to our policy? <Button tag={Link} to='/terms-and-conditions'>Terms & Condition</Button>
                  </FormText>
                  <span style={{color:'red'}}>{this.validator.message('checkbox', userform.accepted, 'accepted')}</span>
                </FormGroup>
                <Button color="primary" >Sign up</Button>
            </Form>
      );
      
      if(this.state.loading){
        form = <Spinner />;
      }
      
    return (
      <div>
        <Container>
         <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
             <h4  style={{color:"#ef5635", marginTop: "20px"}}>Please Register to proceed!</h4>
          </Col>
         </Row>
         <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            {form}
            <div>
             <div><span>Already have an account? <Button tag={Link} to='/login' color="link">Login</Button></span></div>
              <Button color="secondary" tag={Link} to='/'>Cancel</Button>
            </div>
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}

export default (withRouter(withFirebase(RegisterModal)));