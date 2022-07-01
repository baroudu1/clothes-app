import React from "react";
import "./checkout.style.scss";

const CheckoutList = React.lazy(() =>
  import("../../components/checkout-list/checkout-list.component")
);

const CheckOut = () => {
  return (
    <div className="checkout">
      <CheckoutList />
    </div>
  );
};
export default CheckOut;
