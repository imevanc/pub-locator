import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

import Map from "./Map";
import LinearWithColor from "./LinearWithColor";
import PhotoFrame from "./PhotoFrame";
import * as React from "react";
import * as api from "../api";

const MainFrame = () => {
  const [pubLocations, setPubLocations] = React.useState([]);
  const [imgURLs, setImgURLs] = React.useState([]);
  const [clickedMarker, setClickedMarker] = React.useState(null);

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
    <Container style={{ paddingTop: "40px" }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {pubLocations.length && imgURLs.length ? (
          <React.Fragment>
            <Grid item xs={false} sm={4} md={7}>
              <Map
                clickedMarker={clickedMarker}
                setClickedMarker={setClickedMarker}
                pubLocations={pubLocations}
              />
            </Grid>
            <Grid item xs={false} sm={4} md={4}>
              <PhotoFrame imgURLs={imgURLs} clickedMarker={clickedMarker} />
            </Grid>
          </React.Fragment>
        ) : (
          <LinearWithColor />
        )}
      </Grid>
    </Container>
  );
};

export default MainFrame;
