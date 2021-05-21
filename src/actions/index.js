export const ADD_CITY = 'ADD_CITY';
export const RECIEVE_CITY_WEATHER = 'RECIEVE_CITY_WEATHER';
export const CATCH_ERROR = 'CATCH_ERROR';
export const RECIEVE_ALL_WEATHER = 'RECIEVE_ALL_WEATHER';
export const DELETE_CITY = 'DELETE_CITY';
export const UPDATE_CITY = 'UPDATE_CITY'
export const RECIEVE_CITY_UPDATE = 'RECIEVE_CITY_UPDATE';
export const FETCH_FORECAST = 'FETCH_FORECAST';
export const RECIEVE_FORECAST = 'RECIEVE_FORECAST';
export const CLOSE_FORECAST = 'CLOSE_FORECAST';

const key = process.env.REACT_APP_WEATHER_API_KEY;

const addCity = () => ({
  type: ADD_CITY,
});

const updateCity = (id) => ({
  type: UPDATE_CITY,
  id: id,
});

const fetchForecast = (id) => ({
  type: FETCH_FORECAST,
  id: id,
})

export const fetchCityWeather = city => async (dispatch, getState) => {
  dispatch(addCity());
  try {
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.getItem(city)) {
        throw new Error('exist');
      } 
    }

    const data = await getCityData(city);

    for (let i = 0; i < localStorage.length; i++) {
      const item = +localStorage.getItem(localStorage.key(i));
      if (data.id === item) {
        throw new Error('exist');
      } 
    }
    
    localStorage.setItem(city, data.id);
    dispatch({
      type: RECIEVE_CITY_WEATHER,
      payload: data,
    });
  } catch (err) {
    let text = '';
    if (err.message === 'exist') {
      text = city + ' already exists.'
    } else {
      text = 'No such city.'
    }
    dispatch({
      type: CATCH_ERROR,
      info: text,
    });
  }
};

export const fetchAllWeather =  () => async (dispatch) => {
  const cityList = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    cityList.push(localStorage.getItem(key));
  }
  if (cityList.length > 0) {
    const url = `https://api.openweathermap.org/data/2.5/group?id=${cityList.join(',')}&units=metric&APPID=${key}`;
    try {
      const res = await fetch(url);
      const json = await res.json();
      const data = json.list.map(el => prepareData(el));
      dispatch({
        type: RECIEVE_ALL_WEATHER,
        payload: data
      });
    } catch (err) {
      console.log(err);
    }    
  }
};

export const deleteCity = (id) => {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (+localStorage.getItem(key) === id) {
      localStorage.removeItem(key);
      break;
    }
  }
  return {
    type: DELETE_CITY,
    id: id
  };
}

export const updateCityWeather = (id) => async (dispatch) => {
  dispatch(updateCity(id));
  let city = null;
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (+localStorage.getItem(key) === id) {
      city = key;
      break;
    }
  }
  const data = await getCityData(city);
  dispatch({
    type: RECIEVE_CITY_UPDATE,
    payload: data,
  })
};

export const requestForecast = (id, coords) => async (dispatch) => {
  dispatch(fetchForecast(id));
  const {lat, lon} = coords;
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,daily,alerts&appid=${key}`;
  try {
    const res = await fetch(url);
    const json = await res.json();
    const data = {
      clouds: json.current.clouds,
      feels: json.current.feels_like,
      humidity: json.current.humidity,
      temp: json.current.temp,
      wind: json.current.wind_speed,
      time: json.current.dt,
      offset: json.timezone_offset === 10800 ? 0 : (json.timezone_offset - 10800),
      main: json.current.weather[0].main,
      description: json.current.weather[0].description,
      icon: json.current.weather[0].icon,
      hourly: json.hourly.slice(0, 8).map(el => ({
        time: el.dt,
        temp: el.temp
      })),
    };
    dispatch({
      type: RECIEVE_FORECAST,
      payload: data,
      id: id,
    });
  } catch (err) {
    console.log(err)
  }
};

export const closeForecast = (id) => ({
  type: CLOSE_FORECAST,
  id: id,
});


const getCityData = async (city) => {
  const url = `//api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&mode=json`;
  const res = await fetch(url);
  const json = await res.json();
  const data = prepareData(json);
  return data;
};

const prepareData = (json) => ({
  name: json.name,
  id: json.id,
  country: json.sys.country,
  temp: json.main.temp,
  icon: json.weather[0].icon,
  updating: false,
  fetching: true,
  expand: false,
  lon: json.coord.lon,
  lat: json.coord.lat,
});