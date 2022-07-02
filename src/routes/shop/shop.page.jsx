import React from "react";
import { Outlet } from "react-router-dom";


const ProductsList = React.lazy(() => import("../../components/products-list/products-list.component"));

const Shop = () => {
  return <div className="shop">
    <Outlet />
    <ProductsList />
  </div>;
};

export default Shop;
