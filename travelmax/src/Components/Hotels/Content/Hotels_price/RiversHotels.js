import React, { Component } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Col, Row, } from "mdbreact";
import Button from '@material-ui/core/Button';
import MaterialIcon from 'material-icons-react';



class RiversHotels extends Component{
   
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
         <Button color="inherit" onClick={this.handleClick} style={{textDecoration: 'none', padding: '10px 10px 10px 0', color: '#000', borderBottom: '2px solid #ef5635', width: '200px', textAlign: 'center', marginBottom: 'auto' }}>Rivers Hotels<span style={{marginTop: 'auto'}}><MaterialIcon icon="keyboard_arrow_down" color='grey' size={35}/></span></Button>
           {open ? (
                <Row style={{color: 'black', alignItems: 'center'}}>
                    <Col md="6">
                          <ul style={{textAlign: 'left', marginLeft: '100px'}}>
                            <li className="list-unstyled">
                             Hotel Presidential
                            </li>
                            <li className="list-unstyled">
                              Polo Court 
                            </li>
                            <li className="list-unstyled">
                              Goldfinger Hotels Limited
                            </li>
                             <li className="list-unstyled">
                              De Edge Hotel
                            </li>
                             <li className="list-unstyled">
                              Le Meridien Ogeyi Place 
                            </li>
                             <li className="list-unstyled">
                              Novotel Port Harcourt
                            </li>
                          </ul>
                     </Col>
                     <Col md="6">
                          <ul style={{textAlign: 'left', marginLeft: '100px'}} >
                            <li className="list-unstyled">
                             ₦50,000.00 +
                            </li>
                            <li className="list-unstyled">
                             ₦27,000.00 +
                            </li>
                            <li className="list-unstyled">
                             ₦6,000.00 +
                            </li>
                            <li className="list-unstyled">
                             ₦24,000.00 +
                            </li>
                            <li className="list-unstyled">
                             ₦76,000.00 +
                            </li>
                            <li className="list-unstyled">
                             ₦47,000.00 +
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

export default RiversHotels;
                                
                                