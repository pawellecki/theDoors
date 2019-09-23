import React from "react";

const Input = ({
  placeholder,
  value,
  path,
  isSmall,
  isCount,
  label,
  labelWidth,
  secondLabel,
  onChange
}) => (
  <div
    className={`input 
    ${isSmall ? "isSmall" : ''} 
    ${isCount ? "isCount" : ''}
    ${label ? "isLabel" : ''} 
    ${secondLabel ? "isSecondLabel" : ''}
    `}
  >
    {label && <p style={{ width: labelWidth }}>{label}</p>}
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={event => onChange(event.target.value, path)}
    />
    {secondLabel && <p>{secondLabel}</p>}
    {isCount && (
      <div className="plus-minus">
        <div onClick={() => onChange(value, path, 'plus')}>+</div>
        <div className={value === 0 ? "isDisabled" : ''} onClick={() => onChange(value, path, 'minus')}>-</div>
      </div>
    )}
  </div>
);

export default Input;
