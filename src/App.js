import React, { useRef, useEffect } from 'react';
import { HashRouter, useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views
import Home from './views/Home';
import InProcess from './views/inProcess';

// Initialize Google Analytics
ReactGA.initialize("UA-213638307-2");

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    document.body.classList.add('is-loaded')
    childRef.current.init();

    // to be compatibe with google analytics
    const page = location.hash.replace('#', '');
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
  <HashRouter basename='/'>
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/in_process" component={InProcess} layout={LayoutDefault} />
        </Switch>
      )} />
  </HashRouter>
  );
}

export default App;
