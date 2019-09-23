import React from "react";
import { languageConfig } from "../config";

const LanguageContext = React.createContext(languageConfig.english);
export default LanguageContext;
