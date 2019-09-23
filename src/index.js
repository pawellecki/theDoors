import React, { useState } from "react";
import ReactDOM from "react-dom";
import { LanguageContext } from "./context";
import { Header, Notification } from "./components";
import { Content, Login } from "./pages";
import { languageConfig } from "./config";
import "./styles/app.css";
import "./styles/button.css";
import "./styles/componentLabel.css";
import "./styles/checkbox.css";
import "./styles/dimension.css";
import "./styles/door.css";
import "./styles/form.css";
import "./styles/header.css";
import "./styles/input.css";
import "./styles/notification.css";
import "./styles/radio.css";
import "./styles/reset.css";
import "./styles/select.css";
import "./styles/steps.css";

const App = () => {
  const [chosenLanguage, setChosenLanguage] = useState(languageConfig.english);
  const [isLogged, setIsLogged] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const handleSelectLanguage = value => {
    setChosenLanguage(languageConfig[value]);
  };

  const handleLoginStatus = status => {
    console.log("aa", status);
    if (status === 200) {
      setIsLogged(true);
    }
    if (status !== 200) {
      setIsNotification(true);
    }
  };

  return (
    <LanguageContext.Provider value={chosenLanguage}>
      <div className="app">
        <Header handleSelectLanguage={handleSelectLanguage} />
        {isLogged ? (
          <Content />
        ) : (
          <Login handleLoginStatus={handleLoginStatus} />
        )}
        {isNotification && (
          <Notification
            message={chosenLanguage.login.error_message}
            handleHide={setIsNotification}
          />
        )}
      </div>
    </LanguageContext.Provider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
