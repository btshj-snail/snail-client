/**
 * Created by snail on 17-10-16.
 */
'use strict'

import {combineReducers} from 'redux';
import {SET_MENU_LIST,SET_BREADCRUMB, OPERATE_LOADING_FRAME,SELECT_TOP_MENU,SET_CONTENT_HEIGHT,getContentHeight} from './frameAction';

function menuOperate(state = [], action) {
    switch (action.type) {
        case SET_MENU_LIST:
            return action.list;
            break;
        default:
            return state;
    }
}

function loadingOperate(state = true, action) {
    switch (action.type) {
        case OPERATE_LOADING_FRAME:
            return action.loading;
            break;
        default:
            return state;
    }
}

function selectTopMenu(state="",action){
    switch (action.type){
        case SELECT_TOP_MENU:
            return action.id;
            break;
        default:
            return state;
    }
}

function setBreadcrumb(state=[],action){
    switch (action.type){
        case SET_BREADCRUMB:
            return action.breadcrumb;
            break;
        default:
            return state;
    }
}

function setContentHeight(state=getContentHeight(),action){
    switch (action.type){
        case SET_CONTENT_HEIGHT:
            return action.height;
            break;
        default:
            return state;
    }
}

const frameReducer = combineReducers({
    contentHeight:setContentHeight,
    breadcrumb:setBreadcrumb,
    selectedTopMenuId:selectTopMenu,
    menu: menuOperate,
    loading: loadingOperate
})


export default frameReducer;

