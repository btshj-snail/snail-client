/**
 * Created by snail on 17-10-9.
 */
'use strict'
import snailUtils from '../publicResource/libs/snailUtils';
import {runConfig} from '../publicResource/config/sysConfig';


const ServerCtrl = {
    /**
     * 登录
     *
     * @param param {userName,passwd}
     * @returns {Promise.<T>|*|Promise|Promise<U>}
     */
    loginIn(param){
        return snailUtils.fetch(runConfig.serverAddress + 'loginIn', {param})
            .then(data => {

                return data;
            })
            .catch(ex => {
                throw ex;
            })
    },
    /**
     * 获取登录信息
     * @returns {Promise.<T>|*|Promise|Promise<U>}
     */
    loadLoginInfo(){

        return snailUtils.fetch(runConfig.serverAddress + 'loginInfo')
            .then(data => {
                return data;
            })
            .catch(ex => {
                throw ex;
            })
    },

    /**
     * 获取当前用户有权限查看的所有菜单
     * @returns {Promise.<T>|*|Promise|Promise<U>}
     */
    getMenusByCurrentUser(){
        return snailUtils.fetch(runConfig.serverAddress + 'getMenusByCurrentUser')
            .then(data => {
                return data;
            })
            .catch(ex => {
                throw ex;
            })
    },

    /**
     * 获取界面资源
     * @returns {*|Promise|Promise.<T>|Promise<U>}
     */
    getPageResList(){
        return snailUtils.fetch(runConfig.serverAddress+'getAllPageResInfo')
            .then(data=>{
                return data;
            })
            .catch(ex=>{
                throw ex;
            })
    },

    /**
     * 通过父节点获取界面资源信息
     * @returns {*|Promise|Promise.<T>|Promise<U>}
     */
    getPageResListByParentId(parentId,paging){
        return snailUtils.fetch(runConfig.serverAddress+'getPageResByParent',{param:{parentId,paging}})
            .then(data=>{
                return data;
            })
            .catch(ex=>{
                throw ex;
            })
    },

    /**
     * 新增界面资源信息
     * @param json
     * @returns {*|Promise|Promise.<T>|Promise<U>}
     */
    addPageResInfo(json){
        return snailUtils.fetch(runConfig.serverAddress+'addPageRes',{param:json})
            .then(data=>{
                return data;
            })
            .catch(ex=>{

            })
    }
}


export default  ServerCtrl;