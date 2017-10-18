/**
 * Created by snail on 17-10-16.
 */
'use strict'

import {combineReducers} from 'redux';
import frameReducer from '../view/manager/frameReducer';
import loginReducer from '../view/manager/login/loginReducer';


const frameReducers = combineReducers({
    frame:frameReducer,
    login:loginReducer,
});



export default frameReducers;

