import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import {Link} from 'react-router-dom';

import Hawaii from '../../../Assets/vacation/Hawaii.jpg';
import Moscow from '../../../Assets/vacation/Moscow.jpg';
import Buenos_Aires from '../../../Assets/vacation/Buenos_Aires.jpg';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});


function Album(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography component="h5" variant="h6" align="center" color="textPrimary" gutterBottom>
              Travelling for Vacation?
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button tag={Link} href='/flights_search' variant="contained" color="primary">
                   search flights
                  </Button>
                </Grid>
                <Grid item>
                  <Button tag={Link} href='/hotels_search' variant="outlined" color="primary">
                    Book hotel
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40} style={{marginTop: '-80px'}}>
          
              <Grid item sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                <img style={{marginTop: '-110px'}}  className={classes.cardMedia} alt="CardMedia(0)" src={Hawaii}  height='300px' />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="">
                      Hawaii (USA)
                    </Typography>
                    <Typography>
                       Go to the South Pacific, feel with the comforts of America. favourite place for golf lovers!
                    </Typography>
                  </CardContent>
                  <CardActions>
                  </CardActions>
                </Card>
              </Grid>
              
               <Grid item sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                <img style={{marginTop: '-110px'}}  className={classes.cardMedia} alt="CardMedia(0)" src={Moscow}  height='300px' />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="">
                      Moscow
                    </Typography>
                    <Typography>
                       If you Love the cold, choose <b>Moscow</b>. The city offers plenty to see. A must-visit is Lenin's Mausoleum. 
                    </Typography>
                  </CardContent>
                  <CardActions>
                  </CardActions>
                </Card>
              </Grid>
           
            <Grid item sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                <img style={{marginTop: '-110px'}}  className={classes.cardMedia} alt="CardMedia(0)" src={Buenos_Aires}  height='300px' />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="">
                      Buenos Aires
                    </Typography>
                    <Typography>
                      The staples of life in this budget friendly city are steak, wine, empanadas and ice cream.
                    </Typography>
                  </CardContent>
                  <CardActions>
                  </CardActions>
                </Card>
              </Grid>
          </Grid>
        </div>
      </main>
    </React.Fragment>
  );
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);