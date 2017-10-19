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
    }
}


export default  ServerCtrl;