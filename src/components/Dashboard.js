import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import WeatherCard from './WeatherCard';

const Dashboard = props => {
  const [ cities ] = useState([
    {
      name: 'London',
      id: 2643743,
      country: 'GB',
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d',
      clouds: 90,
      wind: 4.12,
      temp: 11.94,
      temp_feels: 11.33,
      humidity: 81,
      pressure: 1012,
    },
    {
      name: 'Kharkiv',
      id: 706483,
      country: 'UA',
      main: 'Clear',
      description: 'clear sky',
      icon: '01d',
      clouds: 0,
      wind: 8,
      temp: 26.3,
      temp_feels: 26.3,
      humidity: 32,
      pressure: 1002,
    },
    {
      name: 'Kyiv',
      id: 703448,
      country: 'UA',
      main: 'Clear',
      description: 'clear sky',
      icon: '01d',
      clouds: 0,
      wind: 8,
      temp: 18.8,
      temp_feels: 18.06,
      humidity: 77,
      pressure: 1003,
    },
    {
      name: 'Kharkiv',
      id: 706483,
      country: 'UA',
      main: 'Clear',
      description: 'clear sky',
      icon: '01d',
      clouds: 0,
      wind: 8,
      temp: 26.3,
      temp_feels: 26.3,
      humidity: 32,
      pressure: 1002,
    },
    {
      name: 'Kharkiv',
      id: 706483,
      country: 'UA',
      main: 'Clear',
      description: 'clear sky',
      icon: '01d',
      clouds: 0,
      wind: 8,
      temp: 26.3,
      temp_feels: 26.3,
      humidity: 32,
      pressure: 1002,
    },
    {
      name: 'London',
      id: 2643743,
      country: 'GB',
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d',
      clouds: 90,
      wind: 4.12,
      temp: 11.94,
      temp_feels: 11.33,
      humidity: 81,
      pressure: 1012,
    },
    {
      name: 'London',
      id: 2643743,
      country: 'GB',
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d',
      clouds: 90,
      wind: 4.12,
      temp: 11.94,
      temp_feels: 11.33,
      humidity: 81,
      pressure: 1012,
    },
    {
      name: 'London',
      id: 2643743,
      country: 'GB',
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d',
      clouds: 90,
      wind: 4.12,
      temp: 11.94,
      temp_feels: 11.33,
      humidity: 81,
      pressure: 1012,
    },
    {
      name: 'London',
      id: 2643743,
      country: 'GB',
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d',
      clouds: 90,
      wind: 4.12,
      temp: 11.94,
      temp_feels: 11.33,
      humidity: 81,
      pressure: 1012,
    },
  ]);

  const updateHandler = (id, e) => {
    e.preventDefault();
    console.log(id, ' is updating');
  }

  const removeHadnler = (id, e) => {
    e.preventDefault();
    console.log('removing ', id);
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
      cities.map((city, index) => (
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

export default Dashboard;