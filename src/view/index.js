/**
 * Created by snail on 17-9-26.
 */
'use strict'

import React,{Component} from 'react';
import ReactDom,{render} from 'react-dom';
import MainRouter from '../router/mainRouter'

class App extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return (
            <MainRouter/>
        );
    }
}

render(<App/>,document.getElementById("app"))