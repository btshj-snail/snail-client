/**
 * Created by snail on 17-9-29.
 */
'use strict'
import React, {Component, PropTypes} from 'react';
import {Layout, Menu, Breadcrumb, Icon,Spin} from 'antd';
import {connect} from 'react-redux';
import {getMenusByCurrentUser, selectTopMenu,setBreadcrumb,setContentHeight,getContentHeight} from './frameAction'


const {SubMenu} = Menu;
const {Header, Content, Sider, Footer} = Layout;


import FrameContentRouter from '../../router/frameContentRouter';

class Frame extends Component {
    constructor(props) {
        super(props);
        this._onClickTopMenu = this._onClickTopMenu.bind(this);
        this._onClickSideMenu = this._onClickSideMenu.bind(this);
    }

    componentDidMount() {
        this._listenWindowSizeChange();
        this.loadMenu();
    }

    loadMenu() {
        let {dispatch} = this.props;
        dispatch(getMenusByCurrentUser());
    }

    changeBreadcrumb(menuName,menuPId){
        let {topMenu,sideMenu,dispatch} = this.props;
        let ary=[menuName],allMenus=[...topMenu,...sideMenu];
        this._assembleBreadcrumb(allMenus,ary,menuPId);
        dispatch(setBreadcrumb(ary.reverse()));
    }

    _assembleBreadcrumb(allMenus,ary,pId){
        for(let i=0,l=allMenus.length;i<l;i++){
            let {id,parentId,name} = allMenus[i];
            if(id==pId){
                ary.push(name);
                if(!!parentId){
                    this._assembleBreadcrumb(allMenus,ary,parentId);
                }
            }
        }
    }


    _assembleSideMenu(sideMenus, pId) {
        let _ary = [];
        sideMenus.forEach(item => {
            let {parentId, id, isPage, icon, name} = item;
            if (pId == parentId) {

                if (isPage) {
                    _ary.push(<Menu.Item key={id}>{!!icon ? <Icon type={icon}/> : null}{name}</Menu.Item>)
                } else {
                    let subAry = this._assembleSideMenu(sideMenus, id);
                    if (subAry.length > 0) {
                        _ary.push(
                            <SubMenu key={id} title={<span>{!!icon ? <Icon type={icon}/> : null}{name}</span>}>
                                {subAry}

                            </SubMenu>
                        )
                    }
                }
            }
        })
        return _ary;
    }

    _onClickTopMenu(e) {
        let {dispatch} = this.props;
        dispatch(selectTopMenu(e.key));
    }

    _onClickSideMenu(e) {
        let menuId = e.key;
        let {sideMenu,dispatch,history} = this.props;
        let menu = sideMenu.find(item => item.id == menuId);
        if (menu && menu.pageUrl) {
            history.push(menu.pageUrl);
            this.changeBreadcrumb(menu.name,menu.parentId);
        }
    }

    _listenWindowSizeChange(){
        let {dispatch} = this.props;
        document.body.onresize = function(){
            dispatch(setContentHeight(getContentHeight()));
        }
    }

    renderTopMenu() {
        let {topMenu} = this.props;
        let topMenuItems = [];
        if (Array.isArray(topMenu) && topMenu.length > 0) {
            topMenuItems = topMenu.map(item => {
                let {id, name, icon} = item;
                return <Menu.Item key={id}>{!!icon ? <Icon type={icon}/> : null}{name}</Menu.Item>
            })
        }
        return (
            <Menu
                theme="dark"
                mode="horizontal"
                onClick={this._onClickTopMenu}
                // defaultSelectedKeys={["2"]}
                // defaultOpenKeys={['sub1']}
                style={{lineHeight: "50px", float: "right"}}
            >
                {topMenuItems}
            </Menu>
        )
    }

    renderSideMenu() {
        let {sideMenu, selectedTopMenuId} = this.props;
        let sideMenuItems = [];
        if (Array.isArray(sideMenu) && sideMenu.length > 0 && !!selectedTopMenuId) {
            sideMenuItems = this._assembleSideMenu(sideMenu, selectedTopMenuId);
        }

        return (
            <Menu
                mode="inline"
                onClick={this._onClickSideMenu}
                style={{width: '100%', height: "100%"}}
            >
                {sideMenuItems}

            </Menu>
        )
    }

    renderBreadcrumb(){
        let {breadcrumb} = this.props,ary=[];
        if(Array.isArray(breadcrumb) && breadcrumb.length>0){
           ary = breadcrumb.map(item=>{
                return <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
            })
        }else{
            ary.push(<Breadcrumb.Item key="default1">首页</Breadcrumb.Item>) ;
        }
        return (
            <Breadcrumb style={{margin: "12px 0"}}>
                {ary}
            </Breadcrumb>
        )
    }

    render() {
        let {match,contentHeight} = this.props;
        // let contentHeight = document.body.clientHeight - 50 -45- 45; //头部高度   面包高度  地步高度
        return (
            <Layout>
                <Header className="header">
                    <div className="logo">
                        <img className="logoImg" src={require("../../publicResource/imgs/frame/snail.png")} alt=""/>
                        Manager System
                    </div>
                    {this.renderTopMenu()}
                </Header>


                <Layout>
                    <Sider width={200} style={{background: "#fff"}}>
                        {this.renderSideMenu()}
                    </Sider>
                    <Layout style={{padding: "0 12px 0px"}}>
                        {this.renderBreadcrumb()}
                        <Content style={{background: "#fff",overflowY:"hidden",margin: 0,height:contentHeight}}>
                            <FrameContentRouter match={match}/>
                        </Content>
                    </Layout>
                </Layout>

                <Footer style={{textAlign: 'center'}}>
                    snail@2019 Created by snail
                </Footer>
            </Layout>
        )
    }
}

Frame.propTypes = {
    menu: PropTypes.arrayOf(PropTypes.object),
    loading: PropTypes.bool
}

/**
 * 过滤菜单
 * 没有父节点,并且位置设置为top的 才归属于顶部菜单
 * 有父节点,并且位置设置为side的,才归属于侧边菜单
 * @param menu
 */
function filterMenu(menu) {
    let topMenu = [], sideMenu = [];
    if (Array.isArray(menu) && menu.length > 0) {
        menu.forEach(item => {
            let {parentId, id, name, icon, pageUrl, isPage, position} = item;
            if (!parentId && position == 'top') {
                topMenu.push(item);
            } else if (position == 'side' && !!parentId) {
                sideMenu.push(item)
            }
        })
    }
    return {topMenu, sideMenu};
}


function mapStateToProps(state) {
    let {menu, loading, selectedTopMenuId,breadcrumb,contentHeight} = state.frame.frame;
    let {topMenu, sideMenu} = filterMenu(menu);
    return {
        contentHeight,
        breadcrumb,
        selectedTopMenuId,
        topMenu,
        sideMenu,
        loading
    }
}

export default connect(mapStateToProps)(Frame)