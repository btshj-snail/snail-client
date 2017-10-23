/**
 * Created by snail on 17-10-16.
 */
'use strict'

import {combineReducers} from 'redux';
import frameReducer from '../view/manager/frameReducer';
import loginReducer from '../view/manager/login/loginReducer';
import loginRouteReducer from '../publicResource/components/loginRouteReducer';
import pageResReducer from '../view/manager/system/acl/pageResMgReducer';


const frameReducers = combineReducers({
    pageResMg:pageResReducer,
    frame:frameReducer,
    login:loginReducer,
    loginInfo:loginRouteReducer
});



export default frameReducers;

