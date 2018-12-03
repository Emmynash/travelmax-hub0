import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleReactValidator from 'simple-react-validator';
import { withRouter } from 'react-router-dom';
import Spinner from '../UI/Modal/Spinner/Spinner';
import { withFirebase } from '../Firebase';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,  Form, FormGroup, Label, Input } from 'reactstrap';

class PasswordReset extends React.Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator();
    this.state = {
      InitRegisterUser: {
        email: '',
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
    console.log(event.target.value);
  }
  
 
  submitFormHandler(event){
    event.preventDefault();
    if( this.validator.allValid() ){
      this.setState({loading: true});
      
      const {email} = this.state.InitRegisterUser;
        this.props.firebase.doPasswordReset(email)
        .then(() =>{
          this.setState({
            ...this.state.InitRegisterUser,
            loading: false,
             modal: false
          });
          this.props.history.push({pathname: '/'});
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

  render() {
    const { InitRegisterUser } = this.state;
    let form = <Form onSubmit={this.submitFormHandler}>
                <span style={{color:'red'}}>{InitRegisterUser.error && <p>{InitRegisterUser.error.message}</p>}</span>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input name="email" type="text" value={InitRegisterUser.email}  onChange={this.userFormHandler} id="email" placeholder="Email" />
                   <span style={{color:'red'}}>{this.validator.message('email', InitRegisterUser.email, 'required|email|regex')}</span>
                </FormGroup>
                <Button color="primary">Reset</Button>
            </Form>;
    if(this.state.loading){
      form = <Spinner />;
    }
    return (
      <div>
        <Button color="link" style={{color: '#ef5635', textDecoration: 'none'}} onClick={this.toggle}>Reset Password</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} style={{color:"#ef5635"}}>Type in your email, get a link to reset your password</ModalHeader>
          <ModalBody>
           {form}
          </ModalBody>
          <ModalFooter>
           
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default (withRouter(withFirebase(PasswordReset)));