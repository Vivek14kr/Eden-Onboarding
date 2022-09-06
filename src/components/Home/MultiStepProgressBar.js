import React from "react";
import "./MultiStepProgressBar.css";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const MultiStepProgressBar = (props) => {
  var stepPercentage = 0;

  if (props.currentStep === 1) {
    stepPercentage = 0;
  } else if (props.currentStep === 2) {
    stepPercentage = 35;
  } else if (props.currentStep === 3) {
    stepPercentage = 70;
  } else {
    stepPercentage = 100;
  }

  return (
    <ProgressBar
      width="90%"
      
      unfilledBackground="white"
      percent={stepPercentage}
      filledBackground="linear-gradient(to right, #624add, #624add)"
    >
      <Step>
        {({ accomplished, index }) => (
          <div
            style={{
              height: "40px",
              width: "40px",
              border: "0.1px solid black",
              color: `${accomplished ? "white" : "black"}`,
            }}
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            style={{
              height: "40px",
              width: "40px",
              border: "0.1px solid black",
              color: `${accomplished ? "white" : "black"}`,
            }}
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            style={{
              height: "40px",
              lineHeight:"2px",
              width: "40px",
              border: "0.1px solid black",
              color: `${accomplished ? "white" : "black"}`,
            }}
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            style={{
              height: "40px",
              width: "40px",
              border: "0.1px solid black",
              color: `${accomplished ? "white" : "black"}`,
            }}
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {index + 1}
          </div>
        )}
      </Step>
    </ProgressBar>
  );
};

export default MultiStepProgressBar;
