/**
 * Created by snail on 17-10-23.
 */

'use strict'
import ServerCtrl from '../../../../controller/serverController';
import {setPageContentLoading} from '../../../../action/systemAction';

export const SET_PAGE_RES_MG_TABLE_PAGING = 'setPageResMgTablePaging';
export const SET_PAGE_RES_MG_TABLE_DATA = 'setPageResMgTableData';
export const SET_PAGE_RES_MG_TREE_DATA = 'setPageResMgTreeData';

/**
 * 设置表格分页信息
 *
 */

export function setPageResMgTablePaging(data){
    return {
        type:SET_PAGE_RES_MG_TABLE_PAGING,
        data
    }
}

/**
 * 设置表格数据
 * @param data
 * @returns {{type: string, data: *}}
 */
export function setPageResMgTableData(data){
    return {
        type:SET_PAGE_RES_MG_TABLE_DATA,
        data
    }
}

/**
 * 设置树数据
 * @param data
 * @returns {{type: string, data: *}}
 */
export function setPageResMgTreeData(data){
    return {
        type:SET_PAGE_RES_MG_TREE_DATA,
        data
    }
}




//后台数据

/**
 * 获取树数据
 * @returns {Function}
 */
export function getTreeData(){
    return function(dispatch){
        dispatch(setPageContentLoading(true));
        return ServerCtrl.getPageResList()
            .then(data=>{
                dispatch(setPageResMgTreeData(data));
                dispatch(setPageContentLoading(false));
            })
            .catch(ex=>{
                dispatch(setPageContentLoading(false));
                throw ex;

            })
    }
}

/**
 * 获取表格数据
 * @param pId
 * @returns {Function}
 */
export function getTableData(pId,paging){
    return function (dispatch){
        dispatch(setPageContentLoading(true));
        return ServerCtrl.getPageResListByParentId(pId,paging)
            .then(info=>{
                let {data,paging} = info;
                let newData = data.map(item=>{
                    item.key = item.id;
                    return item;
                })
                dispatch(setPageResMgTableData(newData));
                dispatch(setPageResMgTablePaging(paging));
                dispatch(setPageContentLoading(false));
            })
            .catch(ex=>{
                dispatch(setPageContentLoading(false));
                throw ex;
            })
    }
}


export function addPageRes(data){
    return function (dispatch){
        dispatch(setPageContentLoading(true));
        return ServerCtrl.addPageRes(data)
            .catch(ex=>{
                dispatch(setPageContentLoading(false));
                throw ex;
            })
            .then(info=>{
                dispatch(setPageContentLoading(false));
            })

    }
}