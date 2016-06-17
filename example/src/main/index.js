import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import store from './store';
import App from 'components/app';
import Title from 'components/title';

// configure browser history
const history = syncHistoryWithStore(browserHistory, store);

// load initial data from server, create the store and render the app
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="title" component={Title} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'));
