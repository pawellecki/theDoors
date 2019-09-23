import React from "react";

const Radio = ({ list, name, path, checked, isInline, onChange }) => {
  return (
    <div
      className={`radio
      ${isInline && "isInline"}`}
    >
      {list.map(({ id, color, label }) => {
        const isChecked = checked === id;

        return (
          <label key={id} htmlFor={id}>
            {/* {console.log("DDDDD,", checked)} */}
            {color && <div className="color" style={{ background: color }} />}
            <span className={`${isChecked ? "isChecked" : ""}`} />
            <p>{label}</p>
            <input
              key={id}
              type="radio"
              id={id}
              label={label}
              checked={isChecked}
              name={name}
              onChange={() => onChange(id, path)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Radio;
