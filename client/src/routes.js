import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ListDelivery from "./pages/ListDelivery";
import RegisterDelivery from "./pages/RegisterDelivery";
import Map from "./pages/Map";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={RegisterDelivery} />
        <Route exact path="/list_delivery" component={ListDelivery} />
        <Route exact path="/map/:id" component={Map} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
