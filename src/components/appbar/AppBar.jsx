import React, { useState } from "react";

import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import Logo from "./logo.png";

import "./AppBar.css";
import { Link } from "react-router-dom";

const PageBar = () => {
 const [anchorElNav, setAnchorElNav] = useState(null);
 const [anchorElUser, setAnchorElUser] = useState(null);

 const handleOpenNavMenu = (event) => {
  setAnchorElNav(event.currentTarget);
 };
 const handleOpenUserMenu = (event) => {
  setAnchorElUser(event.currentTarget);
 };

 const handleCloseNavMenu = () => {
  setAnchorElNav(null);
 };

 const handleCloseUserMenu = () => {
  setAnchorElUser(null);
 };

 const pages = ["Home", "Following"];
 const settings = ["Profile", "Logout"];

 <Box
  sx={{
   width: "125px",
   marginRight: 4,
  }}
 >
  <img src={Logo} alt="Site logo" className="logo" />
 </Box>;

 return (
  <AppBar position="static">
   <Container maxWidth="xl">
    <Toolbar disableGutters sx={{ p: 1 }}>

     {/* Mobile mode */}
     <Box
      sx={{
       display: { xs: "none", md: "flex" },
       width: "125px",
       mr: 1,
      }}
     >
      <img src={Logo} alt="Site logo" className="logo" />
     </Box>

     <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
       <MenuIcon />
      </IconButton>

      <Menu
       id="menu-appbar"
       anchorEl={anchorElNav}
       anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
       }}
       keepMounted
       transformOrigin={{
        vertical: "top",
        horizontal: "left",
       }}
       open={Boolean(anchorElNav)}
       onClose={handleCloseNavMenu}
       sx={{
        display: { xs: "block", md: "none" },
       }}
      >
       {pages.map((page) => (
        <MenuItem key={page} onClick={handleCloseNavMenu}>
         <Typography textAlign="center">
         <Link to={page}>{page}</Link></Typography>
        </MenuItem>
       ))}
      </Menu>

     </Box>

     {/* Desktop mode */}
     <Box
      sx={{
       display: { xs: "flex", md: "none" },
       width: "125px",
       mr: 1,
      }}
     >
      <img src={Logo} alt="Site logo" className="logo" />
     </Box>
     
     <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {pages.map((page) => (
       <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
        {page}
       </Button>
      ))}
     </Box>

     <Box sx={{ flexGrow: 1 }}>
      <Tooltip title="Open settings">
       <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
       </IconButton>
      </Tooltip>
      <Menu
       sx={{ mt: "45px" }}
       id="menu-appbar"
       anchorEl={anchorElUser}
       anchorOrigin={{
        vertical: "top",
        horizontal: "right",
       }}
       keepMounted
       transformOrigin={{
        vertical: "top",
        horizontal: "right",
       }}
       open={Boolean(anchorElUser)}
       onClose={handleCloseUserMenu}
      >
       {settings.map((setting) => (
        <MenuItem key={setting} onClick={handleCloseUserMenu}>
        <Typography textAlign="center">
         <Link to={setting}>{setting}</Link></Typography>
        </MenuItem>
       ))}
      </Menu>

     </Box>

    </Toolbar>
   </Container>
  </AppBar>
 );
};

export default PageBar;
