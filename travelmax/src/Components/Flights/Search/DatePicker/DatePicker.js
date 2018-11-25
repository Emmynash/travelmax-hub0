import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";


const styles = theme => ({
  root: {
    width: '100%',
    color: 'grey',
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
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

class Datepicker extends Component{
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
          );
    }
    
}
Datepicker.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles) (Datepicker);

