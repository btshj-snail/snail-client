/**
 * Created by snail on 2017/10/19.
 */
'use strict'

import React, {Component} from 'react';
import {Layout, Spin, Button, Tree, Icon, Table} from 'antd';
const {Header, Content, Sider, Footer} = Layout;

const TreeNode = Tree.TreeNode;

const data = [
    {key: "1", parentId: "", name: "Author Manager", pageUrl: "", icon: "plus", isPage: false, position: "top"},
    {
        key: "11",
        parentId: "1",
        name: "Page Resource",
        pageUrl: "/admin/pageResMgView",
        icon: "plus",
        isPage: true,
        position: "side"
    },
    {
        key: "12",
        parentId: "1",
        name: "Organization Manager",
        pageUrl: "/admin/userMgView",
        icon: "plus",
        isPage: true,
        position: "side"
    },
    {
        key: "13",
        parentId: "1",
        name: "Role Manager",
        pageUrl: "/admin/roleMgView",
        icon: "plus",
        isPage: true,
        position: "side"
    },
    {
        key: "14",
        parentId: "1",
        name: "User Manager",
        pageUrl: "/admin/userMgView",
        icon: "plus",
        isPage: true,
        position: "side"
    },
    {
        key: "15",
        parentId: "1",
        name: "Acl Manager",
        pageUrl: "/admin/aclView",
        icon: "plus",
        isPage: true,
        position: "side"
    },
    {key: "2", parentId: "", name: "Preference", pageUrl: "", icon: "plus", isPage: false, position: "top"},
    {key: "21", parentId: "2", name: "Work Manager", pageUrl: "", icon: "plus", isPage: true, position: "side"},
    {key: "22", parentId: "2", name: "System Manager", pageUrl: "", icon: "plus", isPage: true, position: "side"},
    {key: "23", parentId: "2", name: "Update Password", pageUrl: "", icon: "plus", isPage: true, position: "side"},
    {key: "3", parentId: "", name: "Store Manager", pageUrl: "", icon: "plus", isPage: false, position: "top"},
    {key: "31", parentId: "3", name: "Store Stick", pageUrl: "", icon: "plus", isPage: false, position: "side"},
    {key: "311", parentId: "31", name: "Store Manager", pageUrl: "", icon: "plus", isPage: true, position: "side"},
    {key: "312", parentId: "31", name: "Store apply", pageUrl: "", icon: "plus", isPage: true, position: "side"},
    {key: "313", parentId: "31", name: "Store audit", pageUrl: "", icon: "plus", isPage: true, position: "side"},
]

/**
 * 列配置
 * @type {[*]}
 */
const pageResColumns = [
    {title: 'Name', dataIndex: 'name', key: 'name'},
    {title: 'Page Url', dataIndex: 'pageUrl', key: 'pageUrl'},
    {title: 'Is Page', dataIndex: 'isPage', key: 'isPage', render: val => val ? <span>[界面]</span> : <span>[菜单]</span>},
    {title: 'Icon', dataIndex: 'icon', key: 'icon', render: text => <span><Icon title={text} type={text}/></span>},
    {
        title: 'Position',
        dataIndex: 'position',
        key: 'position',
        render: text => text == "side" ? <span>侧边菜单</span> : <span>顶部菜单</span>
    },
]

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {


    },
    onSelect: (record, selected, selectedRows) => {

    },
    onSelectAll: (select, selectedRows, changeRows) => {
    },
    getChackboxProps: record => {
        disabled:record.name === '1'
    }
}


export default class PageResMgView extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <Spin spinning={false} delay={500}>
                <Layout className="pageLayout">
                    <Header className="header toolbar clear">
                        <div className="toolbarBtn_right">
                            <Button className="buttonMarginHorizontal" icon="plus">Add</Button>
                            <Button className="buttonMarginHorizontal" icon="edit">Update</Button>
                            <Button className="buttonMarginHorizontal" icon="delete" type="danger">Delete</Button>
                        </div>
                    </Header>

                    <Layout className="leftRightLayout">

                        <Sider width={200} className="rightBorder customLayoutBackground leftLayout">

                            <Tree>
                                <TreeNode title="Author Manager">
                                    <TreeNode title="Role Manager"/>
                                    <TreeNode title="Org Manager"/>
                                    <TreeNode title="User Manager"/>
                                </TreeNode>
                                <TreeNode title="Author Manager">
                                    <TreeNode title="Role Manager"/>
                                    <TreeNode title="Org Manager"/>
                                    <TreeNode title="User Manager"/>
                                </TreeNode>
                                <TreeNode title="Author Manager">
                                    <TreeNode title="Role Manager"/>
                                    <TreeNode title="Org Manager"/>
                                    <TreeNode title="User Manager"/>
                                </TreeNode>

                            </Tree>

                        </Sider>
                        <Layout className="customLayoutBackground rightLayout">
                            <Content>
                                <Table
                                    rowSelection={rowSelection}
                                    columns={pageResColumns}
                                    dataSource={data}
                                    pagination={{
                                        total: 99,
                                        defaultPageSize: 10,
                                        size: "small",
                                        showSizeChanger: true,
                                        pageSizeOptions: ['10', '20', '50', '100']
                                    }}
                                />
                            </Content>
                        </Layout>

                    </Layout>

                </Layout>
            </Spin>
        )
    }
}
