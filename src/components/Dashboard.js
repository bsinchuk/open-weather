import React, { useEffect, useState } from 'react';
import { Grid, Backdrop, Fade, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import WeatherCard from './WeatherCard';
import WeatherModal from './WeatherModal';
import { fetchAllWeather, deleteCity, updateCityWeather, 
         requestForecast, closeForecast } from '../actions';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    "@media (max-width:450px)": {
      overflow: 'scroll',
      alignItems: 'flex-start',
      marginTop: 20,
    }
  },
}));

const Dashboard = props => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    props.initiate();
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => props.close(expanded.id), 600);
  }

  const updateHandler = (id, e) => {
    e.preventDefault();
    props.update(id);
  }

  const removeHandler = (id, e) => {
    e.preventDefault();
    props.remove(id);
  }

  const expandHandler = (id, coords, e) => {
    if (!e.defaultPrevented) {
      props.getForecast(id, coords);
      setIsOpen(true);
    }
  }

  const result = props.cities.find(city => city.expand === true);
  const expanded = result ? result : {};

  return (
    <>
      <Grid
        container
        spacing={3}
        direction="row"
        alignItems="center"
        justify="center"
        data-testid="dashboard-container"
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
              coords={{
                lat: city.lat,
                lon: city.lon
              }}
              updating={city.updating}
              onUpdate={updateHandler}
              onDelete={removeHandler}
              onExpand={expandHandler}
            />
          </Grid>
        ))
      }
      </Grid>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isOpen}
        onClose={closeModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <WeatherModal
            fetching={expanded.fetching}
            country={expanded.country}
            icon={expanded.icon}
            temp={expanded.temp}
            city={expanded.name}
            feels={expanded.feels}
            humidity={expanded.humidity}
            wind={expanded.wind}
            time={expanded.time}
            offset={expanded.offset}
            main={expanded.main}
            desc={expanded.description}
            hourly={expanded.hourly}
            clouds={expanded.clouds}
          />
        </Fade>
      </Modal>
    </>
  );

};

const mapStateToProps = state => ({
  cities: state.weather,
});

const mapDispatchToProps = dispatch => ({
  initiate: () => dispatch(fetchAllWeather()),
  remove: (id) => dispatch(deleteCity(id)),
  update: (id) => dispatch(updateCityWeather(id)),
  getForecast: (id, coords) => dispatch(requestForecast(id, coords)),
  close: (id) => dispatch(closeForecast(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);