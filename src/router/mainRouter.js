/**
 * Created by snail on 17-9-29.
 */

'use strict'
import React, {Component} from 'react';
import {Route, Switch, HashRouter}  from 'react-router-dom';
import HomeView from '../view/homeView';
import WebsiteHomeView from '../view/website/websiteHomeView';
import AdminFrame from '../view/manager/frameView';
import AclView from '../view/manager/system/aclView';
import RoleMgView from '../view/manager/system/roleMgView';
import UserMgView from '../view/manager/system/userMgView';
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
                    <Route exact path="/admin" component={AdminFrame}/>
                    <Route path="/site" component={WebsiteHomeView}/>
                    <Route path="/admin/aclView" component={AclView} />
                    <Route path="/admin/roleMgView" component={RoleMgView} />
                    <Route path="/admin/userMgView" component={UserMgView} />
                    <Route  component={Page404View} />
                </Switch>
            </HashRouter>
        );
    }
}
