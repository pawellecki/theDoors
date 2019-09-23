import React from "react";

const Steps = ({ config, activeStep }) => {
  return (
    <div className="steps">
      {config.map(({ name, description }, index) => {
        const isActive = activeStep === index + 1;
        return (
          <div key={index} className={`step ${isActive ? "isActive" : ""}`}>
            <div className="circle" />
            <p>
              {name} {index + 1}
            </p>
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Steps;
