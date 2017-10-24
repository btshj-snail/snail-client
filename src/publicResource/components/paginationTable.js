/**
 * Created by snail on 17-10-24.
 */
'use strict'
import React from 'react';
import {Table} from 'antd';

export default class PaginationTable extends React.Component{
    constructor(props){
        super(props);
        this.defaultPaginationConfig = {
            showTotal : (total)=>{return `总计:${total}条`},
            showSizeChanger: true,
            pageSizeOptions: ['10', '20', '50', '100'],
            defaultPageSize: 10,
        }
    }

    render(){
        let {pagination,...rest} = this.props;
        if(pagination!==false){
            pagination = Object.assign({},pagination,this.defaultPaginationConfig);
        }
        return (
            <Table
                {...rest}
                pagination={pagination}
            />
        )
    }

}

PaginationTable.defaultProps = {
    pagination:{

    }
}

