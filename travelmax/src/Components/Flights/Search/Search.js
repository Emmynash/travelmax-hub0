import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import image from '../../../Assets/Images/home1.jpg';
import content from './search.css';

import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

import Datepicker from './DatePicker/DatePicker';


const styles = theme => ({
  root: {
    width: '100%',
    color: 'grey',
    // backgroundColor: 'grey',
    backgroundImage: `url(${image})`,
   
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
      isOpen: false
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
     <h3>Search and Book Cheap Flights</h3>
      <AppBar position="relative" style={{backgroundColor: 'white',  position: 'relative',  display: 'flex', alignItems : 'center', justifyContent: 'space-between', padding: '10px', zIndex:500}}>
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
      <iframe scrolling="yes" title="flights_Search" width="849" height="217" frameborder="0" src="//www.travelpayouts.com/widgets/0634d95710ca734cd07698c44bbb9df6.html?v=1553"></iframe>
        {/*<iframe id='travelstartIframe-fef87017-a0b0-4fa6-a0b1-392f1bf73b38' 
          frameBorder='0' 
          scrolling='no' 
          style={{margin: '0px', padding: '0px', border: '0px', height: '0px', backgroundColor: '#fafafa'}}>
        </iframe> */}
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

