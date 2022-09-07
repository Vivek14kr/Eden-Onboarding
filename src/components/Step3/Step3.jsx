import React from 'react'

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import {  CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";

import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";

function Step3({handleClick, handleClick2, tracker, trackers}) {
  return (
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
            <PersonIcon style={{ paddingLeft: "10%", paddingTop: "6%" }} />

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
            <GroupsIcon style={{ paddingLeft: "10%", paddingTop: "6%" }} />

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
  );
}

export default Step3