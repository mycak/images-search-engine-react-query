import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import history from "../utils/history";
import { QueryClient, QueryClientProvider } from "react-query";

import listImages from "../pages/listImages";
import homePage from "../pages/homePage";
import GlobalStyles from "./styles/GlobalStyles";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={homePage} />
            <Route path="/pictures/:query/:id?" component={listImages} />
          </Switch>
        </Router>
      </QueryClientProvider>
    </>
  );
};

export default App;
