/**
 * Created by snail on 17-10-9.
 */
'use strict'

import React, {Component} from 'react'
import {Route, Switch, HashRouter}  from 'react-router-dom';

import FrameContent from '../view/manager/frame/frameContent';
import AclView from '../view/manager/system/aclView';
import RoleMgView from '../view/manager/system/roleMgView';
import UserMgView from '../view/manager/system/userMgView';
import PageResMgView from '../view/manager/system/pageResMgView';

const headerHeight = 64, headerBottomBorder = 1, footerHeight = 64;

export default class FrameContentRouter extends Component {

    constructor(props) {
        super(props);

    }


    componentDidMount() {
        let dom_frame_content = document.querySelector('#frame_content');

        window.addEventListener('resize',()=>{
            dom_frame_content.style.height = this.getFrameContentHeight()+"px";
        },false)
    }

    getFrameContentHeight() {
        let screenHeight = document.documentElement.clientHeight;
        return screenHeight - headerHeight - headerBottomBorder - footerHeight
    }

    render() {
        let {match} = this.props;
        return (
            <div id="frame_content" className="frame_content" style={{height: this.getFrameContentHeight()}}>
                <Route path={`${match.url}/aclView`} component={AclView}/>
                <Route path={`${match.url}/roleMgView`} component={RoleMgView}/>
                <Route path={`${match.url}/userMgView`} component={UserMgView}/>
                <Route path={`${match.url}/pageResMgView`} component={PageResMgView}/>
                <Route exact path={match.url} component={FrameContent}/>
            </div>
        )
    }
}