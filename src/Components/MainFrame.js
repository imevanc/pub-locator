import * as api from "../api";
import * as React from "react";
import Container from "@mui/material/Container";
import ErrorCard from "./ErrorCard";
import Grid from "@mui/material/Grid";
import LinearWithColor from "./LinearWithColor";
import MapFrame from "./MapFrame";
import PhotoFrame from "./PhotoFrame";

const MainFrame = () => {
  const [pubLocations, setPubLocations] = React.useState([]);
  const [imgURLs, setImgURLs] = React.useState([]);
  const [clickedMarker, setClickedMarker] = React.useState("");
  const [postcode, setPostcode] = React.useState(null);
  const [errorPubs, setErrorPubs] = React.useState(null);
  const [errorImg, setErrorImg] = React.useState(null);

  React.useEffect(() => {
    const fetchPubs = async () => {
      return api
        .getPubs()
        .then((res) => {
          setPubLocations(res);
          setErrorPubs(null);
        })
        .catch((error) =>
          setErrorPubs("Failed to fetch the locations of the pubs.")
        );
    };
    fetchPubs();
    const fetchImg = async () => {
      return api
        .getImg()
        .then((res) => {
          setErrorImg(null);
          setImgURLs(res.map((img) => img.src.landscape));
        })
        .catch((error) => {
          console.log(error);
          setErrorImg("Failed to fetch the image urls");
        });
    };
    fetchImg();
  }, []);
  if (errorPubs) {
    return <ErrorCard msg={errorPubs} />;
  }
  if (errorImg) {
    return <ErrorCard msg={errorImg} />;
  }
  return (
    <Container style={{ paddingTop: "40px" }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {pubLocations.length && imgURLs.length ? (
          <React.Fragment>
            <Grid item xs={false} sm={4} md={7}>
              <MapFrame
                clickedMarker={clickedMarker}
                setClickedMarker={setClickedMarker}
                postcode={postcode}
                setPostcode={setPostcode}
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
