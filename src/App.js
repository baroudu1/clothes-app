import React, { Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";




// Routes
const Home = React.lazy(() => import("./routes/home/home.page"));
const Navigation = React.lazy(() =>import("./routes/navigation/navigation.page"));
const Authentication = React.lazy(() =>import("./routes/authentication/authentication.page"));
const Shop = React.lazy(() =>import("./routes/shop/shop.page"));

//
const App = () => {
  return (
    <HashRouter>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="auth" element={<Authentication />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default App;
