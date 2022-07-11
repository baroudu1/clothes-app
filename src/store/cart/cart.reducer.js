import { CART_ACTIONS_TYPES } from "./cart.types";

const INITIAL_STATE = {
  cartItems: [],
  isCartOpen: false,
};
const addItemToCart = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find((item) => item.id === itemToAdd.id);

  if (existingItem) {
    return cartItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};
const removeItemFromCart = (cartItems, itemToRemove) => {
  const cartIt = cartItems.map((item) =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
  return cartIt.filter((item) => item.quantity > 0);
};
const deleteItemFromCart = (cartItems, itemToDelete) => {
  return cartItems.filter((item) => item.id !== itemToDelete.id);
};


export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTIONS_TYPES.IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    case CART_ACTIONS_TYPES.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload),
      };
    case CART_ACTIONS_TYPES.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload),
      };
    case CART_ACTIONS_TYPES.DELETE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: deleteItemFromCart(state.cartItems, payload),
      };
    default:
      return state;
  }
};
