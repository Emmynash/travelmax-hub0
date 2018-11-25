import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleReactValidator from 'simple-react-validator';
import Axios from '../../../Axios-users';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,  Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class RegisterModal extends React.Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator();
    this.state = {
      modal: false,
      userform: {
          firstname: { 
            value: ''
          },
          lastname:  {
            value: ''
          },
          email:  { 
            value: ''
          },
          phone:  { 
            value: ''
          },
          password:  {
            value: ''
          },
          accepted: {
            value:false
          }
      }
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
  
  userFormHandler(event, inputIdentifier){
    const updatedUserForm = {
      ...this.setState.userform
    };
    const updatedFormElement = {
      ...updatedUserForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedUserForm[inputIdentifier] = updatedFormElement;
    this.setState({
      userform: updatedUserForm
    });
  }
  
  submitFormHandler(){
    if( this.validator.allValid() ){
      alert('Form submitted successfully!');
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  }
  render() {
    const formElement = {};
    for(let key in this.state.userform){
      formElement.push({
        id: key,
        config: this.state.userform[key]
      });
    }
    return (
      <div>
        <Button color="link" style={{color: '#ef5635', textDecoration: 'none'}} onClick={this.toggle}>REGISTER</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader style={{color:"#ef5635"}} toggle={this.toggle}>REGISTER</ModalHeader>
          <ModalBody>
           <Form onSubmit={this.submitFormHandler}>
                <FormGroup>
                  <Label for="gender">Title</Label>
                  <Input type="select" name="title" id="title" placeholder="Title">
                    <option>Mr.</option>  
                    <option>Mrs.</option>
                    <option>Ms.</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="firstname">First name</Label>
                  <Input type="text" name="firstname" id="firstname" value={formElement.config.value} onChange={(event) =>this.userFormHandler(event, formElement.id)} placeholder="First Name" />
                </FormGroup>
                 <FormGroup>
                  <Label for="lastname">Last name</Label>
                  <Input type="text" name="lastname" id="lastname" value={formElement.config.value} onChange={(event) =>this.userFormHandler(event, formElement.id)} placeholder="Last Name" />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input name="email" type="text"  value={formElement.config.value} onChange={(event) =>this.userFormHandler(event, formElement.id)} id="email" placeholder="Email" />
                   <span style={{color:'red'}}>{this.validator.message('email', formElement.id, 'required|email|regex')}</span>
                </FormGroup>
                <FormGroup>
                  <Label for="phone">Phone Number</Label>
                  <Input name="phone" type="text"  value={formElement.config.value} onChange={(event) =>this.userFormHandler(event, formElement.id)} id="phone" placeholder="Phone Number" />
                   <span style={{color:'red'}}>{this.validator.message('phone', this.state.user.phone, 'required|phone|min:11|max:14')}</span>
                </FormGroup>
                <FormGroup>
                  <Label for="Password">Password</Label>
                  <Input type="password" name="password" onChange={this.setPassword} value={this.state.user.password} id="Password" placeholder="Password" />
                  <span style={{color:'red'}}>{this.validator.message('password', this.state.user.password, 'required')}</span>
                </FormGroup>
                <FormGroup>
                  <Input style={{marginLeft: "5px"}} type="checkbox" name="accepted" id="accepted" value={formElement.config.value} checked={(event) =>this.userFormHandler(event, formElement.id)} />
                  <FormText style={{marginLeft: "25px"}} color="muted">
                   Agree to <a href='/'>Terms & Condition</a>
                  </FormText>
                  <span style={{color:'red'}}>{this.validator.message('checkbox', formElement.id, 'accepted')}</span>
                </FormGroup>
                <Button color="primary" >Sign up</Button>
            </Form>
          </ModalBody>
          <ModalFooter>
            <span>Already have an account? <Button color="primary" onClick={this.toggle}>sign in</Button>{' '}</span>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default RegisterModal;