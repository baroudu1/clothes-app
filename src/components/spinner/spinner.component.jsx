import { memo } from "react";

import "./spinner.style.scss";

const Spinner = memo(({ style = {} }) => {
  return (
    <div className="spinner-overlay" style={style}>
      <div className="spinner-container" style={style}></div>
    </div>
  );
});
export default Spinner;
