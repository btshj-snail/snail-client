/**
 * Created by snail on 17-7-19.
 */
'use strict'


const devServer = function(env){
    return {
        contentBase:"/",
        publicPath:"/static",
        host:"0.0.0.0",
        inline:true,
        port: 8083,
        historyApiFallback: true,
        disableHostCheck:true
    }
}

module.exports = devServer;