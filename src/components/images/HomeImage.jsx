import React from "react";

import Image from "../../assets/team-social-networks-working-vector-illustration/670-removebg-preview.png";
import { Box } from "@mui/material";

const HomeImage = () => {
 return (
  <>
   <Box>
    <img src={Image} loading="lazy" />
   </Box>
  </>
 );
};

export default HomeImage;
