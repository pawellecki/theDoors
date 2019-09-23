import React from "react";

const ComponentLabel = ({ label, children }) => (
  <div className="component-label">
    <p className="label">{label}</p>
    {children}
  </div>
);

export default ComponentLabel;
