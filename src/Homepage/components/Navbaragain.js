import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
// import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import ContainerHome from "./ContainerHome";
import Sponsors from "./Sponsors";
import FooterComponent from "./FooterComponent";
import logo from "../../assets/icons/logo.png";
// import classes from "*.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  btnStyle: {
    // margin: theme.spacing(1),
    paddingRight: "20px",
    paddingLeft: "20px",
    color: "black ",
    // fontWeight: "600",
    borderRight: "1.5px solid #BDBCB2",
    // backgroundImage: "linear-gradient(#CBF5A9 , white)",
    borderRadius: "0%",
    "&:hover": {
      backgroundColor: "#E6FFBD",
      color: "#BA6504",
    },
  },
}));
const teamBtnStyle = {
  borderRight: "0",
};
// A9E1F5

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function BackToTop(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <div
          style={{
            backgroundColor: "white",
            padding: "0.5rem",
            display: "flex",
            justifyContent: "space-between",
            backgroundImage: "linear-gradient(#D6FFCE , white)",
          }}
        >
          <div style={{ paddingLeft: "2rem" }}>
            <img src={logo} width="70px" height="70px" alt="" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <ul>
              <Button className={classes.btnStyle} color="primary" href="/">
                Home
              </Button>
              <Button
                className={classes.btnStyle}
                color="primary"
                href="/projects"
              >
                Projects
              </Button>
              <Button
                className={classes.btnStyle}
                color="primary"
                href="/about"
              >
                About Us
              </Button>
              <Button
                className={classes.btnStyle}
                color="primary"
                href="/contact"
              >
                Contact Us
              </Button>
              <Button
                className={classes.btnStyle}
                style={teamBtnStyle}
                color="primary"
                href="/team"
              >
                Team
              </Button>
            </ul>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingRight: "2rem",
            }}
          >
            <Button
              style={{
                width: "150px",
                height: "40px",
                paddingLeft: "1rem",
              }}
              variant="contained"
              color="primary"
              href="/register"
            >
              <b>Register Now</b>
            </Button>
          </div>
        </div>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <ContainerHome />
        <Sponsors />
        <FooterComponent />
      </Container>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
