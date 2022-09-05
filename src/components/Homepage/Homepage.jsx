import React from 'react';
import { Pagination, Stack } from '@mui/material';
import WeatherInfo from './WeatherInfo/WeatherInfo';
import useStyles from './styles';
import CurrentDate from './CurrentDate/CurrentDate';

const Homepage = () => {
  const classes = useStyles();
  return (
    <div className={classes.homepageContainer}>
      <CurrentDate />
      <WeatherInfo />
      <Stack spacing={2}>
        <Pagination count={4} />
      </Stack>
    </div>
  );
};

export default Homepage;
