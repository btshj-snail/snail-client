/**
 * Created by snail on 17-10-12.
 */
'use strict'


import React, {Component,PropTypes} from 'react'
import {Redirect} from 'react-router-dom';
import {Form, Icon, Input, Button,Spin} from 'antd';
import {loadingCtrl,setLoginStatus,loginIn,LoginStatus} from './loginAction';
import snailUtils from '../../../publicResource/libs/snailUtils';
import  '../../../publicResource/less/manager.less'


const FormItem = Form.Item;


class LoginForm extends React.Component{

    constructor(props){
        super(props);
        this._onSubmit = this._onSubmit.bind(this);
        this._onInputChange = this._onInputChange.bind(this);
    }

    _onSubmit(e){
        let {onLogin} = this.props;
        e.preventDefault();
        this.props.form.validateFields((err,value)=>{
            if(!err){
               onLogin && onLogin(value);
            }
        })
    }

    _onInputChange(){
        let {reLoginStatusToNo,loginError} = this.props;
            loginError && reLoginStatusToNo && reLoginStatusToNo();
    }

    render(){

        let {getFieldDecorator} = this.props.form;
        let {loginError} = this.props;
        return (

            <Form onSubmit={this._onSubmit} className="login_form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{required: true, message: "请输入您的用户名"}]
                    })(
                        <Input onChange={this._onInputChange} prefix={<Icon type="user" />} placeholder="用户名"/>
                    )}

                </FormItem>


                <FormItem>
                    {getFieldDecorator('passwd', {
                        rules: [{required: true, message: "请输入您的密码"}]
                    })(
                        <Input onChange={this._onInputChange} prefix={<Icon type="lock" />} type="password"
                               placeholder="密码"/>
                    )}
                </FormItem>

                <span>{loginError?"用户名或密码错误":""}</span>

                <Button style={{width:"100%"}} type="primary" size="large" htmlType="submit" className="login-form-button">登录</Button>
            </Form>
        )
    }
}

LoginForm.propTypes = {
    reLoginStatusToNo:PropTypes.func.isRequired,
    onLogin:PropTypes.func.isRequired,
    loginError:PropTypes.bool.isRequired
}


const WrappedLoginForm = Form.create()(LoginForm);


export default class LoginView extends Component {
    constructor(props) {
        super(props);
        this._onLogin = this._onLogin.bind(this);
        this._reLoginStatusToNo = this._reLoginStatusToNo.bind(this);
    }

    _reLoginStatusToNo(){
        let {dispatch} = this.props;
        dispatch(setLoginStatus(LoginStatus.LOGIN_STATUS_NO));
    }

    _onLogin(value){
        let {dispatch} = this.props;
        dispatch(loginIn(value));
    }

    render() {
        let {loading,loginStatus} = this.props;
        alert(loginStatus)
        let {from} = this.props.location.state || {from: {pathname: "/admin"}};

        if (!loginStatus || loginStatus==LoginStatus.LOGIN_STATUS_NO || loginStatus==LoginStatus.LOGIN_STATUS_FAILED) {

            return (

                <div className="page">
                    {
                        loading?<Spin size="large" spinning={true}/>:null
                    }
                    <div className="loginHalfPart loginHalfPart_top"></div>
                    <div className="loginHalfPart loginHalfPart_bottom"></div>

                    <div className="loginFrame">
                        <div className="logoArea">
                            观界创宇官网后台管理网站
                        </div>

                        <div className="loginArea">
                            <WrappedLoginForm
                                onLogin={this._onLogin}
                                reLoginStatusToNo = {this._reLoginStatusToNo}
                                loginError={loginStatus==LoginStatus.LOGIN_STATUS_FAILED}/>

                        </div>
                    </div>

                </div>
            )
        } else {
            console.log(`登录成功,即将跳转到${from.pathname}`)
            return <Redirect to={{pathname: from.pathname}}/>
        }


    }
}

LoginView.propType = {
    loginStatus:PropTypes.oneOf([
        LoginStatus.LOGIN_STATUS_NO,
        LoginStatus.LOGIN_STATUS_FAILED,
        LoginStatus.LOGIN_STATUS_SUCCESS
    ]),
    loading:PropTypes.bool.isRequired,
}