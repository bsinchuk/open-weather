import React, { useRef } from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

const Adder = props => {
  const cityRef = useRef();
  const classes = useStyles();

  const submitHandler = e => {
    e.preventDefault();
    console.log(cityRef.current.value, 'submitted');
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
      />
      <Button 
        size="large"
        variant="contained" 
        color="primary"
        type="submit"
      >
        Add
      </Button>
    </form>
  )

};

export default Adder;