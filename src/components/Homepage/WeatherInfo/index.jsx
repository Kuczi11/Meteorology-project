import React from 'react';
import {
  TableBody, Table, TableRow, TableCell, TableContainer,
  Paper, TableHead,
} from '@mui/material';
import useStyles from './styles';

const weatherData = (capital, temperature, windSpeed, rainfall) => ({
  capital, temperature, windSpeed, rainfall,
});

const cities = [
  weatherData('Warsaw', 10, 0, 0),
  weatherData('Berlin', 10, 0, 0),
  weatherData('Moscow', 10, 0, 0),
  weatherData('Oslo', 10, 0, 0),
];

const WeatherInfo = () => {
  const classes = useStyles();
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
            {cities.map((city) => (
              <TableRow
                key={city.capital}
              >
                <TableCell className={classes.tableDataCell}>{city.capital}</TableCell>
                <TableCell className={classes.tableDataCell} align="right">{city.temperature}</TableCell>
                <TableCell className={classes.tableDataCell} align="right">{city.windSpeed}</TableCell>
                <TableCell className={classes.tableDataCell} align="right">{city.rainfall}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default WeatherInfo;
