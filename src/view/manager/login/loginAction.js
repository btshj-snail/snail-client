/**
 * Created by snail on 17-10-18.
 */

import ServerCtrl from "../../../controller/serverController";

export const OPERATE_LOADING_LOGIN = 'operateLoadingLogin';
export const SET_LOGIN_STATUS = 'setLoginStatus';

export const LoginStatus = {
    LOGIN_STATUS_SUCCESS:"loginStatusSuccess",
    LOGIN_STATUS_NO:"loginStatusNo",
    LOGIN_STATUS_FAILED:"loginStatusFailed"
}

export function loadingCtrl(loadingFlag){
    return {
        type:OPERATE_LOADING_LOGIN,
        flag:loadingFlag
    }
}

export function setLoginStatus(status){
    return {
        type:SET_LOGIN_STATUS,
        status
    }
}

export function loginIn(info={userName:"",passwd:""}){
    return function (dispatch){
        dispatch(loadingCtrl(true));
        return ServerCtrl.loginIn(info)
            .then(data=>{
                dispatch(loadingCtrl(false));
                dispatch(setLoginStatus(LoginStatus.LOGIN_STATUS_SUCCESS));
            })
            .catch(ex=>{
                dispatch(loadingCtrl(false));
                dispatch(setLoginStatus(LoginStatus.LOGIN_STATUS_FAILED));
            })

    }
}