import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripeCheckout from "../../components/StripeCheckout";
import "./Payment.css";
import { useParams } from "react-router-dom";

// load stripe outside of components render to avoid recreating stripe object on every render
const promise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const Payment = () => {
  const { amount, acoin } = useParams();
  console.log("Payment", acoin);
  return (
    <div
      className="container p-5 text-center text-white"
      //   initial={{ opacity: 0 }}
      //   animate={{ opacity: 1 }}
      //   exit={{ opacity: 0 }}
    >
      <h4>Complete your purchase</h4>
      <Elements stripe={promise}>
        <div className="col-md-8 offset-md-2">
          <StripeCheckout amount={amount} acoin={acoin} />
        </div>
      </Elements>
    </div>
  );
};

export default Payment;
