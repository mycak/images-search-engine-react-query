import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from '../history';

import ListImagesSite from '../pages/ListImagesSite';
import MainSite from '../pages/MainSite';
import ImageSite from '../pages/ImageSite'
console.log(process.env.API_KEY)
const App = () => {
  
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={MainSite} />
        <Route exact path="/pictures/:query" component={ListImagesSite} />
        <Route exact path="/pictures/show/:query" component={ImageSite} />
      </Switch>
    </Router>
  );
};

export default App;