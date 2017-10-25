/**
 * Created by snail on 17-10-9.
 */
'use strict'

import React, {Component} from 'react'
import {Route, Switch, HashRouter}  from 'react-router-dom';

import FrameContent from '../view/manager/frame/frameContent';
import AclView from '../view/manager/system/acl/aclView';
import RoleMgView from '../view/manager/system/acl/roleMgView';
import UserMgView from '../view/manager/system/acl/userMgView';
import PageResMgView from '../view/manager/system/acl/pageResMg/pageResMgView';


export default class FrameContentRouter extends Component {

    constructor(props) {
        super(props);

    }


    componentDidMount() {
    }


    render() {
        let {match} = this.props;
        return (
            <div id="frame_content" className="frame_content" style={{height: "100%"}}>
                <Route path={`${match.url}/aclView`} component={AclView}/>
                <Route path={`${match.url}/roleMgView`} component={RoleMgView}/>
                <Route path={`${match.url}/userMgView`} component={UserMgView}/>
                <Route path={`${match.url}/pageResMgView`} component={PageResMgView}/>
                <Route exact path={match.url} component={FrameContent}/>
            </div>
        )
    }
}