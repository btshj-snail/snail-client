/**
 * Created by snail on 17-10-24.
 */
'use strict'


export const SET_PAGE_CONTENT_LOADING = 'setPageContentLoading';


export function setPageContentLoading(flag){
    return {
        type:SET_PAGE_CONTENT_LOADING,
        flag
    }
}

