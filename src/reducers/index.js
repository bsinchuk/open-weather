import { ADD_CITY, RECIEVE_CITY_WEATHER, CATCH_ERROR } from '../actions';


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
    default:
      return state;
  }
}

export default basicReducer;