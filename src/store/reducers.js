import { combineReducers } from '@reduxjs/toolkit';
import warsawWeatherReducer from './warsawWeather/reducer';

const rootReducer = combineReducers({
  warsawWeather: warsawWeatherReducer,
});

export default rootReducer;
