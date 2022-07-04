import React, { Suspense, useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import {
  onAuthStateChangedListner,
  getCategoriesCollections,
} from "./utils/firebase/firebase.utils";

import { setCurrentUser } from "./store/user/user.actions";
import { setCategories } from "./store/categories/categories.actions";

import { useDispatch } from "react-redux";

// Routes
const Home = React.lazy(() => import("./routes/home/home.page"));
const Navigation = React.lazy(() =>
  import("./routes/navigation/navigation.page")
);
const Authentication = React.lazy(() =>
  import("./routes/authentication/authentication.page")
);
const Shop = React.lazy(() => import("./routes/shop/shop.page"));
const Checkout = React.lazy(() => import("./routes/checkout/checkout.page"));

const CategoryPage = React.lazy(() =>
  import("./routes/category/category.page")
);

//
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListner((user) => {
      // if(user){
      //   createUserDocumentFromAuth(user);
      // }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, [dispatch]);

  useEffect(() => {
    //   addCollectionAndDocuments("categories", myList);

    getCategoriesCollections("categories").then((collections) => {
      dispatch(setCategories(collections));
    });
  }, [dispatch]);

  return (
    <HashRouter>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="shop">
              <Route index element={<Shop />} />
              <Route path=":category" element={<CategoryPage />} />
            </Route>
            <Route path="auth" element={<Authentication />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default App;
