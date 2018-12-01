import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterModal from '../Register/Register';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,  Form, FormGroup, Label, Input } from 'reactstrap';

class LoginModal extends React.Component {
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
        <Button color="link" style={{color: '#ef5635', textDecoration: 'none'}} onClick={this.toggle}>Login</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} style={{color:"#ef5635"}}>Please Login!</ModalHeader>
          <ModalBody>
           <Form>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                </FormGroup>
                <Button color="primary">Sign in</Button>
            </Form>
          </ModalBody>
          <ModalFooter>
            <div><span>Don't have an account yet? <RegisterModal /></span></div>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;