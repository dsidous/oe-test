import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import MainLayout from './layout';
import ProductPage from './pages/product';

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
      <MatchWithMainLayout exact path="/product/:id" component={ProductPage} />
    </Switch>
  </Router>
);

export default Root;
