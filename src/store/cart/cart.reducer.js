export const CART_ACTIONS_TYPES = {
  UPDATE_CART: "UPDATE_CART",
  IS_CART_OPEN: "IS_CART_OPEN",
};

const INITIAL_STATE = {
  cartItems: [],
  isCartOpen: false,
  cartCount: 0,
  cartTotal: 0,
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTIONS_TYPES.UPDATE_CART:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTIONS_TYPES.IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      return state;
  }
};
