import React from "react";

import { Avatar, Box, Button, Card, IconButton, Typography } from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

const comments = true;

const FeedCard = () => {
  return (
    <Box>
    <Card
     sx={{
      display: "flex",
      flexDirection: "column",
      gap: 2,
      p: 1,
     }}
    >
     <Box display={"flex"} gap={2} justifyContent={"space-between"}>
      <Box display={"flex"} gap={2} alignItems={"center"}>
       <Avatar />
       <Link to="./Profile?username=">
        <Typography variant="body2">User name</Typography>
       </Link>
      </Box>
      <IconButton>
       <EditIcon />
      </IconButton>
     </Box>

     <Box
      sx={{
       p: 1,
       borderRadius: "5px",
       boxShadow: "inset 0px 0px 5px 0px rgba(0,0,0,0.75)",
      }}
     >
      <Typography variant="body1">Here will the post content from the users</Typography>
     </Box>
     <Box>
      <IconButton>
       <FavoriteBorderIcon />
      </IconButton>
      <Button color="secondary" variant="text">Comment</Button>
     </Box>
    </Card>

    {!comments ? (
     <></>
    ) : (
     <>
      <Card
       sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 1,
        marginTop: 2,
        marginLeft: 1,
        marginRight: 1,
       }}
      >
       <Box display={"flex"} gap={2} justifyContent={"space-between"}>
        <Box display={"flex"} gap={2} alignItems={"center"}>
         <Avatar />
         <Link to="./Profile?username=">
          <Typography variant="body2">User name</Typography>
         </Link>
        </Box>
        <IconButton>
         <EditIcon />
        </IconButton>
       </Box>

       <Box
        sx={{
         p: 1,
         borderRadius: "5px",
         boxShadow: "inset 0px 0px 5px 0px rgba(0,0,0,0.75)",
        }}
       >
        <Typography variant="body1">Here will the post content from the users</Typography>
       </Box>
       <Box>
        <IconButton>
         <FavoriteBorderIcon />
        </IconButton>
       </Box>
      </Card>
     </>
    )}
   </Box>
  )
}

export default FeedCard