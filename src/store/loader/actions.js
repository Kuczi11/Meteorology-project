import { createAction } from '@reduxjs/toolkit';

export const weatherLoader = createAction('loader/weatherLoader', (weatherData) => ({
  payload: {
    weatherData,
  },
}));
