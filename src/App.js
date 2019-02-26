import React, { Component } from "react";
import NavBar from "./components/navbar";
import { Route, Switch } from "react-router-dom";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route
              path="/products"
              render={props => <Products sortBy="newest" {...props} />}
            />
            <Route path="/posts" component={Posts} />
            <Route path="/admint" component={Products} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
