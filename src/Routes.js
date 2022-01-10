import { Switch, Route } from "react-router";
import React from "react";
import Login from "./pages/Login";
import Wallet from "./pages/Wallet";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/carteira" component={Wallet} />
        <Route exact path="/" component={Login} />
      </Switch>
    );
  }
}

export default Routes;
