import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

import Category from "../category-item/category.component";

import "./categories.style.scss";

const Categories = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};
export default Categories;
