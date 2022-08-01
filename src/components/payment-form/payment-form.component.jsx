import Swal from "sweetalert2";
import React, { useState, memo } from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "../button/button.component";

import "./payment-form.style.scss";

const Spinner = React.lazy(() => import("../spinner/spinner.component"));

const PaymentForm = memo(() => {
  const stripe = useStripe();
  const elements = useElements();
  const cartTotal = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessing, setIsProcessing] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements || !cartTotal) {
      return;
    }
    setIsProcessing(true);
    const { displayName = "Guest", email = "test@test.com" } = currentUser
      ? currentUser
      : {};
    // console.log(displayName, email);
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: cartTotal * 100,
        receipt_email: email,
      }),
    }).then((res) => res.json());
    // console.log(response);
    const {
      paymentIntent: { client_secret },
    } = response;
    console.log(elements.getElement(CardElement));
    // return;
    // console.log(client_secret);
    await stripe
      .confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: displayName,
          },
        },
      })
      .then((res) => {
        // console.log(res);
        if (res.error) {
          Swal.fire({
            title: "Error",
            text: res.error.message,
            icon: "error",
          });
        } else if (res.paymentIntent.status === "succeeded") {
          Swal.fire({
            title: "Success",
            text: "Payment Successful",
            icon: "success",
          });
        }
      })
      .catch((err) => {
        // console.log(err);
        Swal.fire({
          title: "Error",
          text: err.message,
          icon: "error",
        });
      });
    setIsProcessing(false);
  };
  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };
  return (
    <div className="payment-form-container">
      <form className="form-container" onSubmit={paymentHandler}>
        <h2>Credit Card Payment: </h2>
        <CardElement options={CARD_ELEMENT_OPTIONS} />
        <Button
          type="submit"
          buttonType={"inverted"}
          style={{ marginLeft: "auto", marginTop: "30px" }}
          disabled={isProcessing}
        >
          {isProcessing ? (
            <Spinner
              style={{ width: "30px", height: "30px", marginTop: "5px" }}
            />
          ) : (
            <span>Pay Now</span>
          )}
        </Button>
      </form>
    </div>
  );
});
export default PaymentForm;
