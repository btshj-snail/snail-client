/**
 * Created by snail on 17-9-26.
 */
'use strict'

import React,{Component} from 'react';
import ReactDom,{render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import MainRouter from '../router/mainRouter';
import appReducer from '../reducer/appReducer';



let loggerMiddleware = createLogger();

let store = createStore(appReducer,applyMiddleware(thunkMiddleware,loggerMiddleware));

function App(){
    return (
        <Provider store={store}>
            <MainRouter/>
        </Provider>
    )
}


render(<App/>,document.getElementById("root"))