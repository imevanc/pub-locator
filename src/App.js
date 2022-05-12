import Map from "./Components/Map";
import Styles from "./Themes/Styles";
import { StylesContext } from "./Themes/StylesContext";
import * as React from "react";

const App = () => {
  const styles = Styles();
  return (
    <StylesContext.Provider value={styles.modest}>
      <Map />
    </StylesContext.Provider>
  );
};

export default App;
