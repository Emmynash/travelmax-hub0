import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import grid from './DashboardContainer.css';

import image from '../../Assets/Images/dashboardHolder.jpg';

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

class DashboardContainer extends React.Component{
    
    render(){
        const {classes} = this.props;
        return(
            <div style={{marginTop: '25px', backgroundImage: `url(${image})`, padding: '50px', height: '600px', width: '100%'}}>
                <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                 <Typography variant="h4" style={{color: "#ef5635"}} gutterBottom>
                                    Coming to you soon!
                                 </Typography>
                            </Paper>
                        </Grid> 
                    </Grid> 
                    <Grid />
            </div>
        );
    }
}
DashboardContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (DashboardContainer);