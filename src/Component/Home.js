import React from "react";
import Product from "../Product";
import Razor from "../Razor";
import { Slider } from "../Slider";
function Home() {
  return (
    <div>
      <Slider></Slider>
      <div className="card bg-dark text-white border-0 ">
        <div className="card-img-overlay">
          <h1 className="card-title text-black"></h1>
          <p className="card-text text-black "></p>
        </div>
      </div>
      <Product />
    </div>
  );
}

export default Home;
