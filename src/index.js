import React from 'react';
import ReactDOM from 'react-dom';
import {legacy_createStore as createStore} from 'redux'
import { Provider } from 'react-redux';
import App from './App';
import { markdownReducer } from './redux/reducers';
import './index.css';

const store = createStore(markdownReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);