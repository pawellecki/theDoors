import React, { useState, useEffect } from "react";
import Select from "./Select";

const SelectContainer = ({ defaultValue, list, label, handleSelect }) => {
  const [chosenValue, setChosenValue] = useState("");
  useEffect(() => {
    if (defaultValue) {
      setChosenValue(defaultValue);
    }
  }, [defaultValue]);

  const handleSelectValue = value => {
    handleSelect(value);
    setChosenValue(value);
  };

  return (
    <Select
      value={chosenValue}
      list={list}
      label={label}
      handleSelect={handleSelectValue}
    />
  );
};

export default SelectContainer;
