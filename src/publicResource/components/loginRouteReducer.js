/**
 * Created by snail on 17-10-19.
 */
'use strict'

import {OPERATE_LOADING, SET_LOGIN_PERSON_INFO} from './loginRouteAction';

const initState = {
    loading: true,
    currentUser: {},
}

const loginRouteReducer = function (state = initState, action) {

    switch (action.type) {
        case OPERATE_LOADING :
            return Object.assign({}, state, {loading: action.loading});
            break;
        case SET_LOGIN_PERSON_INFO:
            return Object.assign({},state,{currentUser:action.user});
            break;
        default:
            return state;
    }

}

export default loginRouteReducer;