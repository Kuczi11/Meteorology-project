import { all } from 'redux-saga/effects';
import watchFetchWarsawWeatherSaga from './warsawWeather/saga';

export default function* rootSaga() {
  yield all([
    watchFetchWarsawWeatherSaga(),
  ]);
  yield;
}
