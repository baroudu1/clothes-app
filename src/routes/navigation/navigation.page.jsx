import React, { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as MrbooLogo } from "../../assets/logo/mrboo-logo.svg";

import "./navigation.style.scss";

const CartIcon = React.lazy(() =>
  import("../../components/cart-icon/cart-icon.component")
);

const CartDropdown = React.lazy(() =>
  import("../../components/cart-dropdown/cart-dropdown.component")
);

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, cartItemsCount } = useContext(CartContext);

  const handleSignOut = async () => {
    await signOutUser();
    // setCurrentUser(null);
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <MrbooLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            SHOP
          </Link>
          <Link to="/contact" className="nav-link">
            CONTACT
          </Link>

          {currentUser ? (
            <span onClick={handleSignOut} className="nav-link">
              SIGN OUT
            </span>
          ) : (
            <Link to="/auth" className="nav-link">
              SIGN IN
            </Link>
          )}
          <Link to="#" className="nav-link">
            <CartIcon count={cartItemsCount} />
          </Link>
          {isCartOpen && <CartDropdown />}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
