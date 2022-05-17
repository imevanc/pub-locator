import { StylesContext } from "../Themes/StylesContext";
import { useContext } from "react";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import BeerLogo from "./BeerLogo";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Footer = () => {
  const theme = useContext(StylesContext);

  return (
    <Container sx={{ paddingBottom: "100px" }}>
      <AppBar
        position="static"
        sx={{
          position: "fixed",
          left: 0,
          bottom: 0,
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

            <Grid
              item
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              <dl>
                <dt>
                  <Typography
                    component="div"
                    sx={{
                      fontSize: theme.theme.palette.text.fontSize,
                    }}
                  >
                    Premium
                  </Typography>
                </dt>
                <dt>
                  <Typography
                    component="div"
                    sx={{
                      fontSize: theme.theme.palette.text.fontSize,
                    }}
                  >
                    Free
                  </Typography>
                </dt>
              </dl>
            </Grid>
            <Grid
              item
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              <dl>
                <dt>
                  <Typography
                    component="div"
                    sx={{
                      fontSize: theme.theme.palette.text.fontSize,
                    }}
                  >
                    Subscriptions
                  </Typography>
                </dt>
                <dt>
                  <Typography
                    component="div"
                    sx={{
                      fontSize: theme.theme.palette.text.fontSize,
                    }}
                  >
                    Blog
                  </Typography>
                </dt>
              </dl>
            </Grid>
            <Grid
              item
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              <dl>
                <dt>
                  <Typography
                    component="div"
                    sx={{
                      fontSize: theme.theme.palette.text.fontSize,
                    }}
                  >
                    About
                  </Typography>
                </dt>
                <dt>
                  <Typography
                    component="div"
                    sx={{
                      fontSize: theme.theme.palette.text.fontSize,
                    }}
                  >
                    Careers
                  </Typography>
                </dt>
              </dl>
            </Grid>
            <Grid
              item
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              <dl>
                <dt>
                  <Typography
                    component="div"
                    sx={{
                      fontSize: theme.theme.palette.text.fontSize,
                    }}
                  >
                    Help
                  </Typography>
                </dt>
                <dt>
                  <Typography
                    component="div"
                    sx={{
                      fontSize: theme.theme.palette.text.fontSize,
                    }}
                  >
                    Privacy
                  </Typography>
                </dt>
              </dl>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </Container>
  );
};

export default Footer;
