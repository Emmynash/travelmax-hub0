import React, { Component } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Col, Row, } from "mdbreact";
import Button from '@material-ui/core/Button';
import MaterialIcon from 'material-icons-react';



class JosHotels extends Component{
   
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

const { open } = this.state;
return(
 <div>
    <ClickAwayListener onClickAway={this.handleClickAway}>
      <div>
         <Button color="inherit" onClick={this.handleClick} style={{textDecoration: 'none', padding: '10px 10px 10px 0', color: '#000', borderBottom: '2px solid #ef5635', width: '200px', textAlign: 'center', marginBottom: 'auto' }}>Jos Hotels<span style={{marginTop: 'auto'}}><MaterialIcon icon="keyboard_arrow_down" color='grey' size={35}/></span></Button>
           {open ? (
                <Row style={{color: 'black', alignItems: 'center'}}>
                    <Col md="6">
                          <ul style={{textAlign: 'left', marginLeft: '100px'}}>
                            <li className="list-unstyled">
                              Silk Suites 
                            </li>
                            <li className="list-unstyled">
                              Steffan Hotel And Suites
                            </li>
                            <li className="list-unstyled">
                              Lamonde Hotel
                            </li>
                             <li className="list-unstyled">
                              Qualer Apartment 
                            </li>
                             <li className="list-unstyled">
                              Elim Top Suites
                            </li>
                             <li className="list-unstyled">
                              Franzy Suites And Lounge
                            </li>
                          </ul>
                     </Col>
                     <Col md="6">
                          <ul style={{textAlign: 'left', marginLeft: '100px'}} >
                            <li className="list-unstyled">
                             ₦10,000.00 +
                            </li>
                            <li className="list-unstyled">
                             ₦5,740.00 +
                            </li>
                            <li className="list-unstyled">
                             ₦12,075.00 +
                            </li>
                            <li className="list-unstyled">
                             ₦10,000.00 +
                            </li>
                            <li className="list-unstyled">
                             ₦6,075.00 +
                            </li>
                            <li className="list-unstyled">
                             ₦7,500.00 +
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

export default JosHotels;
                                
                                