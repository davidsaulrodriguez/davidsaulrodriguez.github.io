import React from 'react';
import useStyles from './styles';
import { Typography } from '@material-ui/core';

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant='h2'>David Rodriguez</Typography>

      <Typography variant='h5'>Full Stack Web Developer</Typography>
    </div>
  );
};

export default Home;
