import "./App.css";

import { BrowserRouter, Route, Switch, Routes, Link } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Product from "./Product";
import Products from "./Products";
import Cart from "./Component/Cart";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/products" component={Product}></Route>
        <Route exact path="/products/:id" component={Products}></Route>
        <Route exact path="/cart" component={Cart}></Route>
      </Switch>
    </div>
  );
}

export default App;
