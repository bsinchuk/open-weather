import React, { useRef } from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import { fetchCityWeather } from '../actions';

const useStyles = makeStyles((theme) => ({
  adder: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    minWidth: 220,
    maxWidth: 400,
  }
}));

export const Adder = props => {
  const cityRef = useRef();
  const classes = useStyles();

  const submitHandler = e => {
    e.preventDefault();
    props.fetchWeather(cityRef.current.value);
  };

  return (
    <form className={classes.adder} onSubmit={submitHandler} >
      <TextField
        id="city-input"
        placeholder="Enter a City"
        label="City"
        margin="normal"
        size="medium"
        variant="filled"
        fullWidth
        inputRef={cityRef}
        error={props.error.length > 0}
        helperText={props.error.length > 0 ? props.error: ''}
      />
      <Button 
        size="large"
        variant="contained" 
        color="primary"
        type="submit"
        disabled={props.isAdding}
        data-testid="add-button"
      >
        Add
      </Button>
    </form>
  )

};

const mapStateToProps = state => ({
  error: state.error,
  isAdding: state.adding,
});

const mapDispatchToProps = dispatch => ({
  fetchWeather: city => dispatch(fetchCityWeather(city)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Adder);