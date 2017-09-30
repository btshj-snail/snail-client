/**
 * Created by snail on 17-9-29.
 */

'use strict'
require('../publicResource/less/home.less')
import React from 'react';
import {Link} from 'react-router-dom';


const HomeView = ()=>(
    <div className="block_frame">
        <Link to={"/site"}><div className="block_cell">进入站点</div></Link>
        <Link to={"/admin"}><div className="block_cell block_cell_right">进入管理系统</div></Link>
    </div>
)

export default  HomeView;
