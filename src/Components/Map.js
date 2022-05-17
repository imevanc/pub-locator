import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import * as api from "../api";
import { StylesContext } from "../Themes/StylesContext";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const containerStyle = {
  width: "80vw",
  height: "78vh",
};

const center = {
  lat: 55.9277,
  lng: -3.18826,
};

const libraries = ["places"];

const Map = (props) => {
  const style = React.useContext(StylesContext);
  const options = {
    styles: style.styles,
    disableDefaultUI: true,
    zoomControl: true,
  };

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const [markers, setMarkers] = React.useState(props.pubLocations);
  const [map, setMap] = React.useState(null);
  const onLoad = React.useCallback((map) => {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(() => {
    setMap(null);
  }, []);

  if (loadError) return "Error";

  return isLoaded ? (
    <Box sx={style.theme.palette.box}>
      <GoogleMap
        id="map"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        options={options}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {markers.map((marker, idx) => {
          return (
            <Marker
              key={idx}
              position={{ lat: marker.lat, lng: marker.lng }}
              onClick={() => props.setClickedMarker(marker)}
              onRightClick={() => props.setClickedMarker(null)}
              icon={{
                url: `/beer.svg`,
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15),
                scaledSize: new window.google.maps.Size(30, 30),
              }}
            ></Marker>
          );
        })}
      </GoogleMap>
    </Box>
  ) : (
    <></>
  );
};

export default Map;
