import React, { Component } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Col, Row, } from "mdbreact";
import Button from '@material-ui/core/Button';
import MaterialIcon from 'material-icons-react';



class AccraHotels extends Component{
   
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
         <Button color="inherit" onClick={this.handleClick} style={{textDecoration: 'none', padding: '10px 10px 10px 0', color: '#000', borderBottom: '2px solid #ef5635', width: '200px', textAlign: 'center', marginBottom: 'auto' }}>Abuja Hotels<span style={{marginTop: 'auto'}}><MaterialIcon icon="keyboard_arrow_down" color='grey' size={35}/></span></Button>
           {open ? (
                <Row style={{color: 'black', alignItems: 'center'}}>
                    <Col md="6">
                          <ul style={{textAlign: 'left', marginLeft: '100px'}}>
                            <li className="list-unstyled">
                             The Corinthia Villa Hotel & Suites
                            </li>
                            <li className="list-unstyled">
                              Fraser Suites Abuja
                            </li>
                            <li className="list-unstyled">
                              House 9 Apartments
                            </li>
                             <li className="list-unstyled">
                              Chelsea Hotel (Central Business District) 
                            </li>
                             <li className="list-unstyled">
                              Grand Ibro Hotel
                            </li>
                             <li className="list-unstyled">
                              Newton Park Hotels And Resorts Limited Annex
                            </li>
                          </ul>
                     </Col>
                     <Col md="6">
                          <ul style={{textAlign: 'left', marginLeft: '100px'}} >
                            <li className="list-unstyled">
                             ₦38,000.00 +
                            </li>
                            <li className="list-unstyled">
                             ₦96,500.00 +
                            </li>
                            <li className="list-unstyled">
                             ₦15,000.00 +
                            </li>
                            <li className="list-unstyled">
                             ₦43,650.00 +
                            </li>
                            <li className="list-unstyled">
                             ₦10,000.00 +
                            </li>
                            <li className="list-unstyled">
                             ₦31,500.00 +
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

export default AccraHotels;
                                
                                