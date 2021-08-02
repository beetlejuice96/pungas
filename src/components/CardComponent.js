import {
  Box,
  makeStyles,
  Card,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";
import logoCard from "../assets/images/logo-cards1.svg";

const CardComponent = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(
    theme.breakpoints.down(process.env.REACT_APP_IS_MOBILE)
  );
  return (
    <Box className={`${classes.root} ${classes.grid}`} variant={"outlined"}>
      <img className={classes.img} src={logoCard} alt="horse" />
      <Card
        className={classes.cardContent}
        style={{ width: `${!isMobile && "23vw"}` }}
      ></Card>
    </Box>
  );
};

const useStyles = makeStyles({
  root: {
    margin: "2rem",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridAutoRows: "minmax(100px, auto)",
  },
  img: {
    zIndex: "1",
    gridColumn: "1 / 2",
    gridRow: "1 / 3",
    margin: "24px auto",
  },
  cardContent: {
    gridColumn: "1 / 2",
    gridRow: "2 / 4",
    height: "100%",
    webkitBoxShadow: "7px 7px 14px 0px rgb(16 15 15 / 13%)",
    mozBoxShadow: "7px 7px 14px 0px rgb(16 15 15 / 13%)",
    boxShadow: "7px 7px 14px 0px rgb(16 15 15 / 13%)",
    borderRadius: "10px",
  },
});

export default CardComponent;
