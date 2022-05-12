import * as React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { StylesContext } from "../Themes/StylesContext";

const Map = () => {
  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  const center = {
    lat: 55.95325,
    lng: -3.18826,
  };

  const libraries = ["places"];
  const style = React.useContext(StylesContext);
  const options = { styles: style };

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  // const [map, setMap] = React.useState(null);

  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);
  //   setMap(map);
  // }, []);

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null);
  // }, []);

  if (!isLoaded) return "Loading Maps ...";
  if (loadError) return "Erro Loading Maps";

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      options={options}
      // onLoad={onLoad}
      // onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(Map);
