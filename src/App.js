import Map from "./Components/Map";
import LinearWithColor from "./Components/LinearWithColor";
import Styles from "./Themes/Styles";
import { StylesContext } from "./Themes/StylesContext";
import * as React from "react";
import * as api from "./api";

const App = () => {
  const styles = Styles();
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
    <StylesContext.Provider value={styles.classic}>
      {pubLocations.length ? (
        <Map pubLocations={pubLocations} />
      ) : (
        <LinearWithColor />
      )}
    </StylesContext.Provider>
  );
};

export default App;
