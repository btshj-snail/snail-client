/**
 * Created by snail on 17-10-9.
 */
'use strict'
require('es6-promise').polyfill();
import 'whatwg-fetch';
import {runConfig} from '../config/sysConfig';

const snailUtils = {
    writeLog(message){
        if (runConfig.openLog) {
            console.log(message)
        }
    },
    fetch(url,{param,method="POST"}={}){

        let headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');

        let configJson = {
            method: method,
            headers: headers,
        }
        configJson.mode = "cors";
        configJson.credentials = 'include';

        configJson.body = JSON.stringify(param);

        snailUtils.writeLog(`请求[url:${url},param:${!!param?JSON.stringify(param):"无参数"}]`)

        return fetch(url,configJson)
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw {code: response.status, msg: ""};
                }
            })
            .then(outData => {
                let {code, data, msg} = outData;
                if (code != 1) {
                    throw {code, msg};
                }
                return data;
            })
            .catch(ex => {
                throw ex;
            })
    }
}

export default snailUtils;