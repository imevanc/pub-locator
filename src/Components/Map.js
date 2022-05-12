import * as React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { StylesContext } from "../Themes/StylesContext";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";

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

  const containerStyle = {
    width: "100%",
    height: "85vh",
  };

  const center = {
    lat: 55.87777,
    lng: -3.18826,
  };

  const libraries = ["places"];
  const style = React.useContext(StylesContext);
  const options = { styles: style, disableDefaultUI: true, zoomControl: true };

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [markers, setMarkers] = React.useState([center]);
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

  return (
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
            mapContainerStyle={containerStyle}
            center={center}
            zoom={11}
            options={options}
            onClick={(event) => {
              setMarkers((currentMarker) => {
                return [
                  ...currentMarker,
                  {
                    lat: event.latLng.lat(),
                    lng: event.latLng.lng(),
                    time: new Date(),
                  },
                ];
              });
            }}
            // onLoad={onLoad}
            // onUnmount={onUnmount}
          >
            {markers.map((marker, id) => {
              return (
                <Marker
                  key={id}
                  position={{ lat: marker.lat, lng: marker.lng }}
                  icon={{
                    url: "/beer.svg",
                    scaledSize: new window.google.maps.Size(30, 30),
                    origin: new window.google.maps.Point(0, 0),
                    anchor: new window.google.maps.Point(15, 15),
                  }}
                />
              );
            })}
          </GoogleMap>
        </Box>
      </Grid>
    </Grid>
  );
};

export default React.memo(Map);
