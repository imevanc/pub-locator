import Map from "./Components/Map";
import LinearWithColor from "./Components/LinearWithColor";
import { ThemeProvider } from "@mui/material/styles";
import Styles from "./Themes/Styles";
import Theme from "./Themes/Theme";
import Header from "./Components/Header";
import { StylesContext } from "./Themes/StylesContext";
import * as React from "react";
import * as api from "./api";

const App = () => {
  const styles = Styles();
  const [mode, setMode] = React.useState("light");
  const theme = Theme(mode);
  const [pubLocations, setPubLocations] = React.useState([]);
  React.useEffect(() => {
    const fetchPubs = async () => {
      return api
        .getPubs()
        .then((res) => {
          setPubLocations(res);
        })
        .catch((error) => console.log(error));
    };
    fetchPubs();
  }, []);

  return (
    <StylesContext.Provider value={{ styles: styles.classic, theme: theme }}>
      <ThemeProvider theme={theme}>
        <Header mode={mode} setMode={setMode} />
        {pubLocations.length ? (
          <Map pubLocations={pubLocations} />
        ) : (
          <LinearWithColor />
        )}
      </ThemeProvider>
    </StylesContext.Provider>
  );
};

export default App;
