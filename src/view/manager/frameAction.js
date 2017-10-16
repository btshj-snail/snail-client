/**
 * Created by snail on 17-10-16.
 */

'use strict'

const GET_ALL_MENU_INFO = "getAllMenuInfo";
const GET_CHILDREN_AND_GRANDSON_MENU = "getChildrenAndGrandsonMenu";
const GET_CHILDREN_MENU = "getChildrenMenu";

/**
 * 获取所有菜单信息
 * @returns {{type: string}}
 */
export function getAllMenuInfo(){
    return {
        type:GET_ALL_MENU_INFO
    }
}

/**
 * 获取指定parentId下的所有菜单信息(包括子孙节点)
 * @param parentId
 * @returns {{type: string, parentId: *}}
 */
export function getChildrenAndGrandsonMenu(parentId){
    return {
        type:GET_CHILDREN_AND_GRANDSON_MENU,
        parentId
    }
}

/**
 * 获取指定parentId下的菜单信息(只包括子节点)
 * @param parentId
 * @returns {{type: string, parentId: *}}
 */
export function getChildrenMenu(parentId){
    return {
        type:GET_CHILDREN_MENU,
        parentId
    }
}