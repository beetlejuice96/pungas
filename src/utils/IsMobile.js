import React from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";
const IsMobile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(
    theme.breakpoints.down(process.env.REACT_APP_IS_MOBILE)
  );
  return isMobile;
};

export default IsMobile;
