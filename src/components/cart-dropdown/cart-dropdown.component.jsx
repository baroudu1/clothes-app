import React, { useCallback, memo } from "react";
import { useNavigate } from "react-router-dom";

// import { CartContext } from "../../contexts/cart.context";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

import "./cart-dropdown.style.scss";

const Button = React.lazy(() =>
  import("../../components/button/button.component")
);

const CartItem = React.lazy(() =>
  import("../../components/cart-item/cart-item.component")
);

// const sleep = (ms) => {
//   var start = new Date().getTime();
//   for (var i = 0; i < 1e7; i++) {
//     if (new Date().getTime() - start > ms) {
//       break;
//     }
//   }
// };

const CartDropdown = memo(() => {
  // const [count, setCount] = useState(100);

  // const handredCount = useMemo(() => {
  //   console.log("start");
  //   sleep(2000);
  //   console.log("end");
  //   return count;
  // }, [count]);

  // const { cartItems } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const handleCheckout = useCallback(() => {
    navigate("/checkout");
  }, [navigate]);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length > 0 &&
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)}
        {cartItems.length === 0 && (
          <div className="empty-message">Your cart is empty</div>
        )}
      </div>
      <Button onClick={handleCheckout}>Checkout</Button>
    </div>
  );
});
export default CartDropdown;
