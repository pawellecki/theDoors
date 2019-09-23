import React from "react";

const Radio = ({ list, name, handleChange }) => {
  return (
    <div className="radio">
      {console.log(list)}
      {list.map(({ id, label, checked }) => {
        return (
          <label key={id} for={id}>
            <p>{label}</p>
            <input
              id={id}
              label={label}
              checked={checked}
              name={name}
              handleChange={handleChange}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Radio;
