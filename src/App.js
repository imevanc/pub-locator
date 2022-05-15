import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Styles from "./Themes/Styles";
import Theme from "./Themes/Theme";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { StylesContext } from "./Themes/StylesContext";
import * as React from "react";
import MainFrame from "./Components/MainFrame";

const App = () => {
  const [mode, setMode] = React.useState("light");
  const theme = Theme(mode);
  const styles = Styles();

  return (
    <StylesContext.Provider value={{ styles: styles.classic, theme: theme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header mode={mode} setMode={setMode} />
        <MainFrame />

        <Footer />
      </ThemeProvider>
    </StylesContext.Provider>
  );
};

export default App;
