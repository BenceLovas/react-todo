import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers/reducers';
import App from './App';

import * as serviceWorker from './serviceWorker';

import './index.css';

const initialState = {
    visibilityFilter: 'SHOW_ALL',
    todos: [
      {
        id: 0,
        text: 'Consider using Redux',
        completed: true
      },
      {
        id: 1,
        text: 'Keep all state in a single tree',
        completed: false
      }
    ]
  }

const store = createStore(todoApp, initialState);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
