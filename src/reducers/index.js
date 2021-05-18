const defaultState = {
  loading: false,
  error: false,
  cityList: [],
  weather: [],
}

const basicReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default basicReducer;