import React, { Component } from "react";
import NavBar from "./components/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import "./App.css";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route
              path="/products/:id"
              render={props => <ProductDetails {...props} />}
            />
            <Route
              path="/products"
              render={props => <Products sortBy="newest" {...props} />}
            />
            <Route path="/posts/:year?/:month?" exact component={Posts} />
            <Route path="/admin" component={Products} />
            <Redirect from="/messages" to="/posts" />
            <Route path="/" exact component={Home} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
