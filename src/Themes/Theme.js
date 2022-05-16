import { createTheme } from "@mui/material/styles";

const Theme = (ourMode) => {
  return createTheme({
    palette: {
      mode: ourMode,
      primary: {
        main: "#43a047",
      },
      secondary: {
        main: "#f50000",
      },
      icon: { border: "2px solid yellow", borderRadius: "40" },
      text: {
        main: "white",
      },
      list: {
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        flexGrow: 1,
        flexDirection: "column",
        display: { xs: "none", md: "flex" },
      },
      box: {
        marginLeft: "10px",
        justifyContent: "center",
        display: { xs: "flex", md: "flex" },
      },
      typography: {
        fontSize: "1.4rem",
      },
      button: {
        fontSize: "1.4rem",
        smallFontSize: "1rem",
        primary: {
          main: "white",
        },
        secondary: {
          main: "2e40a6",
        },
      },
      progressBar: {
        primary: {
          main: "#2e40a6",
        },
        secondary: {
          main: "#5f70c9",
        },
      },
    },
  });
};
export default Theme;
