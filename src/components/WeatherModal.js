import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

import ForecastWidget from './ForecastWidget';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 15,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif;',
    "@media (max-width:450px)": { width: 250, },
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  city: {
    fontSize: '1.5rem',
    margin: 0,
  },
  country: {
    fontSize: '1rem',
    color: 'grey',
    margin: 0,
  },
  temp: {
    fontSize: '2rem',
    textAlign: 'center',
    margin: 0,
  },
  img: {
    objectFit: 'cover',
  },
  content: {
    display: 'flex',
    width: '100%',
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
    fontSize: '1rem',
    color: 'grey',
    borderTop: '1px solid grey',
    borderBottom: '1px solid grey',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '50%',
    padding: 5,
    '&:first-child': {
      alignItems: 'flex-end',
    },
    '&:last-child': {
      alignItems: 'flex-start',
    }
  }
}));

const WeatherModal = (props) => {
  const classes = useStyles();
  
  const imgSrc = process.env.PUBLIC_URL + `/img/${props.icon}.png`;
  const tempStr = Math.round(props.temp) + '°';
  const feelsStr = Math.round(props.feels) + '°';
  const date = new Date((props.time + props.offset) * 1000);
  let hours = date.getHours();
  if (hours < 10) hours = '0' + hours;
  let minutes = date.getMinutes();
  if (minutes < 10) minutes = '0' + minutes;
  const windStr = Math.round(props.wind) + ' m/s';

  let content = '';
  if (props.fetching) {
    content = <CircularProgress color='secondary' data-testid="modal-spinner"/>;
  } else if (props.city) {
    content = (
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <div>
            <p className={classes.city} data-testid="modal-city">
              {props.city}
            </p>
            <p className={classes.country}>
              {props.country}
            </p>
            <p className={classes.temp}>
              {tempStr}
            </p>
          </div>
          <img src={imgSrc} alt={props.description} className={classes.img}/>
        </div>
        <div className={classes.content}>
          <div className={classes.column}>
            <span>Current time:</span>
            <span>Feels like:</span>
            <span>Humidity:</span>
            <span>Clouds:</span>
            <span>Wind: </span>
            <span>Weather: </span>
            <span>Detailed: </span>
          </div>
          <div className={classes.column}>
            <span>
              {`${hours}:${minutes}`}
            </span>
            <span>
              {feelsStr}
            </span>
            <span>
              {props.humidity + ' %'}
            </span>
            <span>
              {props.clouds + ' %'}
            </span>
            <span>
              {windStr}
            </span>
            <span>
              {props.main.toLowerCase()}
            </span>
            <span>
              {props.desc}
            </span>
          </div>
        </div>
        <ForecastWidget forecast={props.hourly} hours={hours}/>
      </div>
    );
  } else {
    content = <p data-testid="modal-empty"></p>;
  }
  return content;
};

export default WeatherModal;