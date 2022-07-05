import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectCartCount = createSelector(
  [selectCartReducer],
  (cart) => cart.cartCount
);
export const selectCartTotal = createSelector(
  [selectCartReducer],
  (cart) => cart.cartTotal
);
