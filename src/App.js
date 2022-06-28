import React, { Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

const Shop = () => {
  return <h1>Im the Shop Page</h1>;
};

// Routes
const Home = React.lazy(() => import("./routes/home/home.component"));
const Navigation = React.lazy(() =>
  import("./routes/navigation/navigation.component")
);
const SignIn = React.lazy(() => import("./routes/sign-in/sign-in.component"));

//
const App = () => {
  return (
    <HashRouter>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="sign-in" element={<SignIn />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default App;
