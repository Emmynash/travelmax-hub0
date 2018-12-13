import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleReactValidator from 'simple-react-validator';
import { withRouter } from 'react-router-dom';
import Spinner from '../UI/Modal/Spinner/Spinner';
import { withFirebase } from '../Firebase';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,  Form, FormGroup, Label, Input } from 'reactstrap';

class PasswordUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator();
    this.state = {
      InitRegisterUser: {
        passwordOne: '',
        passwordTwo: '',
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
      
      const {passwordOne} = this.state.InitRegisterUser;
        this.props.firebase.doPasswordUpdate(passwordOne)
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
    
    const isInvalid = InitRegisterUser.passwordOne !== InitRegisterUser.passwordTwo || InitRegisterUser.passwordOne === '';
    
    let form = <Form onSubmit={this.submitFormHandler}>
                <span style={{color:'red'}}>{InitRegisterUser.error && <p>{InitRegisterUser.error.message}</p>}</span>
                <FormGroup>
                  <Label for="passwordOne">Password</Label>
                  <Input name="passwordOne" type="password" value={InitRegisterUser.passwordOne}  onChange={this.userFormHandler} id="passwordOne" placeholder="Password" />
                   <span style={{color:'red'}}>{this.validator.message('password', InitRegisterUser.passwordOne, 'required')}</span>
                </FormGroup>
                <FormGroup>
                  <Label for="passwordTwo">Retype Password</Label>
                  <Input name="passwordTwo" type="password" value={InitRegisterUser.passwordTwo}  onChange={this.userFormHandler} id="passwordTwo" placeholder="Retype Password" />
                   <span style={{color:'red'}}>{this.validator.message('Second password', InitRegisterUser.passwordTwo, 'required')}</span>
                </FormGroup>
                <Button disabled={isInvalid} color="primary">Reset my password</Button>
            </Form>;
    if(this.state.loading){
      form = <Spinner />;
    }
    return (
      <div>
        <Button outline color="secondary" style={{color: '#ef5635', textDecoration: 'none'}} onClick={this.toggle}>Reset Pass</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} style={{color:"#000"}}>Reset your current password. <br /><span style={{color:"#ef5635"}}> If password fields don't match, button will not be enable</span></ModalHeader>
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

export default (withRouter(withFirebase(PasswordUpdate)));