import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleReactValidator from 'simple-react-validator';
import axios from '../../../../Axios-users';
import LoginModal from '../Login/loginModal';
import { withRouter } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,  Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class RegisterModal extends React.Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator();
    this.state = {
      modal: false,
      loading: true,
      userform: {
          title: 'Mr.',
          firstname: '',
          lastname:  '',
          email:  '',
          phone:  '',
          password:  '',
          accepted: true
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
        const { userform } = this.state;
        this.setState({
            userform: {
                ...userform,
                [name]: value
            }
        });
    console.log(event.target.value);
  }
  
  submitFormHandler(event){
    event.preventDefault();
    if( this.validator.allValid() ){
      const formData = {};
      for(let inputIdentity in this.state.userform){
        formData[inputIdentity] = this.state.userform[inputIdentity];
      }
      const user = {
        userData: formData
      };
      
    axios.post('/user.json', user)
         .then(response => {
           this.setState({
             loading: false
           });
           console.log(response);
           this.props.history.push({pathname: '/flights/search'});
         })
         .then(error => {
           this.setState({
             loading: false
           });
           console.log(error);
         });
      // alert('Form submitted successfully!');
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  }
  render() {
    const { userform } = this.state;
    
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
                  <Input name="email" type="text" value={userform.email}  onChange={this.userFormHandler} id="email" placeholder="Email" />
                   <span style={{color:'red'}}>{this.validator.message('email', userform.email, 'required|email|regex')}</span>
                </FormGroup>
                <FormGroup>
                  <Label for="phone">Phone Number</Label>
                  <Input name="phone" type="text" value={userform.phone}  onChange={this.userFormHandler} id="phone" placeholder="Phone Number" />
                  <span style={{color:'red'}}>{this.validator.message('phone', userform.phone, 'required|phone|min:11|max:14')}</span>
                </FormGroup>
                <FormGroup>
                  <Label for="Password">Password</Label>
                  <Input type="password" name="password" value={userform.password} onChange={this.userFormHandler} id="Password" placeholder="Password" />
                  <span style={{color:'red'}}>{this.validator.message('password', userform.password, 'required|min:7')}</span>
                </FormGroup>
                <FormGroup>
                  <Input style={{marginLeft: "5px"}} type="checkbox" defaultChecked={userform.accepted} name="accepted" id="accepted" onChange={this.userCheckHandler} />
                  <FormText style={{marginLeft: "25px"}} color="muted">
                   Agree to <a href='/'>Terms & Condition</a>
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
        <Button color="link" style={{color: '#ef5635', textDecoration: 'none'}} onClick={this.toggle}>Get Started</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader style={{color:"#ef5635"}} toggle={this.toggle}>Please Register to proceed!</ModalHeader>
          <ModalBody>
           {form}
          </ModalBody>
          <ModalFooter>
            <div><span>Already have an account? <LoginModal /></span></div> <br />
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default (withRouter(RegisterModal));