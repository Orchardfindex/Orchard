import * as React from "react";
import { Switch, Route } from "wouter";
import Home from "../Homepage";
import Swap from "./Swap";

const Page_router = () => (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/Swap" component={Swap} />
    </Switch>
);

export default Page_router;