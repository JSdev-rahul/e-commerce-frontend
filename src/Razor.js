import React from "react";
import { useDispatch } from "react-redux";
import { cartDataDelete, OrderDataACtion } from "./redux/action.js";

function Razor({ price, item }) {
  const dispatch = useDispatch();
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount, item) => {
    const res = await loadScript("http://checkout.razorpay.com/v1/checkout.js");
    if (!res) {
      alert("offfline");
      return;
    }
    const options = {
      key: "rzp_test_92xnvmwoK4k2CT",
      currency: "INR",
      amount: amount * 100,
      name: "rahul",
      handler: function (response) {
        if (response) {
          dispatch(cartDataDelete(item));
          dispatch(OrderDataACtion(item));
        }
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  return (
    <div>
      <button
        className="btn btn-sm btn-primary mt-2"
        onClick={() => displayRazorpay(price, item)}
      >
        Pay with RazorPay
      </button>
    </div>
  );
}

export default Razor;
