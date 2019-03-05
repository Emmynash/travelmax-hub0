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
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Component from '@reactions/component';
import Calendar from 'react-calendar';

import { Col, Row, Button, Form, FormGroup, Label, Input, TabContent, TabPane, Table, } from 'reactstrap';
import {Link} from 'react-router-dom';

import { mainListItems, secondaryListItems } from './listItems';
import SimpleLineChart from './SimpleLineChart';
import SimpleTable from './SimpleTable';
import { withAuthorization, AuthUserContext } from '../../../Components/Sessions';

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

  render() {
    const { classes } = this.props;

    return (
      <div style={{marginTop: "20px"}} className={classes.root}>
        <CssBaseline />
        <AppBar
          style={{marginTop: "85px"}}
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
             <AuthUserContext.Consumer>
                {authUser => (
                  <div>
                    Welcome; {authUser.email}
                  </div>
                )}
             </AuthUserContext.Consumer>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
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
              <Paper className={classes.paper}>Referrals Tree</Paper>
            </Grid>
           </Grid>
           <AuthUserContext.Consumer>
                {authUser => (
                  <div>
                    <span style={{color: '#ef5635'}}>ID</span> : <b>`TR${authUser.uid}`</b>
                  </div>
                )}
            </AuthUserContext.Consumer>
          <Typography variant="h6" gutterBottom component="h2">
            Activities
          </Typography>
          <Typography component="div" className={classes.chartContainer}>
            <SimpleLineChart />
          </Typography>
          <Typography variant="h6" gutterBottom component="h2">
            Packages
          </Typography>
          <div className={classes.tableContainer}>
            <SimpleTable />
          </div>
          <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6" gutterBottom component="h2">
                    Consume Package?
                    <Typography variant="h8" style={{color: "#ef5635"}}> Click and fill in the form</Typography>
                  </Typography> 
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    <AuthUserContext.Consumer>
                           {authUser => (
                                  <Component didMount={() => console.log(authUser)}>
                                    <Form>
                                        <Row form>
                                          <Col md={6}>
                                            <FormGroup>
                                              <Label for="email">Email</Label>
                                              <Input type="email" name="email" value={authUser.email} id="email" placeholder="User Email" />
                                            </FormGroup>
                                          </Col>
                                          <Col md={6}>
                                            <FormGroup>
                                              <Label for="userid">User Id</Label>
                                              <Input type="text" value={`TR${authUser.uid}`} name="userid" id="userid" placeholder="User Id " />
                                            </FormGroup>
                                          </Col>
                                        </Row>
                                        <FormGroup>
                                          <Label for="departCity">Departure City</Label>
                                          <Input type="text" name="departCity" id="departCity" placeholder="Current City"/>
                                        </FormGroup>
                                        <FormGroup>
                                          <Label for="prefDest">Preferred Destination</Label>
                                          <Input type="text" name="prefDest" id="prefDest" placeholder="Flying To......."/>
                                        </FormGroup>
                                        <FormGroup>
                                          <Label for="date">Date</Label>
                                          <Input type="text" name="date" id="date" placeholder="On this Day"/>
                                        </FormGroup>
                                        <Button>Submit</Button>
                                      </Form>
                                  </Component>
                            )}
                             
                     </AuthUserContext.Consumer>
                  </Typography>
                </ExpansionPanelDetails>
          </ExpansionPanel>
          
         <div style={{marginTop: "20px"}} className={classes.tableContainer}>
          <Typography variant="h6" gutterBottom component="h2">
            Calendar
          </Typography>
          <div className={classes.tableContainer}>
          <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                  <Row>
                   <Table borderless>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>
                                        <Calendar
                                          onChange={this.onChange}
                                          value={this.state.date}
                                          />
                                    </th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th> <span style={{alignItems: "center", marginBottom: "10px"}}>Check your Calendar, You maybe Travelling Soon!</span><Button tag={Link} color="link" to="/flights_search">Search & Book</Button>
                                    </th>
                                </tr>
                           </thead>
                        </Table>
                    </Row>
               </TabPane>
             </TabContent>
          </div>
         </div>
        </main>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

const condition = authUser => !!authUser;
export default compose(withStyles(styles), withAuthorization(condition))(Dashboard);
