import React from 'react';
import { Card, CardHeader, CardMedia, CardContent,
         Typography, CardActions, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

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
  },
  spinner: {
    marginTop: 99,
    marginBottom: 98,
  }
}));

const WeatherCard = ({ id, city, country, icon, temp, coords,
                       updating, onUpdate, onDelete, onExpand  }) => {

  const classes = useStyles();
  const imgSrc = process.env.PUBLIC_URL + `/img/${icon}.png`;
  const tempStr = Math.round(temp) + '°';

  let content = (
    <>
      <CardMedia
        className={classes.img}
        component="img"
        src={imgSrc} />
      <CardContent>
        <Typography className={classes.temp}
          align="center"
          color="textPrimary"
          variant="h4"
          data-testid="card-temp">
          {tempStr}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="update" onClick={onUpdate.bind(null, id)} >
          <UpdateIcon color="primary" />
        </IconButton>
        <IconButton aria-label="delete" onClick={onDelete.bind(null, id)} >
          <DeleteIcon color="secondary" />
        </IconButton>
      </CardActions>
    </>
  );

  if (updating) {
    content = (
      <CircularProgress className={classes.spinner} data-testid="card-spinner"/>
    )
  }

  return (
    <Card 
      variant="outlined" 
      className={classes.root}
      onClick={onExpand.bind(null, id, coords)}>
      <CardHeader
        className={classes.header} 
        title={city} 
        subheader={country} />
      {content}
    </Card>
  );
}

export default React.memo(WeatherCard, (prevProps, nextProps) => {
  return prevProps.temp === nextProps.temp && prevProps.updating === nextProps.updating;
});