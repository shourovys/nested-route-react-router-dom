import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "./screens/auth/Login";
import Signup from "./screens/auth/Signup";
// screens
import LandingPage from "./screens/LangingPage";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <LandingPage />
          </Route>
          <Redirect exact from="/" to="/home" />

          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
