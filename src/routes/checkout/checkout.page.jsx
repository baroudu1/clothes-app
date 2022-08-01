import React, { memo } from "react";
import "./checkout.style.scss";

const CheckoutList = React.lazy(() =>
  import("../../components/checkout-list/checkout-list.component")
);

const PaymentForm = React.lazy(() =>
  import("../../components/payment-form/payment-form.component")
);

const CheckOut = memo(() => {
  return (
    <div className="checkout">
      <CheckoutList />
      <PaymentForm />
    </div>
  );
});
export default CheckOut;
