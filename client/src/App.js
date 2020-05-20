import React from "react";

import "./App.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Switch, Route, Link, useLocation } from "react-router-dom";

import routes from "./routes";

import NoMatch from "./pages/NoMatch";

function App() {
  let location = useLocation();

  const generateRoutes = () =>
    routes.map((route) => {
      console.log(route, "theroute");
      return (
        <Route
          key={route.path}
          path={route.path}
          component={route.component}
          exact
        />
      );
    });

  return (
    // Note: code copied from react-router-dom example docs for transition

    <TransitionGroup>
      {/*
        This is no different than other usage of
        <CSSTransition>, just make sure to pass
        `location` to `Switch` so it can match
        the old location as it animates out.
      */}
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Switch location={location}>
          {generateRoutes()}

          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
