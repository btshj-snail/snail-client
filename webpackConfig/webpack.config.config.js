/**
 * Created by snail on 17-7-18.
 *
 *
 * FILE_CONFIG 字段详解
 * storage 编译后的js文件 生成位置以及名称.当然路径是由output中进行配置的
 * entry  入口文件
 * template 对应的ejs模板文件名称.
 *
 */
'use strict'

const path = require('path');
const p_path = path.resolve(__dirname, "../");
const outPath = path.resolve(p_path, "./static");
const htmlTemplatePath = path.resolve(p_path,'./src/publicResource/htmlTemplate/')
console.log("工程路径:" + p_path)
console.log("出口文件路径:" + outPath)

const config = function (env) {
    return {
        PROJECT_PATH: p_path,
        SOURCE_PATH: './src/view/',
        HTML_TEMPLATE_PATH:htmlTemplatePath,
        OUTPUT_PATH: outPath,
        // FILE_CONFIG:'./src/main.js'
        FILE_CONFIG:[
            {storage:'js/index',entry:"index.js",template:'index'},
        ]
    }
}


module.exports = config;