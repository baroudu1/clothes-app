import React, { useContext } from "react";

import { CategoriesContext } from "../../contexts/categories.context";


import "./products-list.style.scss";

const ProductCard = React.lazy(() =>
  import("../product-card/product-card.component")
);

const ProductsList = () => {
  const { categories } = useContext(CategoriesContext);
  return (
    <div className="products-list-container">
      {categories.map((category) => (
        <div key={category.id}>
          <h2>{category.title}</h2>
          <div className="products-container">
            {category.items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProductsList;
