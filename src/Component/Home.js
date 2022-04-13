import React from "react";
import Product from "../Product";
function Home() {
  return (
    <div>
      <div className="card bg-dark text-white border-0 ">
        <img
          src="https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082__340.jpg"
          className="card-img"
          alt="..."
          height="550px"
        />
        <div className="card-img-overlay">
          <h1 className="card-title text-black">New Season Arrivals</h1>
          <p className="card-text text-black ">
            everthing in new for you ..lets try
          </p>
        </div>
      </div>
      <Product />
    </div>
  );
}

export default Home;
