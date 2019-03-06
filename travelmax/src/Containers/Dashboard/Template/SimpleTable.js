import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const data = [
  createData('Bronze',   36000.00, "within Nigeria", <Button  tag={Link} to="/package/subscribe/bronze" color="link">Buy</Button>),
  createData('Silver', 7600.00, "within Africa", <Button tag={Link} to="/package/subscribe/silver" color="link">Buy</Button>),
  createData('Gold', 116000.00, "within Emirates & Asia", <Button tag={Link} to="/package/subscribe/gold" color="link">Buy</Button>),
  createData('Platinium', 151000.00, "+ UK, USA", <Button tag={Link} to="/package/subscribe/platinium" color="link">Buy</Button> ),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Plan</TableCell>
            <TableCell align="right">Price₦</TableCell>
            <TableCell align="right">Travel</TableCell>
            <TableCell style={{marginLeft: "-30px"}} align="right">Subscribe</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => (
            <TableRow key={n.id}>
              <TableCell component="th" scope="row">
                {n.name}
              </TableCell>
              <TableCell align="right">{n.calories}</TableCell>
              <TableCell align="right">{n.fat}</TableCell>
              <TableCell align="right">{n.carbs}</TableCell>
              <TableCell align="right">{n.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);