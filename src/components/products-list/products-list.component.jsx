import React from "react";
import { Link } from "react-router-dom";

// import { CategoriesContext } from "../../contexts/categories.context";\\


import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/categories.selector";

import "./products-list.style.scss";

const ProductCard = React.lazy(() =>
  import("../product-card/product-card.component")
);

const ProductsList = () => {
  const categories = useSelector(selectCategories);

  return (
    <div className="products-list-container">
      {categories.map((category) => (
        <div key={category.id}>
          <Link to={`/shop/${category.routeName}`}>
            <h2>{category.title}</h2>
          </Link>
          <div className="products-container">
            {category.items.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProductsList;
