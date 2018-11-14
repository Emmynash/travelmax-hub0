import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import image from '../../../Assets/Images/home1.jpg';
import content from './search.css';


const styles = theme => ({
  root: {
    width: '100%',
    color: 'grey',
    // backgroundColor: 'grey',
    backgroundImage: `url(${image})`,
   
  },
  grow: {
    flexGrow: 4,
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

const backImage = {
 bk:{
   backgroundImage: `url(${image})`,
   height: '200px', 
   width: '100%',
   backgroundSize: 'cover',
   overflow: 'hidden',
   backgroundRepeat: 'no-repeat'
 }
};
const Search = (props) =>{
    const{classes} = props;
    return(
         
    <div className={classes.root}>
     <div className={backImage.bk}  position="relative" style={{ backgroundSize: 'cover', overflow: 'hidden', backgroundRepeat: 'no-repeat', backgroundImage: `url(require("../../../Assets/Images/home4.jpg"))`, height: '550px', width: '100%', flexFlow: 'column', position: 'relative',  display: 'flex', alignItems : 'center', justifyContent: 'space-between', padding: '180px 20px', marginTop:'30'}}>
     <h3>Search and Book Cheap Flights</h3>
      <AppBar position="relative" style={{backgroundColor: '#e56c52',  position: 'relative',  display: 'flex', alignItems : 'center', justifyContent: 'space-between', padding: '10px', zIndex:500}}>
        <Toolbar className={content.content}>
          <div className={classes.grow} />
          <div className={classes.search}>
            <InputBase
              placeholder="From"
              style={{height: '38px'}}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
          <div className={classes.grow} />
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
           <div className={classes.grow} />
          <div className={classes.search} style={{marginLeft: '1px', textAlign: 'left'}}>
            <InputBase
              placeholder="Depart"
              style={{height: '38px', width: '120px',  textAlign: 'left'}}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
           <div className={classes.grow} />
          <div className={classes.search} style={{marginLeft: '1px', textAlign: 'left'}}>
            <InputBase
              placeholder="Return"
              style={{height: '38px', width: '120px', textAlign: 'left', justifyContent: 'left'}}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
           <div className={classes.grow} />
          <div className={classes.search} style={{marginLeft: '1px'}}>
            <InputBase
              placeholder="class & Travellers"
              style={{height: '38px'}}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
          
          
          <Button variant="outlined" href="#" >Search</Button>
        </Toolbar>
      </AppBar>
    </div>
  </div>
       
        );
};

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles) (Search);

