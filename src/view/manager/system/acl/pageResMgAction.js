/**
 * Created by snail on 17-10-23.
 */




export const SET_PAGE_RES_MG_LOADING = 'setPageResMgLoading';
export const SET_PAGE_RES_MG_TABLE_DATA = 'setPageResMgTableData';
export const SET_PAGE_RES_MG_TREE_DATA = 'setPageResMgTreeData';



export function setPageResMgLoading(flag){
    return {
        type:SET_PAGE_RES_MG_LOADING,
        flag
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