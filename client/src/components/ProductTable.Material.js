import React, { useEffect, useState } from 'react';

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  headerCell: {
    color: 'blue',
    fontWeight: 'bold',
  },
});

const SimpleTable = () => {
  const [rows, setRows] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const getProducts = async () => {
      // fetch uses the "proxy" value set in client/package.json
      let response = await fetch('/product');
      let data = await response.json();
      setRows(data);
    };
    getProducts();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell className={classes.headerCell}>Name</TableCell>
            <TableCell className={classes.headerCell}>Category</TableCell>
            <TableCell className={classes.headerCell}>CO2_Consumption</TableCell>
            <TableCell className={classes.headerCell}>Product_Life</TableCell>
            <TableCell className={classes.headerCell}>Water_Consumption</TableCell>
            <TableCell className={classes.headerCell}>Comments</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.co2_consumption}</TableCell>
              <TableCell>{row.product_life}</TableCell>
              <TableCell>{row.water_consumption}</TableCell>
              <TableCell>{row.comments}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SimpleTable;
