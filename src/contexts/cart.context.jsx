import { useState, createContext, useEffect, useReducer } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  deleteItemFromCart: () => {},
});

const addItemToCartHelper = (cartItems, cartItemToAdd) => {
  // console.log(cartItems);
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

const removeItemFromCartHelper = (cartItems, cartItemToRemove) => {
  const cItems = cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
  return cItems.filter((cartItem) => cartItem.quantity > 0);
};

///////////////////////////////
export const CART_ACTIONS_TYPES = {
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
  ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
  REMOVE_ITEM_FROM_CART: "REMOVE_ITEM_FROM_CART",
  DELETE_ITEM_FROM_CART: "DELETE_ITEM_FROM_CART",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTIONS_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    case CART_ACTIONS_TYPES.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItemToCartHelper(state.cartItems, payload),
      };
    case CART_ACTIONS_TYPES.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeItemFromCartHelper(state.cartItems, payload),
      };
    case CART_ACTIONS_TYPES.DELETE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== payload
        ),
      };
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartItemsCount: 0,
  cartTotal: 0,
};

///////////////////////////////

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const cartItemsCount = cartItems.reduce(
      (acc, cartItem) => acc + cartItem.quantity,
      0
    );
    setCartItemsCount(cartItemsCount);

    const cartTotal = cartItems.reduce(
      (acc, cartItem) => acc + cartItem.price * cartItem.quantity,
      0
    );
    setCartTotal(cartTotal);
  }, [cartItems]);

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeItemFromCartHelper(cartItems, cartItemToRemove));
  };

  const addItemToCart = (item) => {
    setCartItems(addItemToCartHelper(cartItems, item));
  };

  const deleteItemFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    deleteItemFromCart,
    cartItemsCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
