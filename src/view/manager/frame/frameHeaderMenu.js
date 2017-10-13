/**
 * Created by snail on 17-10-9.
 */
'use strict'

import React,{Component} from 'react';
import {Link} from 'react-router-dom';


const FrameHeaderMenu = ({match})=>(
    <div className="menuArea">
    <ul className="menu">
        <Link to={`${match.url}/aclView`}><li className="menuItem">Acl</li></Link>
        <Link to={`${match.url}/userMgView`}><li className="menuItem">User</li></Link>
        <Link to={`${match.url}/roleMgView`}><li className="menuItem">Role</li></Link>
        <Link to={`${match.url}/orgMgView`}><li className="menuItem">Org</li></Link>
    </ul>
    </div>
)

export default FrameHeaderMenu;