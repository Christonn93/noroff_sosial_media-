import React from "react";

import { Box, Button } from "@mui/material";

const Home = () => {
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
