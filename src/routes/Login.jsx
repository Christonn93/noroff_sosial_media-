import React from 'react'

import { Box, Button, Paper, TextField } from '@mui/material'

import Logo from "../components/appbar/logo.png"

const Login = () => {
  return (
    <Box
    sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
    }}
    >
        <Paper>
            <Box p={2} display={"flex"} flexDirection={"column"} gap={2}>
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
            <Box display={"flex"} gap={2}>
                <Button color='primary' variant='contained'>Log in</Button>
                <Button color='secondary' variant='outlined'>Create user</Button>
            </Box>

            </Box>
        </Paper>
        <img src={Logo} alt='Company logo' />
    </Box>
  )
}

export default Login