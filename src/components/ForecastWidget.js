import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { tempToColor } from 'temp-color';


const useStyles = makeStyles((theme) => ({
  container: {
    width: 400,
    height: 130,
    display: 'flex',
    justifyContent: 'space-evenly',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif;',
    "@media (max-width:450px)": {
      flexDirection: 'column',
      alignItems: 'center',
      height: 'auto',
      width: '100%',
    }
  },
  box: {
    width: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 3,
    "@media (max-width:450px)": {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 'auto',
      width: '100%',
      marginTop: 10,
    }
  },
  time: {
    height: 30,
    width: '100%',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1rem',
    color: 'grey',
    "@media (max-width:450px)": {
      height: 'auto',
    }
  },
  temp: {
    height: 40,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    "@media (max-width:450px)": {
      height: 'auto',
      margin: '0 !important',
    }
  }
}));

const ForecastWidget = ({ forecast, hours }) => {
  const classes = useStyles();
  const sum = forecast.reduce((prev, next) => prev + next.temp, 0);
  let avg = Math.round((sum / forecast.length));
  if (avg === 0) avg = 1;
  const tresh = 30;
  const coef = 1.5;
  return (
    <div className={classes.container}>
      {
        forecast.map((el, index) => {
          let time = (+hours + index) % 24;
          if (time < 10) time = '0' + time;
          time += ':00'
          const temp = Math.round(el.temp);
          const diff = (temp - avg) * coef;
          const margin = tresh - diff;
          const { r, g, b } = tempToColor(temp, -20, 40);
          return (
            <div key={index} className={classes.box}>
              <p className={classes.time}>
                {time}
              </p>
              <div className={classes.temp} style={{
                'marginTop': `${margin}px`,
                'backgroundColor': `rgba(${r},${g},${b}, 0.6)`
                }}
              >
                {temp}
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default ForecastWidget;

