import React from 'react';
import { makeStyles, Box } from '@material-ui/core';


const Hero = () => {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            Hero de Pungas locos
        </Box>
    )
}

const useStyles = makeStyles((theme) => ({
    container: {
      width: "100%",
      height:"100vh"
    }
}));
export default Hero;
