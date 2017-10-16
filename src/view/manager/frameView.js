/**
 * Created by snail on 17-9-29.
 */
'use strict'
import React, {Component} from 'react';
import {Layout,Menu,Breadcrumb,Icon} from 'antd';
const {SubMenu} = Menu;
const{Header,Content,Sider,Footer} = Layout;

import snailUtils from '../../publicResource/libs/snailUtils';
import ServerCtrl from '../../controller/serverController'

import FrameContentRouter from '../../router/frameContentRouter';

export default class Frame extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let {match} = this.props;
        let contentHeight = document.body.clientHeight-64-45-69;
        return (
            <Layout>
                <Header className="header">
                    <div className="logo"></div>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={["2"]}
                        defaultOpenKeys={['sub1']}
                        style={{lineHeight:"64px",float:"right"}}
                    >
                     <Menu.Item key="1">nav1</Menu.Item>
                     <Menu.Item key="2">nav2</Menu.Item>
                     <Menu.Item key="3">nav3</Menu.Item>
                    </Menu>
                </Header>


                <Layout>
                    <Sider width={200} style={{background:"#fff"}}>
                        <Menu
                        mode="inline"
                        defaultSelectedKeys={["1"]}
                        defaultOpenKeys={['sub1']}
                        style={{width:'100%',height:"100%"}}
                        >
                            <SubMenu key="sub1" title={<span><Icon type="user"/>subnav 1</span>}>
                                <Menu.Item key="1">option 1</Menu.Item>
                                <Menu.Item key="2">option 2</Menu.Item>
                                <Menu.Item key="3">option 3</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="laptop"/>subnav 2</span>}>
                                <Menu.Item key="4">option 4</Menu.Item>
                                <Menu.Item key="5">option 5</Menu.Item>
                                <Menu.Item key="6">option 6</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="notification"/>subnav 3</span>}>
                                <Menu.Item key="7">option 7</Menu.Item>
                                <Menu.Item key="8">option 8</Menu.Item>
                                <Menu.Item key="9">option 9</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{padding:"0 24px 0px"}}>
                        <Breadcrumb style={{margin:"12px 0"}}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content style={{background:"#fff",padding:24,margin:0,minHeight:contentHeight}}>
                            <FrameContentRouter match={match}/>
                        </Content>
                    </Layout>
                </Layout>

                <Footer style={{textAlign:'center'}}>
                    snail@2019 Created by snail
                </Footer>
            </Layout>
        )
    }
}