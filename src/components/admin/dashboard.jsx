import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import SideBar from "./sideBar";
import Posts from "./posts";
import Users from "./users";
const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SideBar />
      <Switch>
        <Route path="/admin/users" component={Users} />
        <Route path="/admin/posts" component={Posts} />
      </Switch>
    </div>
  );
};

export default Dashboard;
