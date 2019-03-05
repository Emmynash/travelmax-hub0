import React from 'react';
import queryString from 'query-string';
import { compose } from 'recompose';
import { Link } from 'react-router-dom';

import {  TabContent, 
      TabPane, 
      Nav, 
      NavItem, 
      NavLink, 
      Card, 
      Button, 
      CardTitle, 
      CardText, 
      Row, 
      Col, 
      Table,} from 'reactstrap';
import classnames from 'classnames';
import { withAuthorization, AuthUserContext } from  '../../../Sessions';
import PayStack from './PayStack';

class Subscribe extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
       };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  componentDidMount(){
    console.log(this.props.location.search);
    // let value =  queryString.parse(this.props.location.search);
    // console.log(value);
    // return value;
  }
  render() {
    return (
      <div style={{marginTop: "20px"}}>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Subscription
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
              <Row>
               <Table borderless>
                            <thead>
                              <tr>
                                <th></th>
                                <th>
                                   <AuthUserContext.Consumer>
                                      {authUser => (
                                        <div>
                                         <span style={{color: "#ef5635", marginRight: "0px"}}>{authUser.email};</span><b>  Confirm Purchase</b>
                                        </div>
                                      )}
                                   </AuthUserContext.Consumer>
                                </th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th> <span style={{marginLeft: "0px", alignItems: "right"}}>PACKAGE: <span style={{color: "#C0C0C0"}}>SILVER</span></span></th>
                              </tr>
                            </thead>
                 </Table>
              </Row>
              <Card body  style={{alignItems: "center"}}>
                  <CardTitle>Summary</CardTitle>
                  <CardText>
                      <Table borderless>
                            <thead>
                              <tr>
                                <th></th>
                                <th>Subtotal</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>₦76, 000.00</th>
                              </tr>
                            </thead>
                             <thead>
                              <tr>
                                <th></th>
                                <th>Charges</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>000.00</th>
                              </tr>
                            </thead>
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Total</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>₦76, 000.00</th>
                              </tr>
                            </thead>
                            <tbody>
                            </tbody>
                      </Table>
                  </CardText>
                  <CardText>
                        <span style={{ marginLeft: "20px", marginRight: "100px"}}><Button tag={Link} to='/' color="link">Cancel</Button></span>  <span style={{ marginLeft: "100px"}}><span style={{color: "#ef5635"}}><b>Help?</b></span> <Button tag={Link} to='/faq' color="link">FAQ</Button><Button tag={Link} to='/terms-and-conditions' color="link">Terms & Conditions</Button></span>
                  </CardText>
               </Card>
               <Card body>
                 <CardTitle></CardTitle>
                    <CardText>
                    </CardText>
                    <PayStack />
                  {/*<Button>Proceed</Button>*/}
               </Card>
                <Card body style={{alignItems: "center"}}> 
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

const condition = authUser => !!authUser;
export default compose(withAuthorization(condition)) (Subscribe);
