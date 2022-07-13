import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import {
//   getCurrentUser,
//   // onAuthStateChangedListner,
//   // getCategoriesCollections,
// } from "./utils/firebase/firebase.utils";

// import { setCurrentUser } from "./store/user/user.actions";
import { fetchCategoriesStart } from "./store/categories/categories.actions";
import { setCheckUserSession } from "./store/user/user.actions";

import { useDispatch } from "react-redux";

import Spinner from "./components/spinner/spinner.component";

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
    // onAuthStateChangedListner((user) => {
    //   // if(user){
    //   //   createUserDocumentFromAuth(user);
    //   // }
    //   // i didnt use it because i already create a doc with the user id
    //   dispatch(setCurrentUser(user));
    // });

      // getCurrentUser().then((user) => {
      //   // dispatch(setCurrentUser(user));
      //   console.log(user);
      // });
    dispatch(setCheckUserSession());
  }, [dispatch]);

  useEffect(() => {
    // console.log("fetching categories");
    dispatch(fetchCategoriesStart());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
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
    </BrowserRouter>
  );
};

export default App;
