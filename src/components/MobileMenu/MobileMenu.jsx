import React from 'react';
import clsx from 'clsx';
import useStyles from './styles';
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from '@material-ui/core';
import {
  Home as HomeIcon,
  FolderSpecial as ProjectsIcon,
  Fingerprint as AboutIcon,
  Contacts as ContactIcon,
  Menu as MenuIcon,
} from '@material-ui/icons';
import { Typography } from '@material-ui/core';
import {
  useHistory,
  useLocation,
  withRouter,
  Link as RouterLink,
} from 'react-router-dom';

const MobileMenu = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [state, setState] = React.useState({
    right: false,
  });

  const navItems = [
    { linkTitle: 'Home', pageURL: '/', icon: <HomeIcon /> },
    { linkTitle: 'Projects', pageURL: '/projects', icon: <ProjectsIcon /> },
    { linkTitle: 'About', pageURL: '/about', icon: <AboutIcon /> },
    { linkTitle: 'Contact', pageURL: '/contact', icon: <ContactIcon /> },
  ];

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.linkTitle}
            button
            component={RouterLink}
            to={item.pageURL}
            onClick={() => history.push(item.pageURL)}
            className={
              location.pathname == item.pageURL ? classes.active : null
            }>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.linkTitle} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <Typography varient='p' align='center'>
        &copy; 2021, David Saul Rodriguez II
      </Typography>
    </div>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button color='inherit' onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}>
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default withRouter(MobileMenu);
