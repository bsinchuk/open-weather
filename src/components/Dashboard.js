import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';

import WeatherCard from './WeatherCard';
import { fetchAllWeather, deleteCity, updateCityWeather } from '../actions';

const Dashboard = props => {

  useEffect(() => {
    props.initiate();
  }, []);

  const updateHandler = (id, e) => {
    e.preventDefault();
    props.update(id);
  }

  const removeHadnler = (id, e) => {
    e.preventDefault();
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
            id={city.id}
            country={city.country}
            icon={city.icon}
            temp={city.temp}
            city={city.name}
            updating={city.updating}
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
  update: (id) => dispatch(updateCityWeather(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);