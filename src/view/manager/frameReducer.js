/**
 * Created by snail on 17-10-16.
 */
'use strict'

import {combineReducers} from 'redux';
import {GET_ALL_MENU_INFO,GET_CHILDREN_AND_GRANDSON_MENU,GET_CHILDREN_MENU,GET_NO_PARENT_MENU} from './frameAction';


function getNoParentMenu(state=[],action){
    return state;
}

function getSideMenu(state=[],action){
    return state;
}

function menuOperate(state={topMenuList:[],sideMenuList:[]},action){
    switch (action.type){
        case GET_NO_PARENT_MENU :
            return getNoParentMenu(state.topMenuList,action);break;
        case GET_CHILDREN_AND_GRANDSON_MENU :
            return getSideMenu(state.sideMenuList,action);break;
        default:
            return state;
    }
}

const frameReducer = combineReducers({
    menu:menuOperate
})



export default frameReducer;

