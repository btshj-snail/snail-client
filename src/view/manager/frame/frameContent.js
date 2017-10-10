/**
 * Created by snail on 17-10-9.
 */
'use strict'

import React,{Component} from 'react';

export default class FrameContent extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className="frame_content_inner">
                this is default page
            </div>
        )
    }
}