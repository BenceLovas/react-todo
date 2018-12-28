import React from 'react';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';
import indigo from '@material-ui/core/colors/indigo';
import grey from '@material-ui/core/colors/grey';
import deepOrange from '@material-ui/core/colors/deepOrange';
import teal from '@material-ui/core/colors/teal';


const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: { light: indigo.A200, main: indigo.A400, dark: indigo[500] },
    secondary: { light: teal.A200, main: teal.A400, dark: teal.A700 },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    useNextVariants: true,
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <AddTodo />
      <VisibleTodoList />
      {/* <Footer /> */}
    </div>
  </MuiThemeProvider>
)

export default App;
