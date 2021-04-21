import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";

import About from "./components/About";
import Home from "./components/Home";
import {TodoContextProvider} from "./components/TodoContext";

function App() {
  let routes;

  routes = (
    <Switch>
      <Route path="/todo">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Redirect to="/todo" />
    </Switch>
  );

  return (
    <Router>
      <TodoContextProvider>{routes}</TodoContextProvider>
    </Router>
  );
}

export default App;
