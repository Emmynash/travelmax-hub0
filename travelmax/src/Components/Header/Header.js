import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';


import logo from '../../Assets/Images/Logo/TravelMax_Logo_orange.png';
import SignOutButton from '../UI/Modal/Logout/Logout';
import ResetPassword from '../PasswordChange';
import { AuthUserContext } from '../Sessions';
import { NavLink } from 'react-router-dom';


const styles = theme => ({
  root: {
    width: '100%',
    color: 'black'
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class PrimarySearchAppBar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>
        <AuthUserContext.Consumer>
                    {authUser =>
                      authUser ? <SignOutButton /> :  <NavLink style={{color:"#d8caca"}} to='/login'>login</NavLink>
                    }
        </AuthUserContext.Consumer>
        </MenuItem>
        <MenuItem onClick={this.handleMenuClose}>
        <AuthUserContext.Consumer>
                    {authUser =>
                      authUser ? <ResetPassword /> : <NavLink style={{color:"#d8caca"}} to='/register'>Register</NavLink>
                    }
        </AuthUserContext.Consumer>
        </MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
              <NavLink style={{color:"#d8caca"}} to='/'>Flights</NavLink>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
              <NavLink style={{color:"#d8caca"}} to='/hotels'>Hotels</NavLink>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
          <AuthUserContext.Consumer>
              {authUser =>
                authUser ?<NavLink style={{color:"#d8caca"}} to='/dashboard'>Dashboard</NavLink> : null
              }
          </AuthUserContext.Consumer>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </MenuItem>
      </Menu>
    );

    return (
      <div style={{height: '60px', backgroundColor: '#363232',}} className={classes.root}>
        <AppBar  style={{backgroundColor: '#363232', height: '60px', zIndex:"900"}} position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
             <img src={logo} height='100'  width='100' alt="Travelemaxhub logo" name="Travelemaxhub logo" />
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <MenuItem onClick={this.handleMobileMenuClose}>
                <NavLink style={{color:"#d8caca"}} to='/'>Flights</NavLink>
              </MenuItem>
              <MenuItem onClick={this.handleMobileMenuClose}>
                <NavLink style={{color:"#d8caca"}} to='/hotels'>Hotels</NavLink>
              </MenuItem>
               <MenuItem onClick={this.handleMobileMenuClose}>
                <AuthUserContext.Consumer>
                    {authUser =>
                      authUser ?<NavLink style={{color:"#d8caca"}} to='/dashboard'>Dashboard</NavLink> : null
                    }
                </AuthUserContext.Consumer>
              </MenuItem>
              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrimarySearchAppBar);
