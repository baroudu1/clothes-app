import React, { memo } from "react";
import { Outlet } from "react-router-dom";

const ProductsList = React.lazy(() =>
  import("../../components/products-list/products-list.component")
);

const Shop = memo(() => {
  return (
    <div className="shop">
      <Outlet />
      <ProductsList />
    </div>
  );
});

export default Shop;
