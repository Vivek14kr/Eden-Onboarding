import React from 'react'

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

import TextField from "@mui/material/TextField";


function Step2() {
  return (
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
  );
}

export default Step2