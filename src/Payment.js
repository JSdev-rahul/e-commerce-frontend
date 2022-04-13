import StripeCheckout from "react-stripe-checkout";
import React from "react";

function Payment({ price }) {
  function handleToken(token, addresses) {
    console.log(token, addresses);
  }
  return (
    <div>
      <StripeCheckout
        stripeKey="pk_test_51Ko4bKSBftn7azzBqpUT5ZaeS5odtaKlWNvspX6Sz6ZqOy67dAxm7gwd4NSlZdozMoUqZnHICJssoxAM6Ywue7JX00oK6HDKje"
        token={handleToken}
        billingAddress
        shippingAddress
        amount={price}
        name="rahul"
      ></StripeCheckout>
    </div>
  );
}

export default Payment;
