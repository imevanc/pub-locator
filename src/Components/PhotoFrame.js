import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const PhotoFrame = (props) => {
  const idxOfSelectedImg = (marker) => {
    return marker ? Math.floor(Math.random() * (10 - 1 + 1) + 1) : 0;
  };
  const pubNumber = idxOfSelectedImg(props.clickedMarker);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        src={props.imgURLs[pubNumber]}
        alt="photo of edinburgh pub"
      />

      {props.clickedMarker ? (
        <React.Fragment>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Pub {pubNumber}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The Boy Who Lived. Mr and Mrs Dursley, of number four, Privet
              Drive, were proud to say that they were perfectly normal, thank
              you very much. They were the last people you’d expect to be
              involved in anything strange or mysterious, because they just
              didn’t hold with such nonsense.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Book A Table</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </React.Fragment>
      ) : (
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            No Selected Pub
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consectetur lorem donec massa sapien faucibus. Hac habitasse platea
            dictumst quisque. Lectus sit amet est placerat in. Mauris nunc
            congue nisi vitae suscipit tellus mauris a. Egestas congue quisque
            egestas diam in arcu cursus. Eu non diam phasellus vestibulum lorem
            sed.
          </Typography>
        </CardContent>
      )}
    </Card>
  );
};

export default PhotoFrame;
