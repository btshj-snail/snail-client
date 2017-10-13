/**
 * Created by snail on 17-9-29.
 */
'use strict'
require('../../publicResource/less/manager.less')
import React, {Component} from 'react';

import snailUtils from '../../publicResource/libs/snailUtils';
import ServerCtrl from '../../controller/serverController'

import FrameContentRouter from '../../router/frameContentRouter';
import FrameHeaderMenu from './frame/frameHeaderMenu';

const FrameHeader = ({match}) => {
    return (
        <div className="frame_header">
            <div className="logoArea">Snail Manager</div>
            <FrameHeaderMenu match={match}/>
        </div>
    )
}

const FrameBottom = () => {
    return (
        <div className="frame_footer">
            底部条
        </div>
    )
}


export default class Frame extends Component {

    constructor(props) {
        super(props);
        this.state = {};


    }

    componentDidMount() {}


    render() {
        let {match} = this.props;
        return (
            <div>
                <FrameHeader match={match}/>

                <FrameContentRouter match={match}/>

                <FrameBottom/>
            </div>
        )

    }
}