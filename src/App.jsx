import React from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import { Route, Switch } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import Nav from './components/Navigation/Nav';
function App() {
  return (
    <>
      <CssBaseline />
      <Nav />

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
        <Route exact from='/about' render={(props) => <About {...props} />} />
      </Switch>
    </>
  );
}

export default App;
