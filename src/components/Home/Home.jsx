import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import logo from "./logoo.png"
import MultiStepProgressBar from './MultiStepProgressBar';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import "./Home.css"
import { useState } from 'react';
function Home() {

    let [currentStep, setCurrentstep] = useState(1)
   const nextButton = () => {
    
    setCurrentstep((prev)=>{
        return prev + 1;
    })
  }

  const [tracker, setTracker] = useState("1px solid black");
   const [trackers, setTrackerr2] = useState("1px solid black"); 
  const handleClick = ()=>{

    if (tracker == "1px solid black"){
        if (trackers == "3px solid #624add"){
            setTrackerr2("1px solid black");
        }
         setTracker("3px solid #624add");
    }else {
        setTracker("1px solid black");
    }
    
 }
 const handleClick2 = ()=>{
       if (trackers == "1px solid black") {
        if (tracker == "3px solid #624add"){
            setTracker("1px solid black");
        }
         setTrackerr2("3px solid #624add");
       } else {
         setTrackerr2("1px solid black");
       }
 }
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
          {currentStep == 1 ? (
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Welcome! First things first...
              </Typography>
              <Typography variant="body3" color="text.secondary">
                You can always change them later
              </Typography>

              <TextField
                id="standard-number"
                style={{ width: "70%", marginTop: "10%" }}
                label="Full Name"
                type="text"
                placeholder="Steve Jobs"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
              />
              <br />

              <TextField
                style={{ marginTop: "30px", width: "70%" }}
                id="standard-number"
                label="Display Name"
                type="text"
                placeholder="Steve"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
              />
            </CardContent>
          ) : currentStep == 2 ? (
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Let's set up a home for all your work
              </Typography>
              <Typography variant="body3" color="text.secondary">
                You can always create another workspace later
              </Typography>

              <TextField
                style={{ width: "83%", marginTop: "10%" }}
                id="standard-number"
                label="Workspace Name"
                type="text"
                placeholder="Eden"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
              />
              <br />

              <TextField
                style={{
                  padding: "0px",
                  marginTop: "30px",
                  width: "40%",
                  height: "30%",
                }}
                id="outlined-read-only-input"
                label="Workspace URL (optional)"
                defaultValue="www.eden.com/"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                style={{ marginLeft: "3%", marginTop: "50px", width: "40%" }}
                id="standard-number"
                type="text"
                placeholder="Example"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
              />
            </CardContent>
          ) : currentStep == 3 ? (
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                How are you planning to use Eden?
              </Typography>
              <Typography variant="body3" color="text.secondary">
                We'll streamline your setup experience accordingly.
              </Typography>
              <Box
                cellHeight={"auto"}
                style={{
                  marginTop: "10%",
                  display: "flex",
                  margin: "auto",
                  justifyContent: "center",
                }}
                spacing={0}
              >
                <Card
                  //  onMouseEnter={
                  // style={{border:"3px solid red"}}
                  //  }
                  onClick={handleClick}
                  style={{
                    border: `${tracker}`,
                    margin: "5%",
                    width: "35%",
                    textAlign: "left",
                    justifyContent: "left",
                  }}
                >
                  <CardActionArea style={{ justifyContent: "left" }}>
                    <PersonIcon
                      style={{ paddingLeft: "10%", paddingTop: "6%" }}
                    />

                    <CardContent>
                      <Typography
                        gutterBottom
                        style={{ fontSize: "20px" }}
                        variant="bold"
                        component="h1"
                        noWrap
                      >
                        For Myself
                      </Typography>
                      <Typography variant="body">
                        Write Better, Think more clearly, Stay Organized.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card
                  onClick={handleClick2}
                  style={{
                    border: `${trackers}`,
                    margin: "5%",
                    width: "35%",
                    textAlign: "left",
                    justifyContent: "left",
                  }}
                >
                  <CardActionArea style={{ justifyContent: "left" }}>
                    <GroupsIcon
                      style={{ paddingLeft: "10%", paddingTop: "6%" }}
                    />

                    <CardContent>
                      <Typography
                        gutterBottom
                        style={{ fontSize: "16px" }}
                        variant="bold"
                        component="h1"
                        noWrap
                      >
                        With My Team
                      </Typography>
                      <Typography variant="body">
                        Wikis, docs, tasks & projects, all in one place.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            </CardContent>
          ) : (
            <CardContent>
              <Box
                component="div"
                style={{
                  width: "60px",
                  backgroundColor: "#624add",
                  height: "60px",

                  borderRadius: "180px",
                  margin: "auto",
                  marginTop: "30px",
                }}
              >
                <CheckIcon style={{ color: "white", marginTop: "25%" }} />
              </Box>

              <Typography
                style={{
                  fontWeight: "bold",
                  marginTop: "40px",
                  fontSize: "30px",
                }}
              >
                Congratulations, Eren!
              </Typography>
              <Typography color="text.secondary" style={{ marginTop: "10px" }}>
                You have completed onboarding, you can start using the Eden!
              </Typography>
            </CardContent>
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

export default Home