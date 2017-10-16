/**
 * Created by snail on 17-10-16.
 */
'use strict'

function uiOperate(state,action){
    return state;
}

function dataOperate(state={pageResList:[]},action){
    return state;
}


const pageResReducer = function(state,action) {
    return {
        uiOperate:uiOperate(state.ui,action),
        dataOperate:dataOperate(state.data,action)
    }
}

export default pageResReducer;