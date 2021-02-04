import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import history from "../history";
import GlobalStyles from "./styles/GlobalStyles";

import ListImagesSite from "../pages/ListImagesSite";
import MainSite from "../pages/MainSite";
const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={MainSite} />
          <Route exact path="/pictures/:query" component={ListImagesSite} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
