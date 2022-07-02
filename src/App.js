import React, { Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

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

const CategoryPage = React.lazy(() => import("./routes/category/category.page"));

//
const App = () => {
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
