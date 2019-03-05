import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";
// import classes from './Footer.css';
import { NavLink } from 'react-router-dom';

class FooterPage extends React.Component {
render() {
return (
        <Footer color="blue" className="font-small pt-4 mt-4">
          <Container fluid className="text-center text-md-left">
            <Row>
              <Col md="5">
              <h5 className="title">Travelemaxhub</h5>
              <p>
              Travelemaxhub is one of the leader in online travel and related services, and care about your comfort + pleasure. All documents belongs to Travelemaxhub. All Right Reserved
              </p>
              </Col>
               
             <Col md="3">
             <h5 style={{marginLeft:'25px',}} className="title">Quick</h5>
              <ul style={{color: '#ef5635'}}>
                <li style={{color: '#ef5635'}} className="list-unstyled">
                 <NavLink to="/faq">Faq</NavLink>
                </li>
                <li style={{color: '#ef5635'}} className="list-unstyled">
                  <a href="/">about us</a>
                </li>
                <li style={{color: '#ef5635'}} className="list-unstyled">
                 <a href="/">How it works</a>
                </li>
              </ul>
              </Col>
             <Col md="3">
             <h5 style={{marginLeft:'50px'}} className="title">Links</h5>
              <ul style={{color: '#ef5635'}}>
                <li style={{color: '#ef5635'}} className="list-unstyled">
                   <NavLink to="/terms-and-conditions">Terms & Condition</NavLink>
                </li>
                <li style={{color: '#ef5635'}} className="list-unstyled">
                  <NavLink to="/">Flights</NavLink>
                </li>
                <li style={{color: 'red'}} className="list-unstyled">
                  <NavLink to="/hotels">Hotels</NavLink>
                </li>
              </ul>
              </Col>
            </Row>
          </Container>
          <div className="footer-copyright text-center py-3">
            <Container fluid>
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="/"> travelmaxhub.com</a>
            </Container>
          </div>
        </Footer>
    );
  }
}

export default FooterPage;