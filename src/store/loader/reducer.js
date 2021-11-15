/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { initialState } from './defaultState';
import { weatherLoader } from './actions';

const loaderReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(weatherLoader, (state, action) => {
      state.weatherData = action.payload;
    });
});

export default loaderReducer;
