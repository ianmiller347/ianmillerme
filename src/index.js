import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import configureStore from './configureStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={ App } exact />
        <Route render={() => { return <Redirect to="/" /> }} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
