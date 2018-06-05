import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import AsyncApp from './containers/AsyncApp';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import { fetchPagesIfNeeded } from './actions';
import './App.css';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPagesIfNeeded());
  }

  buildRoutes(pages) {
    return pages.map(page => (
      <Route
        key={page.slug}
        component={ AsyncApp }
        path={`/${page.slug}`}
        exact
      />
    ));
  }

  render() {
    const { pages, isFetching } = this.props;
    if (isFetching) {
      return <Loader />;
    }
    if (pages && pages.length > 0) {
      return (
        <div className="App">
          <Header pages={pages} />
          <Router>
            <Switch>
              {this.buildRoutes(pages)}
              <Route path="/" component={ AsyncApp } exact />
            </Switch>
          </Router>
          <Footer />
        </div>
      );
    }
    return null;
  }
}

function mapStateToProps(state) {
  const stateFromProps = {
    pages: [],
    isFetching: false
  };

  if (state.pages && state.pages.isFetching != null) {
    stateFromProps.isFetching = state.pages.isFetching;
  }

  if (state.pages && state.pages.items && state.pages.items.length > 0) {
    stateFromProps.pages = state.pages.items;
  }

  return stateFromProps;
}

export default connect(mapStateToProps)(App);
