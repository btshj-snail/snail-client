/**
 * Created by snail on 17-10-9.
 */
'use strict'


import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';

import snailUtils from '../../publicResource/libs/snailUtils';
import ServerCtrl from '../../controller/serverController'

const STATUS_ING = "validating";
const STATUS_PASS = "pass";
const STATUS_NO_PASS = "noPass";

export default class LoginRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: STATUS_ING
        }
    }

    componentDidMount() {
        snailUtils.writeLog(555555555555555555555)
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
                    snailUtils.writeLog(1111111111111)
                } else {
                    this.setState({status: STATUS_NO_PASS});
                    snailUtils.writeLog(2222222222)
                }
            })

    }


    render() {
        let {component, location} = this.props;
        let rest = JSON.parse(JSON.stringify(this.props));
        delete rest.component;
        for(let o in rest){
            console.log(`${o}:${rest[o]}`)
        }

        let {status} = this.state;
        if (status == STATUS_PASS) {
            return (
                <div>
                    <Route {...rest} render={props =>{
                       return (<component {...props}/>)
                    } }/>
                </div>
            )
        } else if (status == STATUS_NO_PASS) {
            return (<Redirect to={{pathname: '/adminLogin', state: {from: location}}}/>)
        } else {
            return (<div>正在加载中</div>)
        }

    }
}

