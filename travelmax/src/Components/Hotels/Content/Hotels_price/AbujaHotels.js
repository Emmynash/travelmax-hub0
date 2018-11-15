import React, { Component } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Col, Row, } from "mdbreact";
import Button from '@material-ui/core/Button';
import MaterialIcon from 'material-icons-react';


// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//   },
// });
class AbujaHotels extends Component{
   
   state = {
    open: false,
  };

  handleClick = () => {
    this.setState(state => ({
      open: !state.open,
    }));
  };

  handleClickAway = () => {
    this.setState({
      open: false,
    });
  };
  
  
 render(){
// const {classes} = this.props;
const { open } = this.state;
return(
 <div>
    <ClickAwayListener onClickAway={this.handleClickAway}>
      <div>
         <Button color="inherit" onClick={this.handleClick} style={{textDecoration: 'none', padding: '10px 10px 10px 0', color: '#000', borderBottom: '2px solid #ef5635', width: '200px', textAlign: 'center', marginBottom: 'auto' }}>Lagos Hotels<span style={{marginTop: 'auto'}}><MaterialIcon icon="keyboard_arrow_down" color='grey' size={35}/></span></Button>
           {open ? (
                <Row style={{color: 'black', alignItems: 'center'}}>
                    <Col md="6">
                          <ul style={{textAlign: 'left', marginLeft: '100px'}}>
                            <li className="list-unstyled">
                             Double M Exquisite Suites And Lounge
                            </li>
                            <li className="list-unstyled">
                              Integrity Hotel And Suites
                            </li>
                            <li className="list-unstyled">
                              November 5 Hotel
                            </li>
                             <li className="list-unstyled">
                              Extended Stay Grand Hotel
                            </li>
                             <li className="list-unstyled">
                             The George 
                            </li>
                             <li className="list-unstyled">
                              Hotel Ibis Lagos Ikeja
                            </li>
                          </ul>
                     </Col>
                     <Col md="6">
                          <ul style={{textAlign: 'left', marginLeft: '100px'}} >
                            <li className="list-unstyled">
                             ₦20,000.00 +
                            </li>
                            <li className="list-unstyled">
                             ₦10,000.00 +
                            </li>
                            <li className="list-unstyled">
                             ₦12,000.00 +
                            </li>
                            <li className="list-unstyled">
                             ₦12,000.00 +
                            </li>
                            <li className="list-unstyled">
                             ₦100,000.00 +
                            </li>
                            <li className="list-unstyled">
                             ₦26,000.00 +
                            </li>
                          </ul>
                     </Col>
                </Row>
             ) : null}
            </div>
        </ClickAwayListener>
    </div>
    );
 }
    
}

export default AbujaHotels;
                                
                                