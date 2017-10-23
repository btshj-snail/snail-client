/**
 * Created by snail on 17-10-23.
 */
'use strict'

import {SET_PAGE_RES_MG_LOADING,SET_PAGE_RES_MG_TREE_DATA} from './pageResMgAction';

const initState = {
    page:{},
    tree:{},
    table:{},
}

const initPageState =  {
    loading:false,
}

const initTreeState = {
    data:[]
}

function operatePage(state=initPageState,action){
    switch(action.type){
        case SET_PAGE_RES_MG_LOADING :
            return Object.assign({},state,{loading:action.flag});
            break;

        default :
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


function pageResReducer(state=initState,action){
    return {
        tree:operateTree(state.tree,action),
        table:operateTable(state.table,action),
        page:operatePage(state.page,action)
    }
}

export default pageResReducer;