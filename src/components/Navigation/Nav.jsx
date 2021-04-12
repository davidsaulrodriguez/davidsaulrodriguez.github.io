import React from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';
import {
  AppBar,
  Button,
  Link,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import { withRouter, Link as RouterLink } from 'react-router-dom';
import makeStyles, { useTheme } from './styles';

const Nav = () => {
  const classes = makeStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const navItems = [
    { linkTitle: 'Home', pageURL: '/' },
    { linkTitle: 'Projects', pageURL: '/projects' },
    { linkTitle: 'About', pageURL: '/about' },
  ];

  return (
    <div className={classes.root}>
      <AppBar position='relative'>
        <Toolbar>
          <Typography variant='h5' className={classes.title}>
            <Link href='/' color='inherit'>
              BSDADM
            </Link>
          </Typography>
          {isMobile ? (
            <>
              <MobileMenu />
            </>
          ) : (
            <>
              {navItems.map((navLink, key) => {
                const { linkTitle, pageURL } = navLink;
                return (
                  <Button
                    key={key}
                    color='inherit'
                    className={classes.menuButton}
                    component={RouterLink}
                    to={pageURL}
                    title={linkTitle}>
                    {linkTitle}
                  </Button>
                );
              })}
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Nav);
