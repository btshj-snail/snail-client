/**
 * Created by snail on 17-10-9.
 */
'use strict'
import snailUtils from '../publicResource/libs/snailUtils';
import {runConfig} from '../publicResource/config/sysConfig';


const ServerCtrl = {
    loginIn(param){
        return snailUtils.fetch(runConfig.serverAddress + 'loginIn',{param})
            .then(data => {

                return data;
            })
            .catch(ex => {
                throw ex;
            })
    },
    loadLoginInfo(){

       return snailUtils.fetch(runConfig.serverAddress + 'loginInfo')
            .then(data => {
                return data;
            })
            .catch(ex => {
                throw ex;
            })
    }
}








export default  ServerCtrl;