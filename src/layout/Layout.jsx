// Importing React
import React from "react";
import { Outlet } from "react-router-dom";

// Importing MUI
import { Box, Container } from "@mui/material";

const Layout = () => {
 return (
  <>
   <Box
    sx={{
     display: "grid",
     gridTemplateRows: "auto 1fr auto",
     height: "100vh",
    }}
   >
    <Box
     sx={{
      display: "flex",
      p: 2,
     }}
    >
     <h1>Let's Connect</h1>
    </Box>
    <Container maxWidth="lg">
     <Outlet />
    </Container>
   </Box>
  </>
 );
};

export default Layout;
