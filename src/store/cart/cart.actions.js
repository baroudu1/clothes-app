import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTIONS_TYPES } from "./cart.types";

export const setIsCartOpen = (isCartOpen) => {
  return createAction(CART_ACTIONS_TYPES.IS_CART_OPEN, isCartOpen);
};

export const setAddItemToCart = (itemToAdd) => {
  return createAction(CART_ACTIONS_TYPES.ADD_ITEM_TO_CART, itemToAdd);
};

export const setRemoveItemFromCart = (itemToRemove) => {
  return createAction(CART_ACTIONS_TYPES.REMOVE_ITEM_FROM_CART, itemToRemove);
};

export const setDeleteItemFromCart = (itemToDelete) => {
  return createAction(CART_ACTIONS_TYPES.DELETE_ITEM_FROM_CART, itemToDelete);
};
