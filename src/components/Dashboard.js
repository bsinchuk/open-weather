import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';

import WeatherCard from './WeatherCard';
import { fetchAllWeather, deleteCity } from '../actions';

const Dashboard = props => {

  useEffect(() => {
    props.initiate();
  }, []);

  const updateHandler = (id, e) => {
    e.preventDefault();
    console.log(id, ' is updating');
  }

  const removeHadnler = (id, e) => {
    e.preventDefault();
    console.log('removing ', id);
    props.remove(id);
  }

  const expandHandler = (id, e) => {
    if (!e.defaultPrevented) {
      console.log('showing modal for ', id);
    }
  }

  return (
    <Grid
      container
      spacing={3}
      direction="row"
      alignItems="center"
      justify="center"
    >
    {
      props.cities.map((city, index) => (
        <Grid key={index} item zeroMinWidth >
          <WeatherCard
            weatherData={{
              id: city.id, 
              country: city.country, 
              icon: city.icon, 
              temp: city.temp,
              city: city.name }}
            onUpdate={updateHandler}
            onDelete={removeHadnler}
            onExpand={expandHandler}
          />
        </Grid>
      ))
    }
    </Grid>
  );

};

const mapStateToProps = state => ({
  cities: state.weather,
});

const mapDispatchToProps = dispatch => ({
  initiate: () => dispatch(fetchAllWeather()),
  remove: (id) => dispatch(deleteCity(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);