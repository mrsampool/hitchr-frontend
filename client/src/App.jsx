import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RideSearch from './views/RideSearch/RideSearch';

const App = () => (
  <Router>
    <Route path="/ridesearch">
      <RideSearch />
    </Route>
    <Route exact path="/">
      <div id="Home" />
    </Route>
  </Router>
);
export default App;
