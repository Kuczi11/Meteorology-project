/* eslint-disable import/prefer-default-export */
import cityData from '../data/GeographicData.json';

export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const WARSAW_URL = `${BASE_URL}lat=${cityData[0].latitude}&lon=${cityData[0].longitude}`;
export const BERLIN_URL = `${BASE_URL}lat=${cityData[1].latitude}&lon=${cityData[1].longitude}`;
export const MOSCOW_URL = `${BASE_URL}lat=${cityData[2].latitude}&lon=${cityData[2].longitude}`;
export const MADRID_URL = `${BASE_URL}lat=${cityData[3].latitude}&lon=${cityData[3].longitude}`;
