import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';

import PicState from './context/pic/PicState';

const App = () => {
  return (
    <PicState>
      <Router>
        <div>
          <Navbar title="Pics App" />
          <div>
            <Switch>
              <Route exact path="/" render={Home} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    </PicState>
    
  );
}

export default App;
