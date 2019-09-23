import React, { useState, useEffect } from "react";
import { LoginForm } from "../components";

const Login = ({ handleLoginStatus }) => {
  const defaultFormState = {
    email: "login@applover.pl",
    password: "password123"
  };
  const [formState, setFormState] = useState(defaultFormState);
  const [isRemember, setIsRemember] = useState(false);

  const handleChange = (value, key) => {
    if (value === "on") {
      return setIsRemember(!isRemember);
    }
    setFormState({ ...formState, [key]: value });
  };

  const handleSubmit = () => {
    const data = new FormData();
    data.append("email", formState.email);
    data.append("password", formState.password);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "//bench-api.applover.pl/api/v1/login", true);

    xhr.onloadend = function(e) {
      return handleLoginStatus(e.target.status);
    };
    xhr.send(data);
  };

  return (
    <LoginForm
      formState={formState}
      isRemember={isRemember}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default Login;
