import { useState, createContext } from "react";

import MyList from "../services/categories-list";

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

const myList = MyList.categories;

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(myList);
  const value = { products, setProducts };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
