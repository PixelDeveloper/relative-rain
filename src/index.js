import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import App from './containers/app';

import 'sanitize.css/sanitize.css';
import './style/base.css';
import './style/home.css';
import './style/index.css';
import './style/equipment.css';
import './style/navbar.css';
import './style/weather.css';
import './style/input.css';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);
