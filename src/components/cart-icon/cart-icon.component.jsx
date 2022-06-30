import './cart-icon.style.scss';

import { ReactComponent as BagIcon } from "../../assets/icons/bag.svg";

const CartIcon = ({count}) => {
  return (
    <div className="cart-icon-container">
        <BagIcon className='shopping-icon' />
        <span className='item-count'>{count}</span>
    </div>
  );
};
export default CartIcon;
