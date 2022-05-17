import * as React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";

const LinearWithColor = () => {
  return (
    <Stack
      sx={{ width: "100%", color: "grey.500", paddingTop: "30px" }}
      spacing={2}
    >
      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <LinearProgress color="inherit" />
      <LinearProgress color="error" />
    </Stack>
  );
};

export default LinearWithColor;
