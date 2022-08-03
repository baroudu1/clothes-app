import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";

import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./utils/stripe/stripe.utils";

import { store, persistor } from "./store/store";

// import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Spinner from "./components/spinner/spinner.component";

// import { UserProvider } from "./contexts/user.context";
// import { CartProvider } from "./contexts/cart.context";
// import { CategoriesProvider } from "./contexts/categories.context";

import "./index.scss";

// const client = new ApolloClient({
//   uri: "https://crwn-clothing.com",
//   cache: new InMemoryCache(),

// });




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ApolloProvider client={client}> */}
      <Provider store={store}>
        <PersistGate loading={<Spinner />} persistor={persistor}>
          {/* <UserProvider> */}
          {/* <CategoriesProvider> */}
          {/* <CartProvider> */}
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
          {/* </CartProvider> */}
          {/* </CategoriesProvider> */}
          {/* </UserProvider> */}
        </PersistGate>
      </Provider>
    {/* </ApolloProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
