import React from "react";

const ProductsList = React.lazy(() => import("../../components/products-list/products-list.component"));

const Shop = () => {
  return <div className="shop">
    <ProductsList />
  </div>;
};

export default Shop;
