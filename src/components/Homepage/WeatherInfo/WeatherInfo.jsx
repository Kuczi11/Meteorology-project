/* eslint-disable max-len */
import React, { useEffect } from 'react';
import {
  TableBody, Table, TableRow, TableCell, TableContainer,
  Paper, TableHead, PropTypes,
} from '@mui/material';
import useStyles from './styles';

const WeatherInfo = ({ fetchWarsawWeather }) => {
  const classes = useStyles();

  useEffect(() => {
    fetchWarsawWeather();
    console.log(fetchWarsawWeather);
  });
  return (
    <div className={classes.tableContentContainer}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeaderCell}>City</TableCell>
              <TableCell className={classes.tableHeaderCell}>Temperature (&#8451;)</TableCell>
              <TableCell className={classes.tableHeaderCell}>
                Wind speed (m/s) and direction
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>Rainfall (mm)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className={classes.tableDataCell}>Warsaw</TableCell>
              <TableCell className={classes.tableDataCell} align="right">0</TableCell>
              <TableCell className={classes.tableDataCell} align="right">0</TableCell>
              <TableCell className={classes.tableDataCell} align="right">0</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

WeatherInfo.propTypes = {
  fetchWarsawWeather: PropTypes.func.isRequired,
};

export default WeatherInfo;
