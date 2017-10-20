/**
 * Created by snail on 2017/10/19.
 */
'use strict'

import React, {Component} from 'react';
import {Layout, Spin,Button,Tree} from 'antd';
const {Header, Content, Sider, Footer} = Layout;

const TreeNode = Tree.TreeNode;

export default class PageResMgView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <Header className="header toolbar clear">
                    <div className="toolbarBtn_right">
                        <Button className="buttonMarginHorizontal" icon="plus">Add</Button>
                        <Button className="buttonMarginHorizontal" icon="edit">Update</Button>
                        <Button className="buttonMarginHorizontal" icon="delete" type="danger">Delete</Button>
                    </div>
                </Header>
                <Layout>
                    <Sider width={200} style={{background: "#fff"}}>

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
                    <Layout style={{padding:"0px 0px 0px 12px"}}>
                        <Content>

                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}
