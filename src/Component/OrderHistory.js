import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const moment = require("moment"); //require

export default function OrderHistory() {
  const [data, setdata] = useState([]);
  const state = useSelector((state) => state.orderdataReducer.cartArray);
  const time = moment().format("MMMM Do YYYY, h:mm a");
  return (
    <div>
      {state.map((item) => {
        const { id, title, qty, image, price, category } = item;
        return (
          <>
            <div className=" d-flex justify-content-center mb-3 mt-3  pb-1 ">
              <div className="col-md-2 mt-2">
                <img src={image} width="180px" height="180px"></img>
              </div>
              <div className="col-md-4 mt-3 ">
                <h3 className="lead">{title}</h3>
                <p className="lead fw-bold">
                  {qty}X{price}=₹ {qty * price}
                </p>
                Purchasing date <h6>{time}</h6>
                <h6 className="lead">Your Item is on the way</h6>
              </div>
              <hr className="mt-3"></hr>
            </div>
          </>
        );
      })}
    </div>
  );
}
