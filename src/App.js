import React from 'react';
import { Grid, CssBaseline } from '@material-ui/core';
import Adder from './components/Adder';
import Dashboard from './components/Dashboard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  'spacing-xs-3': {
    width: '100%',
    margin: 0,
  },
  'item-wrapper': {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center',
  }
}));

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid
        container
        spacing={3}
        direction="column"
        justify="flex-start"
        alignItems="center"
        className={classes['spacing-xs-3']} >
        <Grid item className={classes['item-wrapper']}>
          <Adder />
        </Grid>
        <Grid item>
          <Dashboard />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
