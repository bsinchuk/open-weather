import React from 'react';
import { Card, CardHeader, CardMedia, CardContent,
         Typography, CardActions, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 220,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  header: {
    alignSelf: 'flex-start',
  },
  img: {
    width: 100,
  },
  temp: {
    marginLeft: 10,
  }
}));

const WeatherCard = ({ weatherData, onUpdate, onDelete, onExpand  }) => {

  const classes = useStyles();
  const imgSrc = `http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`;
  const tempStr = Math.round(weatherData.temp) + '°';

  return (
    <Card 
      variant="outlined" 
      className={classes.root}
      onClick={onExpand.bind(null, weatherData.id)}>
      <CardHeader
        className={classes.header} 
        title={weatherData.city} 
        subheader={weatherData.country} />
      <CardMedia
        className={classes.img}
        component="img"
        src={imgSrc} />
      <CardContent>
        <Typography className={classes.temp}
          align="center"
          color="textPrimary"
          variant="h4">
          {tempStr}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="update" onClick={onUpdate.bind(null, weatherData.id)} >
          <UpdateIcon color="primary" />
        </IconButton>
        <IconButton aria-label="delete" onClick={onDelete.bind(null, weatherData.id)} >
          <DeleteIcon color="secondary" />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default WeatherCard;