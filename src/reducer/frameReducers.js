/**
 * Created by snail on 17-10-16.
 */
'use strict'

import {combineReducers} from 'redux';
import frameReducer from '../view/manager/frameReducer';
import loginReducer from '../view/manager/login/loginReducer';
import loginRouteReducer from '../publicResource/components/loginRouteReducer';
import pageResReducer from '../view/manager/system/acl/pageResMg/pageResMgReducer';

import {SET_PAGE_CONTENT_LOADING} from '../action/systemAction';

const systemReducer = (state = {systemLoading: false}, action) => {
    switch (action.type) {
        case SET_PAGE_CONTENT_LOADING :
            return Object.assign({}, state, {systemLoading: action.flag});
            break;

        default:
            return state;
    }
}

const frameReducers = combineReducers({
    system:systemReducer,
    pageResMg:pageResReducer,
    frame:frameReducer,
    login:loginReducer,
    loginInfo:loginRouteReducer
});



export default frameReducers;

