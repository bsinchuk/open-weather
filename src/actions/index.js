export const ADD_CITY = 'ADD_CITY';
export const RECIEVE_CITY_WEATHER = 'RECIEVE_CITY_WEATHER';
export const CATCH_ERROR = 'CATCH_ERROR';
export const RECIEVE_ALL_WEATHER = 'RECIEVE_ALL_WEATHER';
export const DELETE_CITY = 'DELETE_CITY';

const key = process.env.REACT_APP_WEATHER_API_KEY;

export const addCity = () => ({
  type: ADD_CITY,
});

export const fetchCityWeather = city => async (dispatch, getState) => {
  dispatch(addCity());
  try {
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.getItem(city)) {
        throw new Error('exist');
      } 
    }
    const url = `//api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&mode=json`;
    const res = await fetch(url);
    const json = await res.json();
    const data = {
      name: json.name,
      id: json.id,
      country: json.sys.country,
      temp: json.main.temp,
      icon: json.weather[0].icon
    };

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
      const data = json.list.map(el => ({
        name: el.name,
        id: el.id,
        country: el.sys.country,
        temp: el.main.temp,
        icon: el.weather[0].icon
      }));
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