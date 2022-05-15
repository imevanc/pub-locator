import { StylesContext } from "../Themes/StylesContext";
import Avatar from "@mui/material/Avatar";
import * as React from "react";

const BeerLogo = () => {
  const theme = React.useContext(StylesContext);

  return (
    <Avatar
      src="/beer.svg"
      sx={{
        border: theme.theme.palette.icon.border,
        borderRadius: theme.theme.palette.icon.borderRadius,
        "&:hover": { opacity: [0.9, 0.7, 0.7] },
      }}
    />
  );
};

export default BeerLogo;
