import { ADD_CITY, RECIEVE_CITY_WEATHER, CATCH_ERROR, RECIEVE_ALL_WEATHER } from '../actions';


const defaultState = {
  loading: false,
  error: '',
  adding: false,
  cityList: [],
  weather: [],
}

const basicReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CITY:
      return {
        ...state,
        adding: true,
      };
    case RECIEVE_CITY_WEATHER:
      return {
        ...state,
        adding: false,
        error: false,
        weather: [
          ...state.weather,
          action.payload,
        ],
      }
    case CATCH_ERROR:
      return {
        ...state,
        error: action.info,
        adding: false,
      }
    case RECIEVE_ALL_WEATHER:
      return {
        ...state,
        weather: [
          ...action.payload,
        ]
      }
    default:
      return state;
  }
}

export default basicReducer;