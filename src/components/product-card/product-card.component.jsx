import React, { memo } from "react";

// import { CartContext } from "../../contexts/cart.context";

import { useDispatch } from "react-redux";

import { setAddItemToCart } from "../../store/cart/cart.actions";

import "./product-card.style.scss";

const Button = React.lazy(() =>
  import("../../components/button/button.component")
);

const ProductCard = memo(({ product }) => {
  const dispatch = useDispatch();

  // const { addItemToCart } = useContext(CartContext);
  const handleAddToCart = () => {
    dispatch(setAddItemToCart({ ...product, quantity: 1 }));
  };

  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <div className="name">{name}</div>
        <div className="price">${price}</div>
      </div>
      <Button buttonType={"inverted"} onClick={handleAddToCart}>
        Add to cart
      </Button>
    </div>
  );
});
export default ProductCard;
