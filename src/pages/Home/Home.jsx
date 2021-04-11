import React from 'react';
import useStyles from './styles';
import { Typography } from '@material-ui/core';

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant='h2' align='center'>
        David Rodriguez
      </Typography>

      <Typography variant='h5' align='center'>
        Full Stack Web Developer
      </Typography>
    </div>
  );
};

export default Home;
