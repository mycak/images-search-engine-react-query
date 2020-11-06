import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import ListSite from '../pages/ListSite';
import history from '../history';
import MainSite from '../pages/MainSite';

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={MainSite} />
        <Route exact path="/pictures/:query" component={ListSite} />
      </Switch>
    </Router>
  );
};

export default App;