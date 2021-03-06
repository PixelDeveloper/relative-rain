import { fetch, addTask } from 'domain-task';
import {devConnection} from './connectionstrings';

export const REQUEST_WEATHER = 'weather/REQUEST_WEATHER';
export const RECEIVE_WEATHER = 'weather/RECEIVE_WEATHER';

const initialState = {
  isGettingWeather: false,
  weather: {
    city: 'City 17',
    weather: 'No weather forecast found, service down.',
    weatherDescription: '',
    temp: '',
    date: '0000-00-00',
    icon: '10d'
  },

};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_WEATHER:
      return {
        ...state,
        isGettingWeather: true
      };
    case RECEIVE_WEATHER:
      return {
        ...action,
        isGettingWeather: false
      };
    default:
      return state;
  }
};

export const request = (city, day) => {
  return dispatch => {
    dispatch({
      type: REQUEST_WEATHER
    });

    let fetchTask = fetch(devConnection + `/api/WeatherForecast/` + city + "/" + day)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: RECEIVE_WEATHER,
          weather: data,

        });
      });

    addTask(fetchTask);

    dispatch({
      type: REQUEST_WEATHER
    });
  };
};
