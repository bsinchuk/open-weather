import React from 'react';
import { Grid, CssBaseline } from '@material-ui/core';
import Adder from './components/Adder';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container justify="center" >
        <Adder />
      </Grid>
    </React.Fragment>
  );
}

export default App;
