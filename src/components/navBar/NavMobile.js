import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Box, SwipeableDrawer, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../assets/images/logo.svg";

const NavMobile = () => {
  const [state, setState] = useState({ top: false });
  const classes = useStyles();

  const drawerIcon = () => (
    <Box className={classes.title}>
      <img src={logo} alt="intiza" width={"50px"} height={"auto"} />
    </Box>
  );

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ["top"]: open });
  };

  const drawerMobile = (params) => {
    return (
      <>
        <SwipeableDrawer
          anchor={"top"}
          open={state["top"]}
          onClose={toggleDrawer("top", false)}
          onOpen={toggleDrawer("top", true)}
          classes={{ paper: classes.paper }}
        ></SwipeableDrawer>
      </>
    );
  };

  return (
    <Box className={classes.container}>
      {drawerIcon()}
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        className={classes.menuButton}
        onClick={toggleDrawer("top", !state.top)}
      >
        <MenuIcon />
      </IconButton>
      {drawerMobile()}
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  title: {},
  menuButton: {
    zIndex: 1302,
    color: "#3f51b5",
  },
}));

export default NavMobile;
