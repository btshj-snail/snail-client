/**
 * Created by snail on 17-10-25.
 */
'use strict'

import React from 'react';
import {Input, Icon} from 'antd';


export default class InputSelectPage extends React.Component {
    constructor(props) {
        super(props);

        const value = this.props.value || '';

        this.state = {
            value,
            isShow: false,
        }
    }

    componentWillReceiverProps(nextProps) {
        if ('value' in nextProps) {
            this.setState(nextProps.value);
        }
    }

    onInputChange() {
        let {onChange} = this.props;
        onChange && onChange();
    }

    onClickIcon() {

    }


    render() {
        let {size} = this.props;
        let {value} = this.state;
        return (
            <Input
                type="text"
                size={size}
                value={value}
                onChange={this.onInputChange}
                suffix={<Icon type="edit" onClick={this.onClickIcon.bind(this)}/>}
            />
        )
    }
}