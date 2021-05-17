import React, { useRef } from 'react';
import { TextField, Button } from '@material-ui/core';


const Adder = props => {
  const cityRef = useRef();

  const submitHandler = e => {
    e.preventDefault();
    console.log(cityRef.current.value, 'submitted');
  };

  return (
    <form className="adder" onSubmit={submitHandler} >
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