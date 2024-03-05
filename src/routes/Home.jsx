import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";

const Home = () => {
 return <>
 <Box
 sx={{
    display: "flex",
    gap: 2
 }}
 >
    <Button color="primary" variant="contained">Primary Button</Button>
    <Button color="secondary" variant="contained">Secondary Button</Button>
 </Box>

<Box mt={2} p={1}>
    <Paper>
        <Typography variant="h1">This is a h1 heading</Typography>
    </Paper>
</Box>

 </>;
};

export default Home;
