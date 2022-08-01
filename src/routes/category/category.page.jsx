import React, { memo } from "react";

const CategoryPreview = React.lazy(() =>
  import("../../components/category-preview/category-preview.component")
);

const CategoryPage = memo(() => {
  return (
    <div className="category">
      <CategoryPreview />
    </div>
  );
});
export default CategoryPage;
