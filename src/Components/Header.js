import { StylesContext } from "../Themes/StylesContext";
import { useContext } from "react";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Avatar from "react-avatar";
import BeerLogo from "./BeerLogo";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CustomSwitch from "./CustomSwitch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

const settings = ["john_smith", "logout"];

const Header = (props) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const theme = useContext(StylesContext);
  return (
    <Container sx={{ paddingTop: "40px" }}>
      <AppBar
        position="static"
        sx={{
          zIndex: "tooltip",
          position: "fixed",
          left: 0,
          top: 0,
          right: 0,
          backgroundColor: theme.theme.palette.primary.main,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <BeerLogo />
            </Typography>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <BeerLogo />
            </Typography>

            <Typography
              variant="h4"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              Pubs-Plotter
            </Typography>

            <FormGroup>
              <FormControlLabel
                control={
                  <CustomSwitch
                    sx={{ m: 1 }}
                    defaultChecked
                    onChange={() =>
                      props.setMode(props.mode === "light" ? "dark" : "light")
                    }
                  />
                }
                label={props.mode + " mode"}
              />
            </FormGroup>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar githubHandle="sitebase" size={50} round="40px" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Container>
  );
};
export default Header;
