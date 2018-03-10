import React from 'react';

import {Route, Switch} from 'react-router-dom';

import Bundle from './Bundle';
import Loading from 'components/Loading/Loading';

import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
import Login from 'bundle-loader?lazy&name=login!pages/Login/Login';
import Register from 'bundle-loader?lazy&name=register!pages/Register/Register';


import Page1 from 'bundle-loader?lazy&name=page1!pages/Page1/Page1';
import Counter from 'bundle-loader?lazy&name=counter!pages/Counter/Counter';
import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo';
import NotFound from 'bundle-loader?lazy&name=notFound!pages/NotFound/NotFound';

const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} /> : <Loading/>
        }
    </Bundle>
);

export default () => (
    <div style={{height:'92%'}}>
        <Switch>
            <Route exact path="/" component={createComponent(Home)}/>
            <Route path="/Login" component={createComponent(Login)}/>
            <Route path="/Register" component={createComponent(Register)}/>
            <Route path="/Userinfo" component={createComponent(UserInfo)}/>
            <Route component={createComponent(NotFound)}/>
        </Switch>
    </div>
);
