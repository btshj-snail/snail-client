/**
 * Created by snail on 17-10-9.
 */
'use strict'


import React from 'react';
import {Route, Redirect} from 'react-router-dom';

import snailUtils from '../../publicResource/libs/snailUtils';
import ServerCtrl from '../../controller/serverController'

const STATUS_ING = "validating";
const STATUS_PASS = "pass";
const STATUS_NO_PASS = "noPass";


export default class LoginRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: STATUS_ING
        }
    }

    componentDidMount() {
        this.loadLoginInfo();
    }

    loadLoginInfo() {
        ServerCtrl.loadLoginInfo()
            .catch(ex => {

                this.setState({status: STATUS_NO_PASS});
                snailUtils.writeLog(ex)
            })
            .then(data => {
                snailUtils.writeLog(data.userName)
                if (!!data.userName) {
                    this.setState({status: STATUS_PASS});
                } else {
                    this.setState({status: STATUS_NO_PASS});
                }
            })

    }


    render() {
        let {location, component: Component, ...rest} = this.props;

        let {status} = this.state;

        if (status == STATUS_ING) {
            return (<div>正在加载中</div>)
        }

        return (
            <Route {...rest} render={props => (
                status == STATUS_PASS ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{pathname: '/adminLogin', state: {from: location}}}/>
                )
            )}/>
        )
    }
}