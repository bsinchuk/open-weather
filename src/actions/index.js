export const ADD_CITY = 'ADD_CITY';
export const RECIEVE_CITY_WEATHER = 'RECIEVE_CITY_WEATHER';
export const CATCH_ERROR = 'CATCH_ERROR';

export const addCity = () => ({
  type: ADD_CITY,
});

export const fetchCityWeather = city => async (dispatch, getState) => {
  console.log('fetching ', city);
  dispatch(addCity());
  try {
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.getItem(city)) {
        throw new Error('exist');
      }
    }
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    const url = `//api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&mode=json`;
    const res = await fetch(url);
    const json = await res.json();
    const data = {
      name: json.name,
      id: json.sys.id,
      country: json.sys.country,
      temp: json.main.temp,
      icon: json.weather[0].icon
    };
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