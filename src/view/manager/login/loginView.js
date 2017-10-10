/**
 * Created by snail on 17-10-9.
 */
'use strict'


import React ,{Component} from 'react'
import {Redirect} from 'react-router-dom';
import ServerCtrl from '../../../controller/serverController';
import snailUtils from '../../../publicResource/libs/snailUtils';

export default class LoginView extends Component{
    constructor(props){
        super(props);
        this.state = {
            login:false,
        }
    }

    _onLogin(){

        ServerCtrl.loginIn({userName:'jack',passwd:'12345678'})
            .catch(ex=>{
                snailUtils.writeLog('登录失败');
            })
            .then(data=>{
                this.setState({login:true});
            })



    }

    render(){
        let {login} = this.state;
        let {from} = this.props.location.state || {from:{pathname:"/"}};

        if(!login){
            return (
                <div>
                    <h1>login page</h1>
                    <button onClick={this._onLogin.bind(this)}>login</button>
                </div>
            )
        }else{
            console.log(`登录成功,即将跳转到${from.pathname}`)
           return  <Redirect to={{pathname:from.pathname}}/>
        }


    }
}