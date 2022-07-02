import React from "react";

const CategoryPreview = React.lazy(() =>
    import("../../components/category-preview/category-preview.component")
);


const CategoryPage = () => {
  return (
    <div className="category">
      <CategoryPreview />
    </div>
  );
};
export default CategoryPage;
