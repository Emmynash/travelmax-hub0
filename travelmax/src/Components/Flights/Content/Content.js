import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MaterialIcon from 'material-icons-react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import StarIcon from '@material-ui/icons/StarBorder';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';
import grid from './Content.css';
import ImageGallery from '../ImageSlide/ImageSlide';
import RegisterModal from '../../UI/Modal/Register/Register';
import { AuthUserContext } from '../../Sessions';
// import { Button } from 'reactstrap';
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
  
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  toolbarTitle: {
    flex: 1,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing.unit * 2,
  },
  cardActions: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing.unit * 2,
    },
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
            <div className={classes.root} style={{width: '98%'}}>
                  <Grid className={grid.content} style={{padding:"20px"}} container spacing={24}>
                        <Grid item xs={12}>
                        
                            <Paper className={classes.paper}>
                            <MaterialIcon icon="flight_takeoff" color='#ef5635' size={60}/>
                                 <Typography variant="h4" gutterBottom>
                                    Travelling made easy with Travelemaxhub
                                 </Typography>
                                                           Dreamed of taking a trip? Travelemaxhub is the key. Register with a start fee of N36,000 and enjoy a trip to any region within Nigeria. Guess what? Referred others to rgister via your unique code and enjoy some Amazing Bonuses, Just like that! <br /> <strong> Read More </strong>
                            </Paper>
                        </Grid> 
                    </Grid> 
                    <Grid />
                  
                   <React.Fragment>
                      <CssBaseline />
                      <main className={classes.layout}>
                        {/* Hero unit */}
                        <div className={classes.heroContent} id="packages">
                          <Typography component="h4" variant="h5" align="center" color="textPrimary" gutterBottom>
                            Packages
                          </Typography>
                        </div>
                        {/* End hero unit */}
                        {/*New Price Grid*/}
                        <Grid container spacing={40} alignItems="flex-end">
                            <Grid item xs={12} sm={6} md={3}>
                              <Card>
                                <CardHeader
                                  title="Bronze"
                                  subheader="Easily Purchase"
                                  titleTypographyProps={{ align: 'center' }}
                                  subheaderTypographyProps={{ align: 'center' }}
                                  action={null}
                                  className={classes.cardHeader}
                                />
                                <CardContent>
                                <div className={classes.cardPricing}>
                                    <MaterialIcon icon="calendar_view_day" color='#CD7F32' size={60}/>
                                 </div>
                                  <div className={classes.cardPricing}>
                                    <Typography component="h6" variant="h6" color="textPrimary">
                                       ₦36, 000.00
                                    </Typography>
                                    <Typography variant="h6" color="textSecondary">
                                      
                                    </Typography>
                                  </div>
                                    <Typography variant="subtitle1" align="center">
                                       Recruit 3 more travel accounts, 
                                       earn points to travel for local vacations
                                       within Nigeria
                                    </Typography>
                                </CardContent>
                                <CardActions className={classes.cardActions}>
                                 <AuthUserContext.Consumer>
                                  {authUser =>
                                    authUser ? <Button fullWidth variant="outlined" tag={Link} color="primary" href='/package/subscribe/bronze'>Buy Now</Button> : <Button fullWidth variant="outlined" tag={Link} color="primary" href='/register'>Get Started</Button>
                                   }
                                 </AuthUserContext.Consumer>
                                </CardActions>
                              </Card>
                            </Grid>
                            
                            
                            <Grid item xs={12} sm={6} md={3}>
                              <Card>
                                <CardHeader
                                  title="Silver"
                                  subheader="Most Popular"
                                  titleTypographyProps={{ align: 'center' }}
                                  subheaderTypographyProps={{ align: 'center' }}
                                  action={<StarIcon />}
                                  className={classes.cardHeader}
                                />
                                <CardContent>
                                <div className={classes.cardPricing}>
                                  <MaterialIcon icon="dns" color='#C0C0C0' size={60}/>
                                 </div>
                                 <div className={classes.cardPricing}>
                                    <Typography component="h6" variant="h6" color="textPrimary">
                                       ₦76, 000.00
                                    </Typography>
                                    <Typography variant="h6" color="textSecondary">
                                      
                                    </Typography>
                                  </div>
                                    <Typography variant="subtitle1" align="center">
                                       Recruit 3 more travel accounts, 
                                       earn points to travel any destination
                                       within African continent
                                    </Typography>
                                </CardContent>
                                <CardActions className={classes.cardActions}>
                                  <AuthUserContext.Consumer>
                                    {authUser =>
                                     authUser ? <Button fullWidth variant="contained" color="primary" tag={Link} href="/package/subscribe/silver">Buy Now</Button> : <Button fullWidth variant="outlined" tag={Link} color="primary" href='/register'>Get Started</Button>
                                    }
                                   </AuthUserContext.Consumer>
                                </CardActions>
                              </Card>
                            </Grid>
                            
                            
                             <Grid item xs={12} sm={6} md={3}>
                              <Card>
                                <CardHeader
                                  title="Gold"
                                  subheader="Easily Purchase"
                                  titleTypographyProps={{ align: 'center' }}
                                  subheaderTypographyProps={{ align: 'center' }}
                                  action={null}
                                  className={classes.cardHeader}
                                />
                                <CardContent>
                                <div className={classes.cardPricing}>
                                   <MaterialIcon icon="dashboard" color='#FFD700' size={60}/>
                                 </div>
                                 <div className={classes.cardPricing}>
                                    <Typography component="h6" variant="h6" color="textPrimary">
                                       ₦116, 000.00
                                    </Typography>
                                    <Typography variant="h6" color="textSecondary">
                                      
                                    </Typography>
                                  </div>
                                    <Typography variant="subtitle1" align="center">
                                       Recruit 3 more travel accounts,
                                       earn points to travel to any destination 
                                       Emirates and Asia
                                    </Typography>
                                </CardContent>
                                <CardActions className={classes.cardActions}>
                                  <AuthUserContext.Consumer>
                                    {authUser =>
                                      authUser ? <Button fullWidth variant="outlined" color="primary" tag={Link} href="/package/subscribe/gold">Buy Now</Button> :  <Button fullWidth variant="outlined" tag={Link} color="primary" href='/register'>Get Started</Button>
                                    }
                                  </AuthUserContext.Consumer>
                                </CardActions>
                              </Card>
                            </Grid>
                            
                            <Grid item xs={12} sm={6} md={3}>
                              <Card>
                                <CardHeader
                                  title="Platinium"
                                  subheader="Easily Purchase"
                                  titleTypographyProps={{ align: 'center' }}
                                  subheaderTypographyProps={{ align: 'center' }}
                                  action={null}
                                  className={classes.cardHeader}
                                />
                                <CardContent>
                                <div className={classes.cardPricing}>
                                  <MaterialIcon icon="polymer" color='#E5E4E2' size={60}/>
                                 </div>
                                 <div className={classes.cardPricing}>
                                    <Typography component="h6" variant="h6" color="textPrimary">
                                       ₦151, 000.00
                                    </Typography>
                                    <Typography variant="h6" color="textSecondary">
                                      
                                    </Typography>
                                  </div>
                                    <Typography variant="subtitle1" align="center">
                                      Recruit 3 more travel accounts, 
                                      earn points to travel 
                                      within  Emirates, Asia, USA, UK etc
                                    </Typography>
                                </CardContent>
                                <CardActions className={classes.cardActions}>
                                  <AuthUserContext.Consumer>
                                    {authUser =>
                                     authUser ? <Button fullWidth variant="outlined" color="primary" tag={Link} href="/package/subscribe/platinium">Buy Now</Button> :  <Button fullWidth variant="outlined" tag={Link} color="primary" href='/register'>Get Started</Button>
                                    }
                                  </AuthUserContext.Consumer>
                                </CardActions>
                              </Card>
                            </Grid>
                      </Grid>
                    </main>
                   </React.Fragment>
                   
                   <Grid className={grid.content} style={{padding: "20px"}} container spacing={24}>
                        <Grid item xs={12} style={{marginTop: '50px'}}>
                        
                            <Paper className={classes.paper}>
                            <MaterialIcon icon="loyalty" color='#ef5635' size={60}/>
                                 <Typography variant="h4" gutterBottom>
                                    Travelemaxhub: Cheap flights, and incredible hotels
                                 </Typography>
                                                           Travelemaxhub is one of Africa’s leading online travel agency, based in Nigeria. Hundreds of Travelemaxhubes are dedicated to rocking your travel world. We want our customers to spend less time planning their travels and more time on holiday. Our mission is to save you time, money and stress with our simple online booking platform. You can search, compare and book your travel all in one place.
                            </Paper>
                        </Grid> 
                    </Grid> 
                    <Grid />
                    <Typography style={{marginTop: '80px', marginBottom: "20px", textAlign: 'center', alignItems: 'center', width: '100%'}} variant="h5"  className={grid.content} gutterBottom>
                                     Why travellers use Travelemaxhub
                    </Typography>
                    <Grid container spacing={24} style={{padding: "30px", marginTop: "20px"}} className={grid.content}>
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
                           
                                 <Typography variant="h5" gutterBottom style={{marginBottom: "-80px"}}>
                                     Most Popular Destinations
                                 </Typography>
                                    <div style={{padding: "80px"}}>
                                     <ImageGallery />
                                    </div>
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

