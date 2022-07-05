import { CART_ACTIONS_TYPES } from "./cart.types";

const INITIAL_STATE = {
  cartItems: [],
  isCartOpen: false,
  cartCount: 0,
  cartTotal: 0,
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

const updateCartCountAndTotal = (cartItems) => {
  let cartCount = 0;
  let cartTotal = 0;
  cartItems.forEach((item) => {
    cartCount += item.quantity;
    cartTotal += item.quantity * item.price;
  });
  return { cartCount, cartTotal };
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
      const cartItems1 = addItemToCart(state.cartItems, payload);
      return {
        ...state,
        cartItems: cartItems1,
        ...updateCartCountAndTotal(cartItems1),
      };
    case CART_ACTIONS_TYPES.REMOVE_ITEM_FROM_CART:
      const cartItems2 = removeItemFromCart(state.cartItems, payload);
      return {
        ...state,
        cartItems: cartItems2,
        ...updateCartCountAndTotal(cartItems2),
      };
    case CART_ACTIONS_TYPES.DELETE_ITEM_FROM_CART:
      const cartItems3 = deleteItemFromCart(state.cartItems, payload);
      return {
        ...state,
        cartItems: cartItems3,
        ...updateCartCountAndTotal(cartItems3),
      };
    default:
      return state;
  }
};
