import * as React from "react";
import { Switch, Route } from "wouter";
import Home from "../Homepage";
import Sprout from "./Sprout";
import Swap from "./Swap";

const Page_router = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/Sprout" component={Sprout} />
    <Route path="/Swap" component={Swap} />
  </Switch>
);

export default Page_router;
