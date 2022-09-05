import { createAction } from '@reduxjs/toolkit';

export const fetchWarsawWeather = createAction('warsawWeather/fetchWarsawWeather');
export const setWarsawWeatherSuccess = createAction('warsawWeather/setWarsawWeatherSuccess');
export const setWarsawWeatherError = createAction('warsawWeather/setWarsawWeatherError');
