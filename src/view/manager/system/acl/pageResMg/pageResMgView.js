/**
 * Created by snail on 2017/10/19.
 */
'use strict'

import React, {Component} from 'react';
import {Layout, Button, Tree, Icon, message} from 'antd';
import PaginationTable from '../../../../../publicResource/components/paginationTable';

import {connect} from 'react-redux';

import {getTreeData, getTableData,setModalStatusAndTitle,addPageRes} from './pageResMgAction';
import PageResForm from './pageResMgForm';


const {Header, Content, Sider, Footer} = Layout;
const TreeNode = Tree.TreeNode;


/**
 * 列配置
 * @type {[*]}
 */
const pageResColumns = [
    {title: 'Id', dataIndex: 'id', key: 'id'},
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

class PageResMgView extends Component {
    constructor(props) {
        super(props);
        this.onTreeSelect = this.onTreeSelect.bind(this);
        this.onTablePagingChange = this.onTablePagingChange.bind(this);
        this.onTablePagingShowSizeChange = this.onTablePagingShowSizeChange.bind(this);
    }

    componentDidMount() {
        this.loadTreeData();
    }

    loadTreeData() {
        let {dispatch} = this.props;
        dispatch(getTreeData())
            .then(data => {
                message.success("加载树数据成功")
            })
            .catch(ex => {
                message.error("加载树数据失败." + ex.message);
            })
    }

    loadTableData(pId, paging) {
        let {dispatch} = this.props;
        dispatch(getTableData(pId, paging))
            .then(data => {
                this.selectTreeKey = pId;
            })
            .catch(ex => {
                message.error("加载表格数据失败." + ex.message);
            })
    }

    _assembleTree(pId) {
        let ary = [];
        let {treeData} = this.props;
        for (let i = 0, l = treeData.length; i < l; i++) {
            let {name, id, parentId} = treeData[i];
            if (parentId == pId) {
                let subAry = this._assembleTree(id);
                if (subAry.length > 0) {
                    ary.push(<TreeNode key={id} title={name}>{subAry}</TreeNode>)
                } else {
                    ary.push(<TreeNode key={id} title={name}/>)
                }
            }
        }
        return ary;
    }

    onAdd() {
        let {dispatch} = this.props;
        dispatch(setModalStatusAndTitle({visible:true,title:'新增'}));
    }

    onUpdate() {
        let {dispatch} = this.props;
        dispatch(setModalStatusAndTitle({visible:true,title:'修改'}));
    }

    onCloseModal(){
        let {dispatch} = this.props;
        dispatch(setModalStatusAndTitle({visible:false,title:''}));
    }


    onConfirmModal(data){
        let {dispatch} = this.props;
        dispatch(addPageRes(data))
            .then(data=>{
                dispatch(setModalStatusAndTitle({visible:false,title:''}));
            })
            .catch(ex=>{
                message.error("新增失败"+ex.message);
            })

    }


    onDelete() {

    }

    onTreeSelect(selectKey, info) {
        let {paging} = this.props;
        this.loadTableData(selectKey, paging);
    }

    onTablePagingChange(page) {
        if (this.selectTreeKey) {
            let {paging} = this.props;
            paging = Object.assign({}, paging, {currentPage: page})
            this.loadTableData(this.selectTreeKey, paging);
        }
    }

    onTablePagingShowSizeChange(current, pageSize) {
        if (this.selectTreeKey) {
            let {paging} = this.props;
            paging = Object.assign({}, paging, {currentPage: 1, size: pageSize})
            this.loadTableData(this.selectTreeKey, paging);
        }
    }

    renderTree() {
        return this._assembleTree("");
    }


    render() {
        let {treeData, tableData, paging,visible,title} = this.props;
        let {currentPage, total, size} = paging;
        return (

            <Layout className="pageLayout">
                <Header className="header toolbar clear">
                    <div className="toolbarBtn_right">
                        <Button className="buttonMarginHorizontal" icon="plus" onClick={this.onAdd.bind(this)}>Add</Button>
                        <Button className="buttonMarginHorizontal" icon="edit" onClick={this.onUpdate.bind(this)}>Update</Button>
                        <Button className="buttonMarginHorizontal" icon="delete" type="danger" onClick={this.onDelete.bind(this)}>Delete</Button>
                    </div>
                </Header>

                <Layout className="leftRightLayout customLayoutBackground ">
                    <Sider width={200} className="rightBorder customLayoutBackground leftLayout">

                        <Tree onSelect={this.onTreeSelect} style={{height: "100%"}}>
                            {this.renderTree()}
                        </Tree>

                    </Sider>
                    <Layout className="customLayoutBackground rightLayout">
                        <Content>
                            <PaginationTable
                                rowSelection={rowSelection}
                                columns={pageResColumns}
                                dataSource={tableData}
                                pagination={{
                                    current: currentPage,
                                    total: total,
                                    onChange: this.onTablePagingChange,
                                    onShowSizeChange: this.onTablePagingShowSizeChange,
                                }}
                            />
                        </Content>
                    </Layout>

                </Layout>

                <
                    PageResForm
                    visible={visible}
                    title={title}
                    onCloseModal={this.onCloseModal.bind(this)}
                    onConfirmModal = {this.onConfirmModal.bind(this)}
                />

            </Layout>

        )
    }
}

PageResMgView.defaultProps = {
    treeData: [],
    tableData: [],
    paging: {currentPage: 1, size: 10}
}

const mapStateToProps = (state) => {
    let {tree, table,form} = state.frame.pageResMg;
    let {data: treeData} = tree;
    let {visible,title} = form ;
    let {data: tableData, paging} = table;
    return {
        visible,
        title,
        treeData,
        tableData,
        paging
    }
}

export default connect(mapStateToProps)(PageResMgView);






