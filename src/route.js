import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//Home页面
const Home = lazy(() => import('./app/home'));

export default () => (
    <BrowserRouter>
        <Suspense fallback={<div />}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" component={Home} />
            </Switch>
        </Suspense>
    </BrowserRouter>
);
