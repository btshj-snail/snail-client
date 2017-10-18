/**
 * Created by snail on 17-10-16.
 */
'use strict'

import {combineReducers,createStore} from 'redux';
import frameReducers from './frameReducers';
import businessReducers from './businessReducers';

const appReducer = combineReducers({
    frame:frameReducers,
    business:businessReducers,
})


export default appReducer;