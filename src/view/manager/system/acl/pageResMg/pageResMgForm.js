/**
 * Created by snail on 17-10-25.
 */
'use strict'
import React from 'react';
import {Form,Radio,Modal,Input,Select} from 'antd';
import InputSelectPage from '../../../../../publicResource/components/inputSelectPage';
const Option = Select.Option;
const FormItem = Form.Item;


class PageResInnerForm extends React.Component{
    constructor(props){
        super(props);
    }

    onSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((err, value) => {
            if (!err) {
               let {onConfirmModal} = this.props;
               onConfirmModal && onConfirmModal(value);
            }
        })

    }

    onCancel(){
        let {onCloseModal} = this.props;
        onCloseModal && onCloseModal();
    }



    render(){
        let {getFieldDecorator} = this.props.form;
        let {visible,title} = this.props;
        return (
            <Modal
                visible={visible}
                title={title}
                okText="确认"
                maskClosable={false}
                onOk={this.onSubmit.bind(this)}
                onCancel={this.onCancel.bind(this)}
            >


                <Form layout="horizontal">
                    <FormItem label="test">
                        {getFieldDecorator('age', {})(
                            <InputSelectPage
                                size="large"
                            />
                        )}
                    </FormItem>
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
                        {getFieldDecorator('isPage',{initialValue:false})(
                            <Radio.Group>
                                <Radio value={true}>是</Radio>
                                <Radio value={false}>否</Radio>
                            </Radio.Group>
                        )}
                    </FormItem>
                    <FormItem label="显示位置" className="last-form-item">
                        {getFieldDecorator('position',{initialValue:"top"})(
                            <Radio.Group>
                                <Radio value={"top"}>顶部菜单栏</Radio>
                                <Radio value={"side"}>侧边菜单栏</Radio>
                            </Radio.Group>
                        )}
                    </FormItem>
                </Form>
            </Modal>
        )
    }
}
const PageResForm = Form.create()(PageResInnerForm);

export default PageResForm;