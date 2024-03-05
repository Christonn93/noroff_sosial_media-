// Importing React
import { createContext, useState, useMemo } from "react";

// Importing MUI
import { createTheme } from "@mui/material/styles";

/**
 * Looked at a tutorial to create this theme.
 *
 * @YoutubeVideo https://www.youtube.com/watch?v=wYpCWwD1oz0&t=2223s
 * @creator the base layout is created EdRoh. Adjustments have been done to fit my need
 */

// color design tokens export
export const tokens = (mode) => ({
 ...(mode === "dark"
  ? {
     black: {
      100: "#ccd0d6",
      200: "#9aa2ad",
      300: "#677383",
      400: "#35455a",
      500: "#021631",
      600: "#021227",
      700: "#010d1d",
      800: "#010914",
      900: "#00040a",
     },
     blue: {
      100: "#cde5f2",
      200: "#9acce5",
      300: "#68b2d9",
      400: "#3599cc",
      500: "#037fbf",
      600: "#026699",
      700: "#024c73",
      800: "#01334c",
      900: "#011926",
     },
     red: {
      100: "#f5d3cf",
      200: "#eba79f",
      300: "#e07c6e",
      400: "#d6503e",
      500: "#cc240e",
      600: "#a31d0b",
      700: "#7a1608",
      800: "#520e06",
      900: "#290703",
     },
     lightRed: {
      100: "#faded0",
      200: "#f5bda2",
      300: "#f19b73",
      400: "#ec7a45",
      500: "#e75916",
      600: "#b94712",
      700: "#8b350d",
      800: "#5c2409",
      900: "#2e1204",
     },
     green: {
      100: "#e1ebd5",
      200: "#c4d8aa",
      300: "#a6c480",
      400: "#89b155",
      500: "#6b9d2b",
      600: "#567e22",
      700: "#405e1a",
      800: "#2b3f11",
      900: "#151f09",
     },
     greyDark: {
      100: "#dfe0e2",
      200: "#bfc2c5",
      300: "#a0a3a9",
      400: "#80858c",
      500: "#60666f",
      600: "#4d5259",
      700: "#3a3d43",
      800: "#26292c",
      900: "#131416",
     },
     grey: {
      100: "#f7efea",
      200: "#efdfd5",
      300: "#e7d0c0",
      400: "#dfc0ab",
      500: "#d7b096",
      600: "#ac8d78",
      700: "#816a5a",
      800: "#56463c",
      900: "#2b231e",
     },
     yellow: {
      100: "#f8efe3",
      200: "#f1e0c8",
      300: "#ead0ac",
      400: "#e3c191",
      500: "#dcb175",
      600: "#b08e5e",
      700: "#846a46",
      800: "#58472f",
      900: "#2c2317",
     },
     lightOrange: {
      100: "#f8e6df",
      200: "#f1cebf",
      300: "#ebb59f",
      400: "#e49d7f",
      500: "#dd845f",
      600: "#b16a4c",
      700: "#854f39",
      800: "#583526",
      900: "#2c1a13",
     },
     darkOrange: {
      100: "#fbe6d1",
      200: "#f7cda3",
      300: "#f2b575",
      400: "#ee9c47",
      500: "#ea8319",
      600: "#bb6914",
      700: "#8c4f0f",
      800: "#5e340a",
      900: "#2f1a05",
     },
    }
  : {
     black: {
      100: "#00040a",
      200: "#010914",
      300: "#010d1d",
      400: "#021227",
      500: "#021631",
      600: "#35455a",
      700: "#677383",
      800: "#9aa2ad",
      900: "#ccd0d6",
     },
     blue: {
      100: "#011926",
      200: "#01334c",
      300: "#024c73",
      400: "#026699",
      500: "#037fbf",
      600: "#3599cc",
      700: "#68b2d9",
      800: "#9acce5",
      900: "#cde5f2",
     },
     red: {
      100: "#290703",
      200: "#520e06",
      300: "#7a1608",
      400: "#a31d0b",
      500: "#cc240e",
      600: "#d6503e",
      700: "#e07c6e",
      800: "#eba79f",
      900: "#f5d3cf",
     },
     lightRed: {
      100: "#2e1204",
      200: "#5c2409",
      300: "#8b350d",
      400: "#b94712",
      500: "#e75916",
      600: "#ec7a45",
      700: "#f19b73",
      800: "#f5bda2",
      900: "#faded0",
     },
     green: {
      100: "#151f09",
      200: "#2b3f11",
      300: "#405e1a",
      400: "#567e22",
      500: "#6b9d2b",
      600: "#89b155",
      700: "#a6c480",
      800: "#c4d8aa",
      900: "#e1ebd5",
     },
     greyDark: {
      100: "#131416",
      200: "#26292c",
      300: "#3a3d43",
      400: "#4d5259",
      500: "#60666f",
      600: "#80858c",
      700: "#a0a3a9",
      800: "#bfc2c5",
      900: "#dfe0e2",
     },
     grey: {
      100: "#2b231e",
      200: "#56463c",
      300: "#816a5a",
      400: "#ac8d78",
      500: "#d7b096",
      600: "#dfc0ab",
      700: "#e7d0c0",
      800: "#efdfd5",
      900: "#f7efea",
     },
     yellow: {
      100: "#2c2317",
      200: "#58472f",
      300: "#846a46",
      400: "#b08e5e",
      500: "#dcb175",
      600: "#e3c191",
      700: "#ead0ac",
      800: "#f1e0c8",
      900: "#f8efe3",
     },
     lightOrange: {
      100: "#2c1a13",
      200: "#583526",
      300: "#854f39",
      400: "#b16a4c",
      500: "#dd845f",
      600: "#e49d7f",
      700: "#ebb59f",
      800: "#f1cebf",
      900: "#f8e6df",
     },
     darkOrange: {
      100: "#2f1a05",
      200: "#5e340a",
      300: "#8c4f0f",
      400: "#bb6914",
      500: "#ea8319",
      600: "#ee9c47",
      700: "#f2b575",
      800: "#f7cda3",
      900: "#fbe6d1",
     },
    }),
});

// mui theme settings
export const themeSettings = (mode) => {
 const colors = tokens(mode);
 return {
  palette: {
   mode: mode,
   ...(mode === "dark"
    ? {
       // palette values for dark mode
       primary: {
        main: colors.blue[500],
       },
       secondary: {
        main: colors.green[500],
       },
       neutral: {
        dark: colors.grey[700],
        main: colors.grey[500],
        light: colors.grey[100],
       },
       background: {
        default: colors.greyDark[600],
       },
      }
    : {
       // palette values for light mode
       primary: {
        main: colors.blue[300],
       },
       secondary: {
        main: colors.lightOrange[500],
       },
       neutral: {
        dark: colors.grey[700],
        main: colors.grey[500],
        light: colors.grey[100],
       },
       background: {
        default: colors.grey[900],
       },
      }),
  },
  typography: {
   fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
   fontSize: 12,
   h1: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    fontSize: 40,
   },
   h2: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    fontSize: 32,
   },
   h3: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    fontSize: 24,
   },
   h4: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    fontSize: 20,
   },
   h5: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    fontSize: 16,
   },
   h6: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    fontSize: 14,
   },
  },
 };
};

// context for color mode
export const ColorModeContext = createContext({
 toggleColorMode: () => {},
});

export const useMode = () => {
 const [mode, setMode] = useState("light");

 const colorMode = useMemo(
  () => ({
   toggleColorMode: () => setMode((prev) => (prev === "light" ? "dark" : "light")),
  }),
  []
 );

 const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
 return [theme, colorMode];
};
