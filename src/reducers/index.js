import { ADD_CITY, RECIEVE_CITY_WEATHER, CATCH_ERROR, 
         RECIEVE_ALL_WEATHER, DELETE_CITY, UPDATE_CITY,
         RECIEVE_CITY_UPDATE, 
         FETCH_FORECAST,
         RECIEVE_FORECAST,
         CLOSE_FORECAST} from '../actions';


const defaultState = {
  loading: false,
  error: '',
  adding: false,
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
          action.payload,
          ...state.weather,
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
    case DELETE_CITY:
      return {
        ...state,
        weather: [
          ...state.weather.filter(city => city.id !== action.id)
        ],
      }
    case UPDATE_CITY:
      return {
        ...state,
        weather: state.weather.map(city => {
          if (city.id !== action.id) {
            return city;
          } else {
            return {
              ...city,
              updating: true,
            }
          }
        }),
      }
    case RECIEVE_CITY_UPDATE:
      return {
        ...state,
        weather: state.weather.map(city => {
          if (city.id !== action.payload.id) {
            return city;
          } else {
            return action.payload
          }
        }),
      }
    case FETCH_FORECAST:
      return {
        ...state,
        weather: state.weather.map(city => {
          if (city.id !== action.id) {
            return city;
          } else {
            return {
              ...city,
              expand: true,
              fetching: true,
            }
          }
        }),
      }
    case RECIEVE_FORECAST:
      return {
        ...state,
        weather: state.weather.map(city => {
          if (city.id !== action.id) {
            return city;
          } else {
            return {
              ...city,
              expand: true,
              fetching: false,
              ...action.payload,
            }
          }
        }),
      }
    case CLOSE_FORECAST:
      return {
        ...state,
        weather: state.weather.map(city => {
          if (city.id !== action.id) {
            return city;
          } else {
            return {
              ...city,
              expand: false,
            }
          }
        }),
      }
    default:
      return state;
  }
}

export default basicReducer;