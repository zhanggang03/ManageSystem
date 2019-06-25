import React, {lazy} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';

//科室页面
const Dept = lazy(() => import('../dept'));

export default () => {
    return (
        <Switch>
            <Route path="/home" exact component={Dept} />
            <Route path="/home/dept" component={Dept} />
        </Switch>
    );
};
