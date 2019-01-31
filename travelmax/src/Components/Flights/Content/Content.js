import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MaterialIcon from 'material-icons-react';
import grid from './Content.css';
import ImageGallery from '../ImageSlide/ImageSlide';
import RegisterModal from '../../UI/Modal/Register/Register';
import { AuthUserContext } from '../../Sessions';
import { Button } from 'reactstrap';
import Aux from '../../../HOC/Aux/Aux';

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 400
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
   button: {
    margin: theme.spacing.unit,
    color: '#ef5635',
  },
  
});


class Content extends Component{
    
   loginHandler = () => {
        return <RegisterModal />;
   } 
   render(){
    const {classes} = this.props;
   
        return(
            <Aux>
            <div className={classes.root}>
                  <Grid className={grid.content} container spacing={24}>
                        <Grid item xs={12}>
                        
                            <Paper className={classes.paper}>
                            <MaterialIcon icon="flight_takeoff" color='#ef5635' size={60}/>
                                 <Typography variant="h4" gutterBottom>
                                    Travelling made easy with Travelemaxhub
                                 </Typography>
                                                           Dreamed of taking a trip? Travelemaxhub is the key. Register with a start fee of N35,000 and enjoy a trip to any region within Nigeria. Guess what? Referred others to rgister via your unique code and enjoy some Amazing Bonuses, Just like that! <br /> <strong> Read More </strong>
                            </Paper>
                        </Grid> 
                    </Grid> 
                    <Grid />
                    <Typography style={{marginTop: '80px', marginBottom: "20px", textAlign: 'center', alignItems: 'center', width: '100%'}} variant="h5"  className={grid.content} gutterBottom>
                                     Travelemaxhub Packages
                    </Typography>
                    <Grid container spacing={24} className={grid.content}>
                        <Grid item xs={3}>
                         
                          <Paper className={classes.paper}>
                          <MaterialIcon icon="calendar_view_day" color='#CD7F32' size={60}/>
                          <Typography variant="h6" gutterBottom>
                              BRONZE PACKAGE <br />
                              ₦35, 000.00 ($150.00)
                         </Typography>
                             A startup purchase of the BONZE PACKAGE with just a fee of ₦35,000 or $ 150 and recruiting 
                             3 more travel accounts will earn you enough points to travel for your local vacations (your choice destination) within Nigeria.<br />
                          <span style={{color:"#ef5635"}} className={classes.button}>
                            <AuthUserContext.Consumer>
                                  {authUser =>
                                    authUser ? <Button outline color="secondary">Subscribe</Button> :  <RegisterModal />
                                  }
                            </AuthUserContext.Consumer>
                          </span>
                          </Paper>
                        </Grid>
                        <Grid item xs={3}>
                          <Paper className={classes.paper}>
                            <MaterialIcon icon="dns" color='#C0C0C0' size={60}/>
                              <Typography variant="h6" gutterBottom>
                                 SILVER PACKAGE <br />
                                 ₦75, 000.00 ($250.00)
                             </Typography>
                                 A startup purchase of the SILVER PACKAGE with just a fee of ₦75,000 or $250 and recruiting 
                                 3 more travel accounts will earn you enough points to travel to the destination of your choice in any country within the African continent. <br />
                             <span style={{color:"#ef5635"}} className={classes.button}>
                               <AuthUserContext.Consumer>
                                  {authUser =>
                                    authUser ? <Button outline color="secondary">Subscribe</Button> :  <RegisterModal />
                                  }
                               </AuthUserContext.Consumer>
                            </span>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                          <Paper className={classes.paper}>
                          <MaterialIcon icon="dashboard" color='#FFD700' size={60}/>
                              <Typography variant="h6" gutterBottom>
                                 GOLD PACKAGE <br />
                                 ₦115, 000.00 ($350.00)
                             </Typography>
                                  A startup purchase of the GOLD PACKAGE with a fee of just ₦115,000.00 or $ 350.00 and recruiting 
                                  3 more travel accounts will earn you enough points to travel to the destination of your choice within Emirates and Asia <br />
                            <span style={{color:"#ef5635"}} className={classes.button}>
                                <AuthUserContext.Consumer>
                                  {authUser =>
                                    authUser ? <Button outline color="secondary">Subscribe</Button> :  <RegisterModal />
                                  }
                               </AuthUserContext.Consumer>
                            </span>
                            </Paper>
                        </Grid>
                         <Grid item xs={3}>
                          <Paper className={classes.paper}>
                          <MaterialIcon icon="polymer" color='#E5E4E2' size={60}/>
                              <Typography variant="h6" gutterBottom>
                                 PLATINIUM PACKAGE <br />
                                 ₦150, 000.00 ($450.00)
                             </Typography>
                                 Purchase the PLATINIUM PACKAGE with just a fee of  ₦150, 000.00 or $450.00, recruit 
                                 3 more travel accounts to earn enough points to travel to your choice destination within Emirates, Asia, USA, UK etc  <br />
                            <span style={{color:"#ef5635"}} className={classes.button}>
                                <AuthUserContext.Consumer>
                                  {authUser =>
                                    authUser ? <Button outline color="secondary">Subscribe</Button> :  <RegisterModal />
                                  }
                               </AuthUserContext.Consumer>
                            </span>
                            </Paper>
                        </Grid>
                    </Grid>
                     <Grid className={grid.content} container spacing={24}>
                        <Grid item xs={12} style={{marginTop: '50px'}}>
                        
                            <Paper className={classes.paper}>
                            <MaterialIcon icon="loyalty" color='#ef5635' size={60}/>
                                 <Typography variant="h4" gutterBottom>
                                    Travelemaxhub: Cheap flights, and incredible hotels
                                 </Typography>
                                                           Travelemaxhub is one of Africa’s leading online travel agency. Based in the beautiful city of Jos, Nigeria. Hundreds of Travelemaxhubes are dedicated to rocking your travel world. We want our customers to spend less time planning their travels and more time on holiday. Our mission is to save you time, money and stress with our simple online booking platform. You can search, compare and book your travel all in one place.
                            </Paper>
                        </Grid> 
                    </Grid> 
                    <Grid />
                    <Typography style={{marginTop: '80px', marginBottom: "20px", textAlign: 'center', alignItems: 'center', width: '100%'}} variant="h5"  className={grid.content} gutterBottom>
                                     Why travellers use Travelemaxhub
                    </Typography>
                    <Grid container spacing={24} className={grid.content}>
                        <Grid item xs>
                         
                          <Paper className={classes.paper}>
                          <MaterialIcon icon="assignment_turned_in" color='#ef5635' size={60}/>
                          <Typography variant="h6" gutterBottom>
                             Secure Payment
                         </Typography>
                                                          
                            Convenient & reliable booking and payment systems. Pay with ease from anywhere around the world!
                          </Paper>
                        </Grid>
                        <Grid item xs>
                          <Paper className={classes.paper}>
                            <MaterialIcon icon="people_outline" color='#ef5635' size={60}/>
                              <Typography variant="h6" gutterBottom>
                                 Change and Cancel
                             </Typography>
                                Travelers can change or cancel their reservations. Save the stress of calling the hotel or airline and waiting for customer service  to help you through the process. Easily do it yourself wherever you have Internet access.
                            </Paper>
                        </Grid>
                        <Grid item xs>
                          <Paper className={classes.paper}>
                          <MaterialIcon icon="calendar_view_day" color='#ef5635' size={60}/>
                              <Typography variant="h6" gutterBottom>
                                 Easy Booking
                             </Typography>
                                
                                 At Travelemaxhub all the best travel suppliers and specials can be found, compared and booked quickly and safely. You can mix and match departing and return cheap flights on different airlines and book flexi-tickets. + check customer review and make the best decision
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid className={grid.content} container spacing={24}>
                        <Grid item xs={12}>
                        
                            <Paper className={classes.paper}>
                           
                                 <Typography variant="h5" gutterBottom>
                                     Most Popular Destinations
                                 </Typography>
                                     <ImageGallery />
                                 </Paper>
                        </Grid> 
                    </Grid> 
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

