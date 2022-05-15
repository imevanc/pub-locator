import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

import Map from "./Map";
import LinearWithColor from "./LinearWithColor";
import ListOfPubs from "./ListOfPubs";
import * as React from "react";
import * as api from "../api";

const MainFrame = () => {
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
    <Container style={{ marginTop: "1em", paddingTop: "1em" }}>
      <Grid
        container
        spacing={4}
        // direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ height: "90vh" }}
        //   sx={{ paddingTop: "35px", marginLeft: "10px" }}
      >
        <Grid item xs={false} sm={4} md={7}>
          {pubLocations.length && imgURLs.length ? (
            <Map imgURLs={imgURLs} pubLocations={pubLocations} />
          ) : (
            <LinearWithColor />
          )}
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={4}
          // sx={{ marginLeft: "30px" }}
          // elevation={20}
          // component={Paper}
          // square
        >
          <ListOfPubs />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainFrame;
