import React from 'react';
import useStyles from './styles';
import { Typography } from '@material-ui/core';

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <div className={classes.contentContainer}> */}
      <Typography variant='h2'>David Rodriguez</Typography>

      <Typography variant='h5'>Full Stack Web Developer</Typography>
      {/* </div> */}
    </div>
  );
};

export default Home;
