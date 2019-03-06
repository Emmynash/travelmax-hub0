import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';

import image from '../../Assets/404/404.jpg';

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

class ErrorPageContainer extends React.Component{
    
    render(){
        const {classes} = this.props;
        return(
            <div style={{backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", overFlow: "hidden", padding: '50px', height: "630px"}}>
                <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                 <Typography variant="h4" style={{color: "#ef5635"}} gutterBottom>
                                   <Button  to="/" tag={Link} style={{color: "#ef5635"}} color="link"><h4>Go Back Home!</h4></Button>
                                 </Typography>
                            </Paper>
                        </Grid> 
                    </Grid> 
                    <Grid />
            </div>
        );
    }
}
ErrorPageContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default (withStyles(styles)) (ErrorPageContainer);


