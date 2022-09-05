import { connect } from 'react-redux';
import WeatherInfo from './WeatherInfo';
import { fetchWarsawWeather } from '../../../store/warsawWeather/actions';
import { getWarsawWeather, getErrorMessage } from '../../../store/warsawWeather/selectors';

const mapStateToProps = (state) => ({
  warsawWeather: getWarsawWeather(state),
  errorMessage: getErrorMessage(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchWarsawWeather: () => { dispatch(fetchWarsawWeather()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherInfo);
