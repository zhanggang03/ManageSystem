import React, {lazy} from 'react';
import {BrowserRouter, Route, Link, Redirect} from 'react-router-dom';

//Home页面
const Home = lazy(() => import('./home'));

export default () => (
    <BrowserRouter>
        <switch>
            <Route path="/" exact component={Home} />
            <Redirect to="/" />
        </switch>
    </BrowserRouter>
);
