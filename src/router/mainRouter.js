/**
 * Created by snail on 17-9-29.
 */

'use strict'
import React, {Component} from 'react';
import {Route, Switch, HashRouter}  from 'react-router-dom';

import LoginRoute from '../publicResource/components/loginRoute';


import HomeView from '../view/homeView';
import WebsiteHomeView from '../view/website/websiteHomeView';
import AdminFrame from '../view/manager/frameViewAnt';
import AdminLogin from '../view/manager/login/loginView'

import Page404View from '../view/manager/system/page404View';

export default class MainRouter extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact={true} path="/" component={HomeView}/>

                    <Route path="/site" component={WebsiteHomeView}/>
                    <LoginRoute path="/admin" component={AdminFrame}/>
                    <Route path="/adminLogin" component={AdminLogin} />
                    <Route  component={Page404View} />


                </Switch>
            </HashRouter>
        );
    }
}
