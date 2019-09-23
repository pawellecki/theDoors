import React from "react";
import { LanguageContext } from "../context";
import { Input, Checkbox, Button } from "../components";

const LoginForm = ({ formState, isRemember, handleChange, handleSubmit }) => (
  <LanguageContext.Consumer>
    {language => (
      <div className="form">
        <h2>{language.log_in.title}</h2>
        <form>
          <Input
            placeholder={language.log_in.email}
            value={formState.email}
            path="email"
            onChange={handleChange}
          />
          <Input
            placeholder={language.log_in.password}
            value={formState.password}
            path="password"
            onChange={handleChange}
          />
          {/* <Checkbox
            checked={isRemember}
            label={language.log_in.keep_logged}
            path="remember"
            onChange={handleChange}
          /> */}
          <Button label={language.log_in.button} onClick={handleSubmit} />
        </form>
      </div>
    )}
  </LanguageContext.Consumer>
);

export default LoginForm;
