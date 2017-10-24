/**
 * Created by snail on 17-10-16.
 */

'use strict'
import ServerCtrl from '../../controller/serverController';


export const SET_MENU_LIST = "setMenuList";
export const SELECT_TOP_MENU = "selectTopMenu";
export const SET_BREADCRUMB = "setBreadcrumb";
export const SET_CONTENT_HEIGHT = "setContentHeight";

export function getContentHeight(){
    return document.body.clientHeight - 50 -45- 45;
}

export function setContentHeight(height){
    return {
        type:SET_CONTENT_HEIGHT,
        height
    }
}

export function setBreadcrumb(ary){
    return {
        type:SET_BREADCRUMB,
        breadcrumb:ary
    }
}



export function setMenuList(list){
    return {
        type:SET_MENU_LIST,
        list,
    }
}

export function selectTopMenu(id){
    return {
        type:SELECT_TOP_MENU,
        id
    }
}




/**
 * 获取所有菜单信息
 * 当前登录人员有权限查看的所有菜单
 * @returns {{type: string}}
 */
export function getMenusByCurrentUser(){
    return function (dispatch){

        return ServerCtrl.getMenusByCurrentUser()
            .then(data=>{
                dispatch(setMenuList(data));
            })
            .catch(ex=>{
                throw ex;
            })

    }
}


