import React from 'react';
import { Container, Typography, Link } from '@material-ui/core';
import useStyles from './styles';

function Copyright() {
  return (
    <Typography variant='body2'>
      {'Copyright © '} {new Date().getFullYear()}{' '}
      <Link color='inherit' href='https://bsdadm.com/'>
        David Saul Rodriguez
      </Link>
      {'.'}
    </Typography>
  );
}

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth='sm'>
        <Copyright />
      </Container>
    </footer>
  );
};

export default Footer;
