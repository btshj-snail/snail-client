/**
 * Created by snail on 17-9-29.
 */
'use strict'
require('../../publicResource/less/manager.less')
import React,{Component} from 'react';
import {Link} from 'react-router-dom';

const FrameHeader =()=>{
    return (
        <div className="frame_header">
            <div className="logoArea"></div>
            <ul className="menuArea">
                <Link to="/admin/aclView"><li className="menuItem">授权</li></Link>
                <Link to="/admin/userMgView"><li className="menuItem">用户</li></Link>
                <Link to="/admin/roleMgView"><li className="menuItem">角色</li></Link>
                <Link to="/admin/orgMgView"><li className="menuItem">组织机构</li></Link>
            </ul>
        </div>
    )
}

const FrameBottom =()=>{
    return (
        <div className="frame_footer">
          底部条
        </div>
    )
}

const FrameContent =({match})=>{
    console.log(`FrameContent:${match.url}`)
    let screenHeight = Math.max(document.body.clientHeight,document.documentElement.clientHeight);

    return (
        <div className="frame_content" style={{height:screenHeight-64-64}}>

        </div>
    )
}


const Frame = ({match})=>{
    console.log(`Frame:${match.url}`)
    return (
        <div>
            <FrameHeader/>

            <FrameContent match={match}/>

            <FrameBottom/>
        </div>
    )
}

export default Frame;