import { createAction } from '@reduxjs/toolkit';

// eslint-disable-next-line import/prefer-default-export
export const weatherLoader = createAction('loader/weatherLoader', (weatherData) => ({
  payload: {
    weatherData,
  },
}));
