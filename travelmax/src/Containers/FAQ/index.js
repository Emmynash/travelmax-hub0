import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    width: '100%',
    flexGrow: 1,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
   paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


function FrequentQuestions(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
    <Grid container style={{padding: "20px", marginTop: "10px"}} spacing={24}>
       <Grid item xs={12}>
             <AppBar position="static" style={{ marginBottom: "20px"}} color="default">
                <Toolbar>
                  <Typography variant="h6" color="inherit">
                        Frequently Asked Questions
                  </Typography>
                </Toolbar>
              </AppBar>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>Is it safe to make the payment online?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                      Yes. Absolutely! Nothing is more important to us than the privacy and integrity of your personal information. Our website is protected with Thawte SGC-enabled SSL Certificates and displays the Thawte Secured Seal on secure pages.
                      For more information, please check out Thawte's website
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>How do I pay for my booking or Packages?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    You can pay either by Internet Transfer or Quickteller while for Packages we received payment via debit card.
                    Your payment should be made immediately in order to have the quoted price guaranteed.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>I am having problems paying for my booking or packages, can you help?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                      If you have trouble making the payment, please double check that you have typed in your name, all digits (no spaces), expiry date and the 3 digits on the back of card correctly.
                      If all information is correctly stated, please contact your bank to make sure that the complications are not initiated on their side (for example because you might have a limit for large amounts).
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel disabled>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>Disabled Expansion Panel</Typography>
                </ExpansionPanelSummary>
              </ExpansionPanel>
           </Grid>
        </Grid>
    </div>
  );
}

FrequentQuestions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FrequentQuestions);
