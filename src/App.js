import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StylesContext } from "./Themes/StylesContext";
import { ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import ErrorCard from "./Components/ErrorCard";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MainFrame from "./Components/MainFrame";
import Styles from "./Themes/Styles";
import Theme from "./Themes/Theme";

const App = () => {
  const [mode, setMode] = React.useState("light");
  const theme = Theme(mode);
  const styles = Styles();

  return (
    <BrowserRouter>
      <StylesContext.Provider value={{ styles: styles.classic, theme: theme }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header mode={mode} setMode={setMode} />
          <Routes>
            <Route path="/" element={<MainFrame />} />
            <Route
              path="*"
              element={<ErrorCard msg={"Non Existent Path Error"} />}
            />
          </Routes>
          <Footer />
        </ThemeProvider>
      </StylesContext.Provider>{" "}
    </BrowserRouter>
  );
};

export default App;
