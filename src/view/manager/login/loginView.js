/**
 * Created by snail on 17-10-12.
 */
'use strict'


import React, {Component} from 'react'
import {Redirect} from 'react-router-dom';
import {Form, Icon, Input, Button} from 'antd';
import ServerCtrl from '../../../controller/serverController';
import snailUtils from '../../../publicResource/libs/snailUtils';
import  '../../../publicResource/less/manager.less'


const FormItem = Form.Item;


class LoginForm extends React.Component{

    constructor(props){
        super(props);
        this.state={
            loginFailed:"",
        }
        this._onSubmit = this._onSubmit.bind(this);
        this._onInputChange = this._onInputChange.bind(this);
    }

    _onSubmit(e){
        let {onSubmitSuccess} = this.props;
        e.preventDefault();
        this.props.form.validateFields((err,value)=>{
            if(!err){
                ServerCtrl.loginIn(value)
                    .catch(ex=>{
                        snailUtils.writeLog(ex.msg);
                        this.setState({loginFailed:ex.msg});
                    })
                    .then(data=>{
                        onSubmitSuccess && onSubmitSuccess();
                    })
            }
        })
    }

    _onInputChange(){
        let {loginFailed} = this.state;
        !!loginFailed && (this.setState({loginFailed:""}))
    }

    render(){
        let {getFieldDecorator} = this.props.form;
        let {loginFailed} = this.state;
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

                <span>{loginFailed}</span>

                <Button style={{width:"100%"}} type="primary" size="large" htmlType="submit" className="login-form-button">登录</Button>
            </Form>
        )
    }
}


const WrappedLoginForm = Form.create()(LoginForm);


export default class LoginView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false,
        }
    }

    _onSubmitSuccess(){
        this.setState({login:true});
    }

    render() {
        let {login} = this.state;
        let {from} = this.props.location.state || {from: {pathname: "/admin"}};

        if (!login) {

            return (

                <div className="page">

                    <div className="loginHalfPart loginHalfPart_top"></div>
                    <div className="loginHalfPart loginHalfPart_bottom"></div>

                    <div className="loginFrame">
                        <div className="logoArea">
                            观界创宇官网后台管理网站
                        </div>

                        <div className="loginArea">
                            <WrappedLoginForm onSubmitSuccess={this._onSubmitSuccess.bind(this)}/>

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