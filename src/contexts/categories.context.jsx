import { useState, createContext, useEffect } from "react";

import { getCategoriesCollections } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categories: [],
  setCategories: () => null,
});


export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const value = { categories, setCategories };

  useEffect(() => {
    //   addCollectionAndDocuments("categories", myList);

    getCategoriesCollections("categories").then((collections) => {
      setCategories(collections);
    }
    );
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
