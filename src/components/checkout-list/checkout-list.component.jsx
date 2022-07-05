import React from "react";
import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

// import { CartContext } from "../../contexts/cart.context";

import "./checkout-list.style.scss";

const CheckoutItem = React.lazy(() =>
  import("../../components/checkout-item/checkout-item.component")
);

const CheckoutList = () => {
  // const { cartItems , cartTotal  } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.length > 0 &&
        cartItems.map((item) => <CheckoutItem key={item.id} cartItem={item} />)}

      <div className="total">
        <span>TOTAL: ${cartTotal}</span>
      </div>
    </div>
  );
};
export default CheckoutList;
