// Importing React
import React from "react";
import { Routes, Route } from "react-router-dom";

// Importing MUI
import { CssBaseline, ThemeProvider } from "@mui/material";

// Importing base layout
import Layout from "./layout/Layout";

// Importing Theme
import { ColorModeContext, useMode } from "../src/style/Theme";

// Importing pages
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Register from "./components/forms/register/Register";

const App = () => {
 const [theme, colorMode] = useMode();

 return (
  <>
   <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
     <CssBaseline />
     <Routes>
      <Route element={<Layout />}>
       <Route path="/" element={<Home />} />
       <Route path="/register" element={<Register />} />
       <Route path="*" element={<NotFound />} />
      </Route>
     </Routes>
    </ThemeProvider>
   </ColorModeContext.Provider>
  </>
 );
};

export default App;
