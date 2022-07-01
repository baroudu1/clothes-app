import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as BagIcon } from "../../assets/icons/bag.svg";

import "./cart-icon.style.scss";

const CartIcon = ({ count }) => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const handelClick = () => {
    setIsCartOpen(!isCartOpen);
    // console.log(isCartOpen);
  };

  return (
    <div onClick={handelClick} className="cart-icon-container">
      <BagIcon className="shopping-icon" />
      <span className="item-count">{count}</span>
    </div>
  );
};
export default CartIcon;
