import React from 'react'

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";

import CheckIcon from "@mui/icons-material/Check";

function Step4({fullName}) {
  return (
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
        Congratulations, {fullName}!
      </Typography>
      <Typography color="text.secondary" style={{ marginTop: "10px" }}>
        You have completed onboarding, you can start using the Eden!
      </Typography>
    </CardContent>
  );
}

export default Step4