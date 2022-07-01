import React, { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./cart-dropdown.style.scss";

const Button = React.lazy(() =>
  import("../../components/button/button.component")
);

const CartItem = React.lazy(() =>
  import("../../components/cart-item/cart-item.component")
);

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length > 0 &&
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)}
        {cartItems.length === 0 && <div className="empty-message">Your cart is empty</div>}
      </div>

      <Button>Checkout</Button>
    </div>
  );
};
export default CartDropdown;
