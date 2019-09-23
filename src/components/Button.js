import React from "react";

const Button = ({ label, value, onClick, type, color, isWhite, isLoading }) => (
  <div
    className={`button 
    ${type ? type : ""} 
    `}
    onClick={() => onClick(value || label)}
    style={{
      color: isWhite ? color || "#1de278" : "#fff",
      background: isWhite ? "#fff" : color || "#1de278",
      border: `2px solid ${color ? color : "#1de278"}`
    }}
  >
    <p>{label}</p>
  </div>
);

export default Button;
