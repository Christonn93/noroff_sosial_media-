// Importing React
import React from "react";
import { Routes, Route } from "react-router-dom";

// Importing MUI
import { CssBaseline, ThemeProvider } from "@mui/material";

// Importing base layout
import Layout from "./layout/Layout";

// Importing pages
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Profile from "./routes/Profile";


// Importing Theme
import { ColorModeContext, useMode } from "../src/style/Theme";
import Login from "./routes/Login";
import RequireAuth from "./api/auth/RequireAuth";

const App = () => {
 const [theme, colorMode] = useMode();

 return (
  <>
   <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
     <CssBaseline />
     <Routes>
      <Route element={<Layout />}>
       <Route index element={<Login />} />
       <Route path="*" element={<NotFound />} />

       <Route element={<RequireAuth />}>
        <Route path="/home" element={<Home />} />
        <Route path="/profile/:name" element={<Profile />} />
       </Route>
      </Route>
     </Routes>
    </ThemeProvider>
   </ColorModeContext.Provider>
  </>
 );
};

export default App;
