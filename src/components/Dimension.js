import React from "react";

const Dimension = ({ value = "dd", isHeight, isTop }) => (
  <div
    className={`dimension ${isHeight ? "isHeight" : ""} ${
      isTop ? "isTop" : ""
    }`}
  >
    <div className="value">{value}</div>
  </div>
);

export default Dimension;
