/**
 * Created by snail on 17-10-16.
 */
'use strict'

import {combineReducers,createStore} from 'redux';
import frameReducers from './frame/frameReducers';
import businessReducers from './business/businessReducers';

const appReducer = combineReducers({
    frame:frameReducers,
    business:businessReducers,
})


let stroe = createStore(appReducer);