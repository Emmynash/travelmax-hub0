import React, { Component } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Col, Row, } from "mdbreact";
import Button from '@material-ui/core/Button';
import MaterialIcon from 'material-icons-react';



class AkwaIbomHotels extends Component{
   
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
         <Button color="inherit" onClick={this.handleClick} style={{textDecoration: 'none', padding: '10px 10px 10px 0', color: '#000', borderBottom: '2px solid #ef5635', width: '200px', textAlign: 'center', marginBottom: 'auto' }}>Akwa Ibom Hotels<span style={{marginTop: 'auto'}}><MaterialIcon icon="keyboard_arrow_down" color='grey' size={35}/></span></Button>
           {open ? (
                <Row style={{color: 'black', alignItems: 'center'}}>
                    <Col md="6">
                          <ul style={{textAlign: 'left', marginLeft: '100px'}}>
                            <li className="list-unstyled">
                              Ibom Hotel And Golf Resort
                            </li>
                            <li className="list-unstyled">
                              Villa Marina Hotel
                            </li>
                            <li className="list-unstyled">
                              Villa View Hotels Ltd
                            </li>
                             <li className="list-unstyled">
                              Macaire Resorts 
                            </li>
                             <li className="list-unstyled">
                              Eemjm Hotel 
                            </li>
                             <li className="list-unstyled">
                              Davok Suites 
                            </li>
                          </ul>
                     </Col>
                     <Col md="6">
                          <ul style={{textAlign: 'left', marginLeft: '100px'}} >
                            <li className="list-unstyled">
                             ₦46,000.00 +
                            </li>
                            <li className="list-unstyled">
                             ₦11,500.00 +
                            </li>
                            <li className="list-unstyled">
                             ₦4,500.00 +
                            </li>
                            <li className="list-unstyled">
                             ₦10,000.00 +
                            </li>
                            <li className="list-unstyled">
                             ₦13,200.00 +
                            </li>
                            <li className="list-unstyled">
                             ₦14,700.00 +
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

export default AkwaIbomHotels;
                                
                                