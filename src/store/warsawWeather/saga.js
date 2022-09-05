import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchWarsawWeather, setWarsawWeatherSuccess, setWarsawWeatherError } from './actions';
import getWeather from '../../services/warsawWeatherAPI';

function* fetchWarsawWeatherSaga() {
  try {
    const result = yield call(getWeather);
    yield put(setWarsawWeatherSuccess(result));
  } catch (e) {
    yield put(setWarsawWeatherError(console.log(e)));
  }
}

export default function* watchFetchWarsawWeatherSaga() {
  yield takeEvery(String(fetchWarsawWeather), fetchWarsawWeatherSaga);
}
