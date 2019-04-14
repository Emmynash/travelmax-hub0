import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { compose } from 'recompose';
import Calendar from 'react-calendar';
import MaterialIcon from 'material-icons-react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import StarIcon from '@material-ui/icons/StarBorder';
import Button from '@material-ui/core/Button';

import {Col, Row, TabContent, TabPane, Table, } from 'reactstrap';
import { HashLink as Link } from 'react-router-hash-link';

import { mainListItems, secondaryListItems } from './listItems';
import SimpleLineChart from './SimpleLineChart';
import Album from './Album';
import { withAuthorization, AuthUserContext } from '../../../Components/Sessions';
import { withFirebase } from '../../../Components/Firebase';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
   paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
   cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing.unit * 2,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
});

class Dashboard extends React.Component {
  state = {
    open: true,
    date: new Date(),
     activeTab: '1',
     packId: "",
     user: ""
  };
  
  
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  
   onChange = date => this.setState({ date })
   
   componentDidMount(){
     const authUser = this.context;
     this.props.firebase
        .userPackage(authUser.uid)
        .on('value', snapshot => {
          const usersObject = snapshot.val();
          this.setState({
            packId: usersObject
          });
      });
      
       this.props.firebase
        .user(authUser.uid)
        .on('value', snapshot => {
          const usersObject = snapshot.val();
          this.setState({
            user: usersObject
          });
      });
      // console.log(this.state.packId);
   }
   
   componentWillUnmount(){
      const authUser = this.context;
      this.props.firebase
        .userPackage(authUser.uid)
        .off();
   }

  render() {
    const { classes } = this.props;
    const {packId, user} = this.state;
    
    
    let userPackage = (
      <React.Fragment>
                      <CssBaseline />
                      <main className={classes.layout} style={{marginTop: "40px", marginBottom: "40px"}}>
                        {/* Hero unit */}
                        <div id="packages" className={classes.heroContent}>
                          <Typography component="h4" variant="h5" align="center" color="textPrimary" gutterBottom>
                           <b> Currently Purchased <span style={{color: '#ef5635'}}>Package(s)</span></b>
                          </Typography>
                        </div>
                        {/* End hero unit */}
                        {/*New Price Grid*/}
                        <Grid container spacing={40} alignItems="flex-end">
                            <Grid item xs={12} sm={6} md={3}>
                              <Card>
                                <CardHeader
                                  title="Bronze"
                                  subheader="Starting Pack"
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
                                       <b>₦36, 000.00</b>
                                    </Typography>
                                    <Typography variant="h6" color="textSecondary">
                                    </Typography>
                                  </div>
                                </CardContent>
                                <CardActions className={classes.cardActions}>
                                </CardActions>
                              </Card>
                            </Grid>
                            
                            
                            {packId == null || packId.silverPackId  ?
                            <Grid item xs={12} sm={6} md={3} style={{display:""}}>
                              <Card>
                                <CardHeader
                                  title="Silver"
                                  subheader="Regular Pack"
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
                                       <b>₦76, 000.00</b>
                                    </Typography>
                                    <Typography variant="h6" color="textSecondary">
                                      
                                    </Typography>
                                  </div>
                                </CardContent>
                                <CardActions className={classes.cardActions}>
                                </CardActions>
                              </Card>
                            </Grid>
                            : ""
                            }
                            
                            {packId == null || packId.goldPackId ?
                             <Grid item xs={12} sm={6} md={3} style={{display:""}}>
                              <Card>
                                <CardHeader
                                  title="Gold"
                                  subheader="Mega Pack"
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
                                       <b>₦116, 000.00</b>
                                    </Typography>
                                    <Typography variant="h6" color="textSecondary">
                                      
                                    </Typography>
                                  </div>
                                </CardContent>
                                <CardActions className={classes.cardActions}>
                                </CardActions>
                              </Card>
                            </Grid>
                            : ""}
                            
                            {packId == null || packId.platiniumPackId ?
                            <Grid item xs={12} sm={6} md={3} style={{display:""}}>
                              <Card>
                                <CardHeader
                                  title="Platinium"
                                  subheader="Ultimate Pack"
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
                                      <b> ₦151, 000.00 </b>
                                    </Typography>
                                    <Typography variant="h6" color="textSecondary">
                                      
                                    </Typography>
                                  </div>
                                </CardContent>
                                <CardActions className={classes.cardActions}>
                                </CardActions>
                              </Card>
                            </Grid>
                            : ""
                            }
                      </Grid>
                    </main>
                   </React.Fragment>
      );
    
    if(packId == null  || packId.packageId !== process.env.REACT_APP_API_KEY_PACKAGE_BRONZE_ID){
      userPackage = (
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <h4><span style={{color: '#ef5635'}}><b>Oops!</b></span> Your Package lock is empty </h4>
                  <p><b> Please, purchase a package with as low as ₦36,000 to enjoy exciting benefits</b></p>
                   <Grid item>
                     <div className={classes.heroButtons}>
                        <Button tag={Link} to='#packages/' href='/' variant="outlined" color="primary">
                         Buy Package
                        </Button>
                      </div>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
        );
    }
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          style={{marginTop: "60px"}}
          position="absolute"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(
                classes.menuButton,
                this.state.open && classes.menuButtonHidden,
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Dashboard
            </Typography>
             {/*<AuthUserContext.Consumer>
                {authUser => (
                  <div>
                    Welcome; {authUser.email}
                  </div>
                )}
             </AuthUserContext.Consumer>*/}
            Welcome, <span style={{color: '#ef5635', marginLeft: "5px"}}>{user.lastname}</span>
           {/* <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
               <NotificationsIcon />
              </Badge>
            </IconButton>*/}
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
           <Grid container spacing={24}>
            <Grid item xs={12}>
            <AuthUserContext.Consumer>
                {authUser => (
                  <div>
                    <Paper className={classes.paper}>
                      <p> Referrals Tree </p> 
                      <span style={{color: '#ef5635'}}>ID</span> : <b>TR${authUser.uid.slice(24)}</b>
                    </Paper>
                  </div>
                )}
            </AuthUserContext.Consumer>
            </Grid>
           </Grid>
           
            {userPackage}
           
          <Typography variant="h6" gutterBottom component="h2">
            Activities
          </Typography>
          <Typography component="div" className={classes.chartContainer}>
            <SimpleLineChart />
          </Typography>
          <div style={{marginTop: "30px"}} className={classes.tableContainer}>
           <Grid  style={{padding: "20px"}} container spacing={24}>
             <Grid item xs={12}>
              <Typography style={{marginBottom: '10px'}} variant="h6" gutterBottom align="center" color="textPrimary" component="h2">
                Calendar
              </Typography>
             <div className={classes.tableContainer}>
                <TabContent activeTab={this.state.activeTab} style={{alignItems: 'center'}}>
                    <TabPane tabId="1">
                        <Row>
                         <Table borderless>
                          <Row>
                            <Col xs="9" sm="9"><Calendar
                                                onChange={this.onChange}
                                                value={this.state.date}
                                                />
                            </Col>
                            <Col xs="3" sm="3">
                              <span style={{alignItems: "center", marginBottom: "10px"}}>Check your Calendar, You maybe Travelling Soon!</span><Button tag={Link} to="/flights_search" href='/flights_search' variant="outlined" color="primary">Search & Book</Button>
                            </Col>
                          </Row>
                        </Table>
                      </Row>
                     </TabPane>
                   </TabContent>
              </div>
             </Grid>
            </Grid>
          </div>
          <Grid  style={{padding: "20px"}} container spacing={24}>
            <Grid item xs={12}>
              <div className={classes.tableContainer}>
                <Album />
              </div>
           </Grid>
         </Grid>
        </main>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

Dashboard.contextType  = AuthUserContext;

const condition = authUser => !!authUser;
export default compose(withStyles(styles), withAuthorization(condition))(withFirebase(Dashboard));

