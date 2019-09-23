import React from "react";
import { LanguageContext } from "../context";
import { Select } from "../components";
import { languageConfig } from "../config";
import logoIcon from "../../../public/assets/logo.png";

const Header = ({ handleSelectLanguage }) => (
  <LanguageContext.Consumer>
    {language => (
      <div className="header">
        <img src={logoIcon} alt="logo" />
        <Select
          defaultValue="english"
          list={Object.keys(languageConfig)}
          label={language.header.select_language}
          handleSelect={handleSelectLanguage}
        />
      </div>
    )}
  </LanguageContext.Consumer>
);

export default Header;
