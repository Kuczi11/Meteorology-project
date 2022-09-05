/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import initialWarsawWeather from './defaultState';
import { fetchWarsawWeather, setWarsawWeatherError, setWarsawWeatherSuccess } from './actions';

const warsawWeatherReducer = createReducer(initialWarsawWeather, (builder) => {
  builder
    .addCase(fetchWarsawWeather, () => {})
    .addCase(setWarsawWeatherSuccess, (state, action) => {
      state.warsawWeather = action.payload;
    })
    .addCase(setWarsawWeatherError, (state, action) => {
      state.errorMessage = action.payload;
    });
});

export default warsawWeatherReducer;
