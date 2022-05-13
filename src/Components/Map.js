import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import { StylesContext } from "../Themes/StylesContext";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import useMediaQuery from "@mui/material/useMediaQuery";

const containerStyle = {
  width: "100vw",
  height: "85vh",
};

const center = {
  lat: 55.9277,
  lng: -3.18826,
};

const libraries = ["places"];

const Map = () => {
  const matches = useMediaQuery("(min-width:600px)");

  const styles = matches
    ? {
        paddingTop: "50px",
        paddingLeft: "40px",
        width: "100%",
        boxShadow: "none",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",
        margin: "0 auto",
      }
    : {
        paddingTop: "50px",
        paddingLeft: "0px",
        width: "100%",
        boxShadow: "none",
      };
  const stylesMap = matches
    ? {
        width: "100%",
        margin: "0 auto",
        paddingLeft: "50px",
        boxShadow: "none",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }
    : {
        width: "100%",
        margin: "0 auto",
        height: "40vh",
        boxShadow: "none",
        overflow: "hidden",
      };
  const mapPaddingStyle = matches
    ? {
        overflow: "hidden",
        boxShadow: "none",
        paddingTop: "40px",
        marginBottom: "50px",
      }
    : {
        overflow: "hidden",
        boxShadow: "none",
        paddingTop: "0px",
        marginBottom: "50px",
      };

  const style = React.useContext(StylesContext);
  const options = { styles: style, disableDefaultUI: true, zoomControl: true };
  // const options = { disableDefaultUI: true, zoomControl: true };

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const [markers, setMarkers] = React.useState([
    { lat: 55.9222, lng: -3.2121 },
    { lat: 55.9322, lng: -3.254 },
  ]);
  const [map, setMap] = React.useState(null);
  const onLoad = React.useCallback((map) => {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(() => {
    setMap(null);
  }, []);

  const [clickedMarker, setClickedMarker] = React.useState(null);

  if (loadError) return "Error";

  return isLoaded ? (
    <Grid
      container
      sx={styles}
      elevation={10}
      component={Paper}
      square
      bgcolor={"grey"}
    >
      <Grid
        item
        xs={100}
        sm={4}
        md={7}
        maxWidth="xl"
        elevation={15}
        component={Paper}
        square
        bgcolor={"grey"}
        sx={mapPaddingStyle}
      >
        <Box direction="row" justifyContent="end" display="flex" sx={stylesMap}>
          <GoogleMap
            id="map"
            mapContainerStyle={containerStyle}
            center={center}
            zoom={11}
            options={options}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {markers.map((marker, idx) => {
              return (
                <Marker
                  key={idx}
                  position={{ lat: marker.lat, lng: marker.lng }}
                  onClick={() => {
                    setClickedMarker(marker);
                  }}
                  icon={{
                    url: `/beer.svg`,
                    origin: new window.google.maps.Point(0, 0),
                    anchor: new window.google.maps.Point(15, 15),
                    scaledSize: new window.google.maps.Size(30, 30),
                  }}
                ></Marker>
              );
            })}
            {clickedMarker ? (
              <InfoWindow
                position={{ lat: clickedMarker.lat, lng: clickedMarker.lng }}
                onCloseClick={() => {
                  setClickedMarker(null);
                }}
              >
                <Grid container spacing={2} direction="column">
                  <Grid item xs={4} md={2}>
                    <Typography sx={{ fontSize: "0.8rem" }}>
                      Text only 1
                    </Typography>
                  </Grid>
                  <Grid item xs={4} md={2}>
                    <Typography sx={{ fontSize: "0.8rem" }}>
                      Text only 2
                    </Typography>
                  </Grid>
                </Grid>
              </InfoWindow>
            ) : null}
          </GoogleMap>
        </Box>
      </Grid>
    </Grid>
  ) : (
    <></>
  );
};

export default Map;
