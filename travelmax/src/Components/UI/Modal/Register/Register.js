import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,  Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class RegisterModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="link" style={{color: '#000', textDecoration: 'none'}} onClick={this.toggle}>Register</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Register</ModalHeader>
          <ModalBody>
           <Form>
                <FormGroup>
                  <Label for="fname">First name</Label>
                  <Input type="fnmae" name="fname" id="fname" placeholder="First Name" />
                </FormGroup>
                 <FormGroup>
                  <Label for="lname">Last name</Label>
                  <Input type="lname" name="lname" id="lname" placeholder="Last Name" />
                </FormGroup>
                <FormGroup>
                  <Label for="gender">Gender</Label>
                  <Input type="select" name="gender" id="gender" placeholder="Gender">
                    <option>Male</option>  
                    <option>Female</option>
                    <option>Other</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input type="email" name="email" id="email" placeholder="Email" />
                </FormGroup>
                <FormGroup>
                  <Label for="Password">Password</Label>
                  <Input type="password" name="password" id="Password" placeholder="Password" />
                </FormGroup>
                <FormGroup>
                  <Label for="image">File</Label>
                  <Input type="file" name="image" id="image" />
                  <FormText color="muted">
                    Best image size 24 X 36px.
                  </FormText>
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