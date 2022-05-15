import Map from "./Components/Map";
// import Map from "./Components/tmp";
import Styles from "./Themes/Styles";
import { StylesContext } from "./Themes/StylesContext";
import * as React from "react";
import * as api from "./api";

const App = () => {
  const styles = Styles();

  React.useEffect(() => {
    const fetchPubs = async () => {
      return api
        .getPubs()
        .then((res) => {
          console.log(res);
        })
        .catch((error) => console.log(error));
    };
    fetchPubs();
  }, []);

  return (
    <StylesContext.Provider value={styles.modest}>
      {/* <Map /> */}
    </StylesContext.Provider>
  );
};

export default App;
