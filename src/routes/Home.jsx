import React from "react";

import { Box, Button } from "@mui/material";
import useApi from "../hooks/useApi";
import { updateHead } from "../js/updateHeader";

const Home = () => {
 updateHead("Home");
 const data = useApi("/posts", "get");

 console.log(data);

 return (
  <>
   <Box
    sx={{
     display: "flex",
     gap: 2,
    }}
   >
    <Button color="primary" variant="contained">
     Primary Button
    </Button>
    <Button color="secondary" variant="contained">
     Secondary Button
    </Button>
   </Box>
  </>
 );
};

export default Home;
