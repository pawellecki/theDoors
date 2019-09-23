import React, { useState } from "react";
import { LanguageContext } from "../context";
import { Steps, Door } from "../components";

const Content = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleSetCurrentStep = value => {
    if (value === "next") {
      return setCurrentStep(currentStep + 1);
    }

    setCurrentStep(currentStep - 1);
  };

  return (
    <LanguageContext.Consumer>
      {language => (
        <div className="content">
          <Steps
            activeStep={currentStep}
            handleSetCurrentStep={currentStep}
            config={language.content.steps}
          />
          <Door
            currentStep={currentStep}
            handleSetCurrentStep={handleSetCurrentStep}
          />
        </div>
      )}
    </LanguageContext.Consumer>
  );
};

export default Content;
