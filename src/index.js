import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './store/reducers';
import './index.css';
import Stories from './layouts/stories/Stories'
import Home from './pages/home/Home'

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';
import indigo from '@material-ui/core/colors/indigo';
import grey from '@material-ui/core/colors/grey';
import deepOrange from '@material-ui/core/colors/deepOrange';
import teal from '@material-ui/core/colors/teal';
import red from '@material-ui/core/colors/red';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: { light: indigo.A200, main: '#3a3a3a', dark: indigo[500] },
    secondary: { light: red[400], main: red[500], dark: red[700] },
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    useNextVariants: true,
  },
});

const initialState = {
  stories: [
    {
      id: 0,
      text: 'Consider using Redux',
      completed: true
    },
    {
      id: 1,
      text: 'Keep all state in a single tree',
      completed: false
    },
    {
      id: 2,
      text: 'Keep all state in a single tree',
      completed: false
    },
    {
      id: 3,
      text: 'Keep all state in a single tree',
      completed: false
    },
    {
      id: 4,
      text: 'Keep all state in a single tree',
      completed: false
    },
    {
      id: 5,
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
}

const store = createStore(reducers, initialState);

render(
    <Provider store={store}>
      <Router>
        <MuiThemeProvider theme={theme}>
          <Route path="/stories" component={Stories} />
          <Route path="/home" component={Home} />
        </MuiThemeProvider>  
      </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
