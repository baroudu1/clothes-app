import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.style.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, deleteItemFromCart } =
    useContext(CartContext);

  const handleAddItem = () => {
    addItemToCart(cartItem);
  };
  const handleRemoveItem = () => {
    removeItemFromCart(cartItem);
  };
  const handleDeleteItem = () => {
    deleteItemFromCart(cartItem);
  };
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleRemoveItem}>
          &#10094;
        </div>
        {quantity}
        <div className="arrow" onClick={handleAddItem}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={handleDeleteItem}>
        &#10005;
      </div>
    </div>
  );
};
export default CheckoutItem;
