import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import { Button, CardActionArea } from "@mui/material";

import logo from "./logoo.png";
import {MultiStepProgressBar} from "../MultiProgressBar/MultiStepProgressBar";

import "./Home.css";
import { useState } from "react";
import Step1 from "../Step1/Step1";
import Step2 from "../Step2/Step2";
import Step3 from "../Step3/Step3";
import Step4 from "../Step4/Step4";
function Home() {
  let [currentStep, setCurrentstep] = useState(1);
  const nextButton = () => {
    setCurrentstep((prev) => {
      return prev + 1;
    });
  };

  let [fullName, setFullName] = useState("")
  const [tracker, setTracker] = useState("1px solid black");
  const [trackers, setTrackerr2] = useState("1px solid black");
  const handleClick = () => {
    if (tracker === "1px solid black") {
      if (trackers === "3px solid #624add") {
        setTrackerr2("1px solid black");
      }
      setTracker("3px solid #624add");
    } else {
      setTracker("1px solid black");
    }
  };
  const handleClick2 = () => {
    if (trackers === "1px solid black") {
      if (tracker === "3px solid #624add") {
        setTracker("1px solid black");
      }
      setTrackerr2("3px solid #624add");
    } else {
      setTrackerr2("1px solid black");
    }
  };
  return (
    <div className="mainbox">
      <Card
        sx={{ maxWidth: 500, height: 800, margin: "auto" }}
        className="mainbox"
      >
        <CardActionArea className="mainbox">
          <CardMedia
            component="img"
            style={{ width: "290px", margin: "auto" }}
            image={logo}
            alt="green iguana"
          />
          <CardContent
            style={{ marginLeft: "100px", marginTop: "30px", width: "300px" }}
          >
            <MultiStepProgressBar currentStep={currentStep} />
          </CardContent>
          <br />

          <br />
          {currentStep === 1 ? (
            <Step1 fullName={fullName} setFullName={setFullName} />
          ) : currentStep === 2 ? (
            <Step2 />
          ) : currentStep === 3 ? (
            <Step3
              handleClick={handleClick}
              handleClick2={handleClick2}
              tracker={tracker}
              trackers={trackers}
            />
          ) : (
            <Step4 fullName={fullName} />
          )}
        </CardActionArea>
        {currentStep < 4 ? (
          <Button
            variant="contained"
            style={{
              backgroundColor: "#624add",
              width: "60%",
              marginTop: "10px",
            }}
            onClick={nextButton}
          >
            {" "}
            Create WorkSpace
          </Button>
        ) : (
          <Button
            variant="contained"
            style={{
              backgroundColor: "#624add",
              width: "60%",
              marginTop: "10px",
            }}
            onClick={nextButton}
          >
            {" "}
            Launch Workspace
          </Button>
        )}
      </Card>
    </div>
  );
}

export default Home;
