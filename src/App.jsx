import React from 'react';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import { Route, Switch } from 'react-router-dom';
import {
  CssBaseline,
  createMuiTheme,
  ThemeProvider,
  Container,
} from '@material-ui/core';
import Nav from './components/Navigation/Nav';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Montserrat',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Nav />
        <Container>
          <Switch>
            <Route exact from='/' render={(props) => <Home {...props} />} />
            <Route
              exact
              from='/projects'
              render={(props) => <Projects {...props} />}
            />
            <Route
              exact
              from='/contact'
              render={(props) => <Contact {...props} />}
            />
            <Route
              exact
              from='/about'
              render={(props) => <About {...props} />}
            />
          </Switch>
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
