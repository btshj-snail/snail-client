/**
 * Created by snail on 17-10-16.
 */
'use strict'

import {combineReducers} from 'redux';
import pageResReducer from './acl/pageResReducer';



const frameReducers = combineReducers({
    pageRes:pageResReducer,
});



export default frameReducers;

