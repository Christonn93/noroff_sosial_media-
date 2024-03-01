import { Box, Button, Card, Container, TextField } from "@mui/material";

import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
 return (
  <Container>
   <h1>Log in to your account</h1>
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
    <Box>
     <p>
      No account yet? <Link to={"/register"}>register here!</Link>
     </p>
    </Box>
   </Card>
  </Container>
 );
};

export default Login;
