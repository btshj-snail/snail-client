/**
 * Created by snail on 17-10-18.
 */

import {OPERATE_LOADING,SET_LOGIN_STATUS,LoginStatus} from './loginAction';


const initState = {
    loading :false,
    loginStatus:LoginStatus.LOGIN_STATUS_NO,
}

const loginReducer = function (state=initState,action){
    switch(action.type){
        case OPERATE_LOADING :
            return Object.assign({},state,{loading:action.flag});break;
        case SET_LOGIN_STATUS:
            return Object.assign({},state,{loginStatus:action.status});break;
        default:
            return state;
    }
}

export default loginReducer;