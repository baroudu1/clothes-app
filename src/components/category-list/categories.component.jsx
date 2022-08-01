import React, { memo } from "react";
// import { CategoriesContext } from "../../contexts/categories.context";

import { useSelector } from "react-redux";
import {
  selectCategories,
  selectIsLoading,
} from "../../store/categories/categories.selector";

// import Category from "../category-item/category.component";
import "./categories.style.scss";

const Category = React.lazy(() =>
  import("../category-item/category.component")
);
const Spinner = React.lazy(() => import("../spinner/spinner.component"));

const Categories = memo(() => {
  const categories = useSelector(selectCategories);
  const is_loading = useSelector(selectIsLoading);

  return (
    <div className="categories-container">
      {is_loading ? (
        <Spinner />
      ) : (
        categories.map((category) => (
          <Category key={category.id} category={category} />
        ))
      )}
    </div>
  );
});
export default Categories;
