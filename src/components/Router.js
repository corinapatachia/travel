import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";
import SearchResults from './SearchResults';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/search_results/:searchTermConst" component={SearchResults} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
