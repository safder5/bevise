// theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light", // or 'dark'
    primary: {
      main: "#4A90E2",
    },
    secondary: {
      main: "#FF4081",
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    h4: {
      fontWeight: 600,
    },
  },
});

export default theme;
