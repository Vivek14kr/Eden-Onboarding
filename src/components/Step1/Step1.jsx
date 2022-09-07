import React from 'react'

import TextField from "@mui/material/TextField";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

function Step1({errorCheck, setErrorCheck, fullName, setFullName, displayName, setDisplayName}) {




    
  return (
    <CardContent>
      <Typography gutterBottom variant="h4" component="div">
        Welcome! First things first...
      </Typography>
      <Typography variant="body3" color="text.secondary">
        You can always change them later
      </Typography>

      <TextField
        id="standard-number"
        name="FullName"
        error={errorCheck && fullName === ""}
        style={{ width: "70%", marginTop: "10%" }}
        onChange={(e) => {
          setFullName(e.target.value);
        }}
        label="Full Name"
        type="text"
        placeholder="Steve Jobs"
        InputLabelProps={{
          shrink: true,
        }}
        variant="standard"
      />
      {errorCheck && fullName.length === 0 && (
        <div style={{ color: "red" }} className="red-color">
          Please enter Full name
        </div>
      )}
      <br />

      <TextField
        style={{ marginTop: "30px", width: "70%" }}
        id="standard-number"
        name="DisplayName"
        error={errorCheck && displayName === ""}
        onChange={(e) => {
          setDisplayName(e.target.value);
        }}
        label="Display Name"
        type="text"
        placeholder="Steve"
        InputLabelProps={{
          shrink: true,
        }}
        variant="standard"
      />
      {errorCheck && displayName.length === 0 && (
        <div style={{ color: "red" }} className="red-color">
          Please enter Display name
        </div>
      )}
    </CardContent>
  );
}

export default Step1