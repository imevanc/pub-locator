import Map from "./Components/Map";
import LinearWithColor from "./Components/LinearWithColor";
import { ThemeProvider } from "@mui/material/styles";
import Styles from "./Themes/Styles";
import Theme from "./Themes/Theme";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { StylesContext } from "./Themes/StylesContext";
import * as React from "react";
import * as api from "./api";

const App = () => {
  const [mode, setMode] = React.useState("light");
  const theme = Theme(mode);
  const styles = Styles();
  const [pubLocations, setPubLocations] = React.useState([]);
  const [imgURLs, setImgURLs] = React.useState([]);

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
    const fetchImg = async () => {
      return api
        .getImg()
        .then((res) => {
          return res;
        })
        .then((fetchedImgs) => {
          setImgURLs(fetchedImgs.map((img) => img.src.landscape));
        })
        .catch((error) => console.log(error));
    };
    fetchImg();
  }, []);

  return (
    <StylesContext.Provider value={{ styles: styles.classic, theme: theme }}>
      <ThemeProvider theme={theme}>
        <Header mode={mode} setMode={setMode} />
        {pubLocations.length && imgURLs.length ? (
          <Map imgURLs={imgURLs} pubLocations={pubLocations} />
        ) : (
          <LinearWithColor />
        )}
        <Footer />
      </ThemeProvider>
    </StylesContext.Provider>
  );
};

export default App;
