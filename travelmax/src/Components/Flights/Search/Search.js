import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import image from '../../../Assets/Images/home1.jpg';
import content from './search.css';
import RegisterModal from '../../UI/Modal/Register/Register';
import { AuthUserContext } from '../../Sessions';
import { NavLink } from 'react-router-dom';

import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { fade } from '@material-ui/core/styles/colorManipulator';

// import Datepicker from './DatePicker/DatePicker';
// import DatePicker from "react-datepicker";
// import InputBase from '@material-ui/core/InputBase';



const styles = theme => ({
  root: {
    width: '100%',
    color: 'grey',
    backgroundSize: 'cover',
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat'
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
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
    
    alignItems: 'center',
  },
 
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 3,
    transition: theme.transitions.create('width'),
    width: '60%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});


class Search extends Component{
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      isOpen: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggleCalendar = this.toggleCalendar.bind(this);
  }

handleChange (date) {
  this.setState({startDate: date});
  this.toggleCalendar();
}

toggleCalendar (e) {
  e && e.preventDefault();
  this.setState({isOpen: !this.state.isOpen});
}


  render(){
    const{classes} = this.props;
    return(
         
    <div className={classes.root}>
     <div position="relative" style={{ backgroundSize: 'cover', overflow: 'hidden', backgroundRepeat: 'no-repeat', backgroundImage: `url(require("../../../Assets/Images/home4.jpg"))`, height: '550px', width: '100%', flexFlow: 'column', position: 'relative',  display: 'flex', alignItems : 'center', justifyContent: 'space-between', padding: '180px 20px', marginTop:'30'}}>
     <h2 style={{color: '#443b3b', marginTop: '20px'}}>Search, Compare and Book Cheap Flights</h2>
     <h4 style={{alignItems: 'center', textAlign: 'center', color: '#443b3b'}}>Subscribe to one of our packages today, experience the blue wings <span style={{color: '#8fd935'}}><strong>and tell the difference</strong></span></h4>
      <AppBar position="relative" style={{backgroundColor: 'transparent',  position: 'relative',  display: 'flex', alignItems : 'center', justifyContent: 'space-between', padding: '10px', zIndex:500}}>
        <Toolbar className={content.content}>
          {/*<div className={classes.search}>
            <InputBase
              placeholder="From"
              style={{height: '38px'}}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
          <div className={classes.search} style={{marginLeft: '1px'}}>
            <InputBase
              placeholder="To"
              style={{height: '38px'}}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
          <div className={classes.search} style={{marginLeft: '1px', textAlign: 'left'}}>
            <Button
            classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              placeholder="Check-in"
              style={{height: '38px', width: '120px',  textAlign: 'left'}}
              className="example-custom-input"
              onClick={this.toggleCalendar}>
              {this.state.startDate.format("DD-MM-YYYY")}
            </Button>
            {
              this.state.isOpen && (
                  <DatePicker
                      selected={this.state.startDate}
                      onChange={this.handleChange}
                      withPortal
                      inline />
                  )
              }
           
          </div>
          <Datepicker />
          <div className={classes.search} style={{marginLeft: '1px'}}>
            <InputBase
              placeholder="Travellers"
              style={{height: '38px'}}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
          
          
          <Button variant="outlined" href="#" >Search</Button>title="flights_Search"*/}
     
        {/*<iframe id='travelstartIframe-fef87017-a0b0-4fa6-a0b1-392f1bf73b38' 
          frameBorder='0' 
          scrolling='no' 
          style={{margin: '0px', padding: '0px', border: '0px', height: '0px', backgroundColor: '#fafafa'}}>
        </iframe> */}
        
        <Button variant="contained" 
        href="#"
        style={{color: '#ef5635'}}
        >
         <AuthUserContext.Consumer>
            {authUser =>
              authUser ? <NavLink  style={{color: '#ef5635', width: "60px", textDecoration: 'none'}} to='/search'>Search</NavLink> :  <RegisterModal />
            }
         </AuthUserContext.Consumer>
        </Button>
        
        </Toolbar>
      </AppBar>
    </div>
  </div>
       
        );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles) (Search);

