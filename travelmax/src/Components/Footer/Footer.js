import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";
import classes from './Footer.css';

class FooterPage extends React.Component {
render() {
return (
        <Footer color="blue" className="font-small pt-4 mt-4">
          <Container fluid className="text-center text-md-left">
            <Row>
              <Col md="6">
              <h5 className="title">Travelmax</h5>
              <p>
              Travelemax is one of the leader in online travel and related services, and care about your comfort + pleasure. All documents belongs to travelmax. All Right Reserved
              </p>
              </Col>
               
             <Col md="2">
             <h5 style={{marginLeft:'25px',}} className="title">Quick</h5>
              <ul className={classes.Footer}>
                <li className="list-unstyled">
                  <a href="/">Faq</a>
                </li>
                <li className="list-unstyled">
                  <a href="/">about us</a>
                </li>
                <li className="list-unstyled">
                  <a href="/">Flights</a>
                </li>
              </ul>
              </Col>
             <Col md="2">
             <h5 style={{marginLeft:'30px'}} className="title">Links</h5>
              <ul   className={classes.Footer}>
                <li className="list-unstyled">
                  <a href="/">Home</a>
                </li>
                <li className="list-unstyled">
                  <a href="/">Flights</a>
                </li>
                <li className="list-unstyled">
                  <a href="/">Hotels</a>
                </li>
              </ul>
              </Col>
            </Row>
          </Container>
          <div className="footer-copyright text-center py-3">
            <Container fluid>
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="/"> infinitysystems.com</a>
            </Container>
          </div>
        </Footer>
    );
  }
}

export default FooterPage;