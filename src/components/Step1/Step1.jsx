import React from 'react'

import TextField from "@mui/material/TextField";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

function Step1({fullName, setFullName}) {




    
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
        name="DisplayName"
        onChange={(e) => {
          setFullName(e.target.value);
        }}
        label="Display Name"
        type="text"
        placeholder="Steve"
        InputLabelProps={{
          shrink: true,
        }}
        variant="standard"
      />
    </CardContent>
  );
}

export default Step1