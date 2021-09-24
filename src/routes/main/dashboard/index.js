import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import asyncComponent from "util/asyncComponent";

const Dashboard = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/dashTwo`}/>
    <Route path={`${match.url}/dashTwo`} component={asyncComponent(() => import('./DashTwo/index'))}/>
    <Route path={`${match.url}/dashOne`} component={asyncComponent(() => import('./DashOne/index'))}/>
    <Route path={`${match.url}/dashThree`} component={asyncComponent(() => import('./DashThree/index'))}/>
  </Switch>
);

export default Dashboard;
