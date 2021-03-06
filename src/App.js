import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Grid, Paper, ThemeProvider} from '@material-ui/core';
import theme from './theme';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';

import PicState from './context/pic/PicState';
import AlertState from './context/alert/AlertState';
import FavoriteState from './context/favorite/FavoriteState';

const App = () => {
  return (
    <PicState>
      <AlertState>
        <FavoriteState>
          <Router>
            <ThemeProvider theme={theme} >
              <Paper elevation={0} square={true} style={{minHeight: '100vh'}}>
                <Grid container direction="column">
                  <Grid item>
                    <Navbar title="Pics App" />
                  </Grid>
                  <Grid item container>
                    <Switch>
                      <Route exact path="/" render={Home} />
                      <Route exact path="/about" component={About} />
                    </Switch>
                  </Grid>
                </Grid>
              </Paper>
          </ThemeProvider>
          </Router>
        </FavoriteState>
      </AlertState>
    </PicState>
  );
}

export default App;