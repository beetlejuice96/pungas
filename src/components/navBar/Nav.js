import React from "react";
import {
  Box,
  SwipeableDrawer,
  useMediaQuery,
  useTheme,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import color from "color";
import NavMobile from "./NavMobile";

const Nav = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <AppBar 
      position="static"
      className={`${classes.glass} ${!isMobile&&classes.rounded}`}>
      <Toolbar>
        {isMobile ? <NavMobile /> : "estoy en desktop carirems"}
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles((theme) => ({
  glass: {
    backgroundColor: color("#ffffff").alpha(0.4).toString(),
    backgroundImage: `linear-gradient(to bottom right, ${color("#ffffff")
      .alpha(0.2)
      .toString()}, ${color("#ffffff").alpha(0).toString()})`,
    backdropFilter: `blur(${4}px)`,
    boxShadow: "10px 10px 10px rgba(30, 30, 30, 0.1)",
  },
  rounded: {
    borderRadius: '45px'
  }
  //   glassBorders: {
  //     borderLeft: `solid 1px ${color("#ffffff").alpha(0.3).toString()}`,
  //     borderTop: `solid 1px ${color("#ffffff").alpha(0.8).toString()}`,
  //   },
  //   glassRounded: {
  //     borderRadius: theme.spacing(2),
  //   },
}));

export default Nav;
