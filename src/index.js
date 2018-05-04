import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import configureStore from './configureStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = configureStore();
 
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
