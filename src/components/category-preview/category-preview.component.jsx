import React, {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import { CategoriesContext } from "../../contexts/categories.context";


import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/categories.selector";

import "./category-preview.style.scss";

const ProductCard = React.lazy(() =>
  import("../product-card/product-card.component")
);

const CategoryPreview = () => {
  const  categories  = useSelector(selectCategories);
  const { category } = useParams();
  const [categoryItem, setCategoryItem] = useState(null);
  useEffect(() => {
    const categoryI = categories.filter((item) => item.routeName === category);
    setCategoryItem(categoryI[0]);
  }, [categories, category]);
  if (!categoryItem) {
    return null;
  }

  return (
    <div className="products-list-container">
      <h2>{categoryItem.title}</h2>
      <div className="products-container">
        {categoryItem.items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default CategoryPreview;
