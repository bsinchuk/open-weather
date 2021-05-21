import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'; 
import thunk from 'redux-thunk';

import App from './App';
import basicReducer from './reducers';

const composeEnhancers = process.env.NODE_ENV === 'development' 
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;


const middleware = process.env.NODE_ENV !== 'production' ?
  [require('redux-immutable-state-invariant').default(), thunk] :
  [thunk];

const store = createStore(
  basicReducer, 
  composeEnhancers(
    applyMiddleware(...middleware)
));

const app = (
  <Provider store={store} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));