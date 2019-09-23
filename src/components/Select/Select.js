import React, { useState } from "react";
import { ReactComponent as Arrow } from "../../../public/assets/arrow.svg";
import { ReactComponent as Checked } from "../../../public/assets/checked.svg";

const Select = ({ value, list, label, handleSelect }) => {
  const [isOpen, setIsOpen] = useState();

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="select">
      <p className="select-label">{label}:</p>
      <div className="select-button" onClick={toggleIsOpen}>
        <p className="select-value">{value}</p>
        <Arrow />
        {isOpen && (
          <ul>
            {list.map(el => {
              const isChosen = value === el;
              return (
                <li
                  key={el}
                  className={isChosen ? "select-chosen" : ""}
                  onClick={() => handleSelect(el)}
                >
                  {el}
                  <Checked />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Select;
