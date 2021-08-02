import React from "react";
import CardComponent from "../CardComponent";
import { Box, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";

const ComoFunciona = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(
    theme.breakpoints.down(process.env.REACT_APP_IS_MOBILE)
  );
  return (
    <Box className={`${classes.root} ${isMobile && classes.rootMobile}`}>
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </Box>
  );
};

const useStyles = makeStyles({
  root: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  rootMobile: {
    flexDirection: "column",
  },
});

export default ComoFunciona;
