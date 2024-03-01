import React from "react";
import { Box, Container } from "@mui/system";

// Importing components
import HomeImage from "../components/images/HomeImage";
import Login from "../components/forms/login/Login";

const Home = () => {
 return (
  <Container>
   <Box
    sx={{
     display: "flex",
     alignContent: "center",
     justifyContent: "center",
     gap: 2,
     justifyContent: "space-evenly",
    }}
   >
    <Login />
    <HomeImage />
   </Box>
  </Container>
 );
};

export default Home;
