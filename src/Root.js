import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import MainLayout from './components/layout';
import ProductPage from './components/pages/product';

const MatchWithMainLayout = ({ exact, path, component: Component }) => (
  <Route
    exact={exact}
    path={path}
    render={props => (
      <MainLayout>
        <Component {...props} />
      </MainLayout>
    )}
  />
);

const Root = () => (
  <Router>
    <Switch>
      <MatchWithMainLayout exact path="/v1/product/:id" component={ProductPage} />
    </Switch>
  </Router>
);

export default Root;
