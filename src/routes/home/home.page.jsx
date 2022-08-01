import React, { memo } from "react";

const Categories = React.lazy(() =>
  import("../../components/category-list/categories.component")
);

const Home = memo(() => {
  return (
    <div className="home">
      <Categories />
    </div>
  );
});
export default Home;
