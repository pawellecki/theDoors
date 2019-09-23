import React, { useState } from "react";
import Door from "./Door";

const maxWidth = 150;
const maxHeight = 250;

const doorDefaultConfig = {
  leafs: 1,
  width: 120,
  height: 220,
  beams: 4,
  posts: 5,
  colorId: 0,
  is3D: false
};

const DoorContainer = ({ currentStep, handleSetCurrentStep }) => {
  const [doorConfig, setDoorConfig] = useState(doorDefaultConfig);

  const handleSetDoorConfig = (value, path, plusMinus) => {
    const isPlus = plusMinus === "plus";
    const isMinus = plusMinus === "minus";
    const isTooWide = path === "width" && value > maxWidth;
    const isTooHigh = path === "height" && value > maxHeight;

    let newValue = value;
    if (isPlus) newValue += 3;
    if (isMinus) newValue += 1;
    if (isTooWide) newValue = maxWidth;
    if (isTooHigh) newValue = maxHeight;

    setDoorConfig({ ...doorConfig, [path]: newValue });
  };

  const handleToggle3D = label => {
    const is3D = label === "3D";
    handleSetDoorConfig(is3D, "is3D");
  };

  return (
    <Door
      currentStep={currentStep}
      doorConfig={doorConfig}
      handleChange={handleSetDoorConfig}
      handleToggle3D={handleToggle3D}
      handleSetCurrentStep={handleSetCurrentStep}
    />
  );
};

export default DoorContainer;
