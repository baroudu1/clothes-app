import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./cart-item.style.scss";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl = "", price, quantity } = cartItem;
  const { removeItemFromCart } = useContext(CartContext);

  const handleRemoveItem = () => {
    removeItemFromCart(cartItem);
  };

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`item ${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
        <span className="remove" onClick={handleRemoveItem}>
          -
        </span>
      </div>
    </div>
  );
};
export default CartItem;
