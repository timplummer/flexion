import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TempList from './components/TempList';

const theme = createMuiTheme();

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <TempList />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
