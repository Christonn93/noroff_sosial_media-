import { Box, Button, Card, Container, TextField } from "@mui/material";
import React from "react";

import Image from "../../../assets/how-to-build-an-online-community-removebg-preview.png";

const Register = () => {
 return (
  <>
   <Box
    sx={{
     display: "flex",
     p: 2,
     gap: 2,
     justifyContent: "space-evenly",
    }}
   >
    <Card
     sx={{
      display: "flex",
      flexDirection: "column",
      gap: 2,
      p: 2,
     }}
    >
     <TextField id="standard-multiline-flexible" label="Username" variant="outlined" />
     <TextField id="standard-multiline-flexible" label="Password" variant="outlined" />
     <Button variant="contained" color="info">
      Log in
     </Button>
    </Card>

    <img src={Image} />
   </Box>
  </>
 );
};

export default Register;
