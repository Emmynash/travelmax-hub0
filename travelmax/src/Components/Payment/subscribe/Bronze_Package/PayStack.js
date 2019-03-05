import React from 'react';
import PaystackButton from 'react-paystack';
import { Button, Modal, ModalHeader, ModalBody, } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { AuthUserContext } from  '../../../Sessions';
import Component from '@reactions/component';


class PayStack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      key: process.env.REACT_APP_API_KEY_PAYSTACK_TEST, //PAYSTACK PUBLIC KEY
      email: "",  // customer email
      amount: 3600000 //equals NGN36,000,
  
    };
   
    this.toggle = this.toggle.bind(this);
  }
  
 

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  
   callback = (response) => {
    		console.log(response); // card charged successfully, get reference here
    		this.props.history.push({pathname: '/dashboard'});
    	}

  close = () => {
    	console.log("Payment closed");
    	this.setState(prevState => ({
      modal: !prevState.modal
    }));
    }

  getReference = () => {
    		//you can put any unique reference implementation code here
    	let text = "tr0012";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

    	for( let i=0; i < 15; i++ )
    			text += possible.charAt(Math.floor(Math.random() * possible.length));

    		return text;
    	}
  componentDidMount(){
    console.log(this.props.userEmail);
  }
   
  render() {
      
 return (
     <div>
      <Button style={{marginLeft: "40px", width: "90%"}} color="secondary" onMouseOver={this.userEmail} onClick={this.toggle}>Proceed</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Make Payment</ModalHeader>
          <ModalBody>
            <div>
                    <p>
                    <AuthUserContext.Consumer>
                           {authUser => (
                                  <Component didMount={() => console.log(authUser)}>
                                    <PaystackButton
                                        size="300px"
                                        text="Make Payment"
                                        class="payButton"
                                        callback={this.callback}
                                        close={this.close}
                                        disabled={false} //disable payment button*
                                        embed={true} //payment embed in your app instead of a pop up
                                        reference={this.getReference()}
                                        email={authUser.email}
                                        amount={this.state.amount}
                                        paystackkey={this.state.key}
                                        tag="button"//it can be button or a or input tag
                                     />
                                  </Component>
                            )}
                             
                     </AuthUserContext.Consumer>
                     </p>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default (withRouter(PayStack));