import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../Layout';
import Home from '../Home';
import Members from '../pages/members';
import Page404 from './404';
import Admin from '../pages/admin';



export default () =>
    <BrowserRouter>
        <Layout>
            <Switch> 
                <Route exact path="/" component={Home} />
                <Route exact path="/members" component={Members} />
                <Route exact path="/admin" component={Admin} />
                <Route component={Page404} />
            </Switch>
        </Layout>
    </BrowserRouter>