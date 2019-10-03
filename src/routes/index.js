import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../Layout';
import Home from '../Home';
import Members from '../pages/members/container';
import Page404 from './404';
import Admin from '../pages/admin/container';
import Themes from '../pages/themes/container';
import { StoreProvider } from '../helpers/context';

export default () => (
  <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>
    <StoreProvider>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/members" component={Members} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/themes" component={Themes} />
          <Route component={Page404} />
        </Switch>
      </Layout>
    </StoreProvider>
  </BrowserRouter>
);
