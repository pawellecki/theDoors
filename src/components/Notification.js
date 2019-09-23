import React from "react";
import { ReactComponent as Close } from "../../../public/assets/close.svg";

const Notification = ({ message, handleHide }) => (
  <div className="notification" onClick={() => handleHide(false)}>
    <p>{message}</p>
    <Close />
    {/* <img src={closeIcon} alt="close" /> */}
  </div>
);

export default Notification;
