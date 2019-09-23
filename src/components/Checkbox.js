import React from "react";
import { ReactComponent as Checked } from "../../../public/assets/checked.svg";

const Checkbox = ({ checked, label, onChange }) => (
  <div className="checkbox">
    <label>
      <p>{label}</p>
      <input
        type="checkbox"
        checked={checked}
        onChange={event => onChange(event.target.value)}
      />
      <span />
      <Checked />
    </label>
  </div>
);

export default Checkbox;
