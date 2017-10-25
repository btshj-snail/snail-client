/**
 * Created by snail on 17-10-23.
 */
'use strict'

import {SET_PAGE_RES_MG_TREE_DATA,SET_PAGE_RES_MG_TABLE_DATA,SET_PAGE_RES_MG_TABLE_PAGING,SET_MODAL_STATUS_AND_TITLE} from './pageResMgAction';

const initState = {
    tree:{},
    table:{},
}


const initTreeState = {
    data:[]
}

const initTableState = {
    data:[],
    paging:{currentPage:1,total:0,size:10}
}

const initFormState = {
    visible:false,
    title:"",
}

function operateForm(state=initFormState,action){
    switch(action.type){
        case SET_MODAL_STATUS_AND_TITLE:
            return Object.assign({},state,action.data);
            break;
        default:
            return state;
    }
}


function operateTree(state=initTreeState,action){
    switch(action.type){
        case SET_PAGE_RES_MG_TREE_DATA :
            return Object.assign({},state,{data:action.data});
            break;

        default :
            return state;
    }
}


function operateTable(state = initTableState, action) {
    switch (action.type) {
        case SET_PAGE_RES_MG_TABLE_DATA:
            return Object.assign({}, state, {data: action.data});
            break;
        case SET_PAGE_RES_MG_TABLE_PAGING:
            return Object.assign({},state,{paging:action.data})
        default:
            return state;
    }
}


function pageResReducer(state=initState,action){
    return {
        form:operateForm(state.form,action),
        tree:operateTree(state.tree,action),
        table:operateTable(state.table,action),
    }
}

export default pageResReducer;