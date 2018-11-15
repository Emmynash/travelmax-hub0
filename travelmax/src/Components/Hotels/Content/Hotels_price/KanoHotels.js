import React, { Component } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Col, Row, } from "mdbreact";
import Button from '@material-ui/core/Button';
import MaterialIcon from 'material-icons-react';



class KanoHotels extends Component{
   
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
         <Button color="inherit" onClick={this.handleClick} style={{textDecoration: 'none', padding: '10px 10px 10px 0', color: '#000', borderBottom: '2px solid #ef5635', width: '200px', textAlign: 'center', marginBottom: 'auto' }}>Kano Hotels<span style={{marginTop: 'auto'}}><MaterialIcon icon="keyboard_arrow_down" color='grey' size={35}/></span></Button>
           {open ? (
                <Row style={{color: 'black', alignItems: 'center'}}>
                    <Col md="6">
                          <ul style={{textAlign: 'left', marginLeft: '100px'}}>
                            <li className="list-unstyled">
                              Bristol Palace Hotel 
                            </li>
                            <li className="list-unstyled">
                              Prince Hotel
                            </li>
                            <li className="list-unstyled">
                             Sultanate Suites
                            </li>
                             <li className="list-unstyled">
                              Royal Tropicana Hotel 
                            </li>
                             <li className="list-unstyled">
                              Haitel Guest Inn
                            </li>
                             <li className="list-unstyled">
                              Tahir Guest Palace
                            </li>
                          </ul>
                     </Col>
                     <Col md="6">
                          <ul style={{textAlign: 'left', marginLeft: '100px'}} >
                            <li className="list-unstyled">
                             ₦32,400.00 +
                            </li>
                            <li className="list-unstyled">
                             ₦29,000.00 +
                            </li>
                            <li className="list-unstyled">
                             ₦10,600.00 +
                            </li>
                            <li className="list-unstyled">
                             ₦11,700.00 +
                            </li>
                            <li className="list-unstyled">
                             ₦10,00.00 +
                            </li>
                            <li className="list-unstyled">
                             ₦20,416.00 +
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

export default KanoHotels;
                                
                                