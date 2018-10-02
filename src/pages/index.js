import React from "react";
import { Router, Switch, Route } from "react-router";
import createBrowserHistory from 'history/createBrowserHistory'
import "../assets/css/main.css";

import Home from "./home";
import WebDev from "./portfolio/web-dev";

const customHistory = createBrowserHistory()

const IndexPage = () => (
  <Router history={customHistory}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/portfolio/web-dev" component={WebDev} />
    </Switch>
  </Router>
);

export default IndexPage;
