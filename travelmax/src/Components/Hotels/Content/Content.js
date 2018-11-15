import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MaterialIcon from 'material-icons-react';
import grid from './Content.css';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
// import grey from '@material-ui/core/colors/grey';

import Aux from '../../../HOC/Aux/Aux';
// import CarouselSlider from "react-carousel-slider";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Col, Row, } from "mdbreact";
import Accra from '../../../Assets/Images/Slider/top_cities/Accra.jpg';
import Paris from '../../../Assets/Images/Slider/top_cities/Paris.jpg';
import Abuja from '../../../Assets/Images/Slider/top_cities/Abuja.jpg';
import London from '../../../Assets/Images/Slider/top_cities/London.jpeg';
import Nairobi from '../../../Assets/Images/Slider/top_cities/Nairobi.jpg';
import Johannesburg from '../../../Assets/Images/Slider/top_cities/Johannesburg.jpg';

// Hotels Prices
import AbujaHotels from './Hotels_price/AbujaHotels';
import JosHotels from './Hotels_price/JosHotels';
import KanoHotels from './Hotels_price/KanoHotels';
import RiversHotels from './Hotels_price/RiversHotels';
import AkwaIbomHotels from './Hotels_price/AkwaIbomHotels';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});



class Content extends Component{
   
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
        const {classes} = this.props;
        const { open } = this.state;
        return(
            <Aux>
                <div className={classes.root}>
                      <br /> <br />
                         <Grid className={grid.content} container spacing={24}>
                            <Grid item xs={12}>
                            
                                <Paper className={classes.paper}>
                                <MaterialIcon icon="hotel" color='grey' size={60}/>
                                     <Typography variant="h4" gutterBottom>
                                        Travelmax: Global hotels Search
                                     </Typography>
                                                              Travelmax hotel search allows users to compare hotel prices in just a few clicks. Travelers regularly use the hotel comparison to compare deals in the same city. Get information for trips to cities like Cape Town or Nairobi and you can find the right hotel on travelmax quickly and easily. Lagos City and its surrounding area are great for trips that are a week or longer with numerous hotels available
                                </Paper>
                         </Grid> 
                  </Grid> 
                  <Grid />
                  <br /> <br /> <br />
                  <Grid className={grid.content} container spacing={24}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                 <Typography variant="h4" gutterBottom>
                                    Don't Know where to go? Let us inspire you!
                                 </Typography>
                                  <br /> <br />
                                 <Typography variant="h5" gutterBottom>
                                    Top Cities
                                </Typography>
                                  <Carousel autoPlay>
                                    <div>
                                      <img alt="Slider(0)" src={Accra} />
                                      <p className="legend">Accra. Ghana</p>
                                    </div>
                                    <div>
                                      <img alt="Slider(1)" src={Paris} />
                                      <p className="legend">Paris</p>
                                    </div>
                                    <div>
                                      <img alt="Slider(2)" src={Abuja} />
                                      <p className="legend">Abuja, Nigeria</p>
                                    </div>
                                    <div>
                                      <img alt="Slider(3)" src={London} />
                                      <p className="legend">London</p>
                                    </div>
                                    <div>
                                      <img alt="Slider(4)" src={Nairobi} />
                                      <p className="legend">Nairobi, Kenya</p>
                                    </div>
                                    <div>
                                      <img alt="Slider(5)" src={Johannesburg} />
                                      <p className="legend">Johannesburg, South Africa</p>
                                    </div>
                                  </Carousel>
                            </Paper>
                        </Grid> 
                    </Grid> 
                    <br /> <br /> <br />
                     <Grid className={grid.content} container spacing={24}>
                        <Grid item xs={12}>
                        
                            <Paper className={classes.paper}>
                            <MaterialIcon icon="find_in_page" color='grey' size={60}/>
                                 <Typography variant="h4" gutterBottom>
                                    Find Cheap and Available Hotels on Travelmax
                                 </Typography>
                                                            With Travelmax you can easily find your ideal hotel and compare prices from different website. Simply enter where you want to go and your desired travel dates, and let our hotel search engine compare accommodation prices for you. To refine your search results, simply filter by price, distance (e.g. from the beach), star category, facilities and more. From budget hostels to luxury suites, travelmax makes it easy to book online. You can search from a large variety of rooms and locations across the Africa, like Durban and Johannesburg to popular cities and holiday destinations abroad!
                            </Paper>
                        </Grid> 
                      </Grid>
                        <Grid className={grid.content} container spacing={24}>
                         <Grid item xs={12}>
                           <Paper className={classes.paper}>
                           <Typography variant="h6" gutterBottom>
                                    Find hotels that suit your budget!
                                 </Typography>
                           
                            {/* Lagos hotels*/}
                            <div className={classes.root}>
                                <ClickAwayListener onClickAway={this.handleClickAway}>
                                  <div>
                                     <Button color="inherit" onClick={this.handleClick} style={{textDecoration: 'none', padding: '10px 10px 10px 0', color: '#000', borderBottom: '2px solid #ef5635', width: '200px', textAlign: 'center', marginBottom: 'auto' }}>Lagos Hotels<span style={{marginTop: 'auto'}}><MaterialIcon icon="keyboard_arrow_down" color='grey' size={35}/></span></Button>
                                       {open ? (
                                            <Row style={{color: 'black', alignItems: 'center'}}>
                                                <Col md="6">
                                                      <ul style={{textAlign: 'left', marginLeft: '100px'}} className={classes.Links}>
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
                                                      <ul style={{textAlign: 'left', marginLeft: '100px'}} className={classes.Links}>
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
                            
                             {/* Lagos hotels*/}
                            <AbujaHotels />
                            <JosHotels />
                            <KanoHotels />
                            <RiversHotels />
                            <AkwaIbomHotels />
                             </Paper>
                          </Grid>
                         </Grid> 
                       <Grid />
                    <br /> <br />
                    </div>
                </Aux>
            );
        }
    }

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (Content);

