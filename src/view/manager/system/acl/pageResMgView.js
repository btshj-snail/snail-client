/**
 * Created by snail on 2017/10/19.
 */
'use strict'

import React, {Component} from 'react';
import {Layout, Button, Tree, Icon, message,Modal,Form,Input,Select} from 'antd';
import PaginationTable from '../../../../publicResource/components/paginationTable';
import {connect} from 'react-redux';

import {getTreeData, getTableData} from './pageResMgAction';



const {Header, Content, Sider, Footer} = Layout;
const TreeNode = Tree.TreeNode;
const FormItem = Form.Item;
const Option = Select.Option;


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

    onAdd(){

    }

    onUpdate(){

    }

    onDelete(){

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
        let {treeData, tableData, paging} = this.props;
        let {currentPage, total, size} = paging;
        return (

            <Layout className="pageLayout">
                <Header className="header toolbar clear">
                    <div className="toolbarBtn_right">
                        <Button className="buttonMarginHorizontal" icon="plus" onClick={this.onAdd}>Add</Button>
                        <Button className="buttonMarginHorizontal" icon="edit" onClick={this.onUpdate}>Update</Button>
                        <Button className="buttonMarginHorizontal" icon="delete" type="danger" onClick={this.onDelete}>Delete</Button>
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

                <WrappedPageResForm/>

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
    let {tree, table} = state.frame.pageResMg;
    let {data: treeData} = tree;
    let {data: tableData, paging} = table;
    return {
        treeData,
        tableData,
        paging
    }
}

export default connect(mapStateToProps)(PageResMgView);




class PageResForm extends React.Component{
    constructor(props){
        super(props);
    }




    render(){
        let {getFieldDecorator} = this.props.form;
        return (
            <Modal
                visible={true}
                title="新增"
                okText="确认"
                onOk={()=>{alert(1)}}
                onCancel={()=>{alert(2)}}
            >

                <Form layout="vertical">
                    <FormItem label="名称">
                        {getFieldDecorator('name', {rules: [{required: true, message: '请输入名称'}]})(<Input />)}
                    </FormItem>
                    <FormItem label="路径">
                        {getFieldDecorator('pageUrl', {rules: [{required: true, message: '请输入路径'}]})(<Input />)}
                    </FormItem>
                    <FormItem label="图标">
                        <Input />
                    </FormItem>
                    <FormItem label="是否为界面">
                        {getFieldDecorator('isPage',{rules:[{required:true,message:'请选择'}]})(
                            <Select placeholader="选择一个选项">
                                <Option value={true}>是</Option>
                                <Option value={false}>否</Option>
                            </Select>
                        )}
                    </FormItem>
                    <FormItem label="显示位置">
                        {getFieldDecorator('position',{rules:[{required:true,message:'请选择'}]})(
                            <Select placeholader="选择显示位置选项">
                                <Option value={"top"}>顶部菜单栏</Option>
                                <Option value={"side"}>侧边菜单栏</Option>
                            </Select>
                        )}
                    </FormItem>
                </Form>
            </Modal>
        )
    }
}
const WrappedPageResForm = Form.create()(PageResForm);

