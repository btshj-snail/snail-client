/**
 * Created by snail on 17-10-19.
 */
'use strict'

import ServerCtrl from '../../controller/serverController';

export const OPERATE_LOADING = "operateLoading";
export const SET_LOGIN_PERSON_INFO = "setLoginPersonInfo";



export function setLoginPersonInfo(user){
    return {
        type:SET_LOGIN_PERSON_INFO,
        user
    }
}


export function operateLoading(flag){
    return {
        type:OPERATE_LOADING,
        loading:flag
    }
}


export function loadCurrentUserInfo(){
    return function(dispatch){
        dispatch(operateLoading(true));

        return ServerCtrl.loadLoginInfo()
            .then(data=>{
                dispatch(setLoginPersonInfo(data));
                dispatch(operateLoading(false));

            })
            .catch(ex=>{
                dispatch(operateLoading(false));
            })
    }
}