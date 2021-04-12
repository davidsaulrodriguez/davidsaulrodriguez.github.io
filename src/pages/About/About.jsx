import React from 'react';
import { Avatar, Container, Typography } from '@material-ui/core';
import useStyles from './styles';
import avatarImg from '../../images/me.jpg';

const About = () => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.heroContent} component='main' maxWidth='sm'>
        <Avatar className={classes.abtImg} src={avatarImg} />
        <Typography
          component='h1'
          variant='h2'
          className={classes.heading}
          align='center'
          gutterBottom>
          About Me
        </Typography>

        <Typography
          variant='h5'
          align='center'
          color='textSecondary'
          component='p'
          gutterBottom>
          I&apos;m a Full Stack Web Developer and part-time open source
          contributor. I devote a lot of my spare time to learning and teaching
          myself new technologies.
        </Typography>
      </Container>
    </>
  );
};

export default About;
