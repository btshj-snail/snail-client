/**
 * Created by snail on 17-7-18.
 */
'use strict'

let {join,resolve} = require('path');
let fs = require('fs');

const webpack = require('webpack'),
    autoprefixer = require('autoprefixer'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

const lessToJs = require('less-vars-to-js');
const packageJsonPath = join(process.cwd(),"./package.json");
const packageJson = require(packageJsonPath);


const themeVariables = lessToJs(fs.readFileSync(join(process.cwd(),packageJson.theme),'utf8'));



function getLessUse(env) {
    return env != 'dev'
        ?
        ExtractTextPlugin.extract([
            {loader: 'css-loader'},
            {loader: 'postcss-loader',options:{plugins:[autoprefixer({browsers:['ie>=8','>1% in CN']})]}},//中国使用了超过1%的浏览器
            {loader: 'less-loader'}
        ])
        :
        ['style-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: false
                }
            },
            // {loader: 'postcss-loader',options:{plugins:[autoprefixer({browsers:['ie>=8','>1% in CN']})]}},
            {
                loader: 'less-loader',
                options: {
                    modules: false,
                    modifyVars:themeVariables
                }
            }]


}

const loader = function (env) {

    let lessUse = getLessUse(env);


    return {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components|static)/,
                include: /src/,
                use: [
                    {
                        // 编译新版本js语法为低版本js语法
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['babel-preset-es2015',{modules:false}],'react','stage-2'

                            ],

                            plugins: [
                                // 减少重复的编译后的辅助方法
                                'babel-plugin-transform-runtime',
                                ["import",{libraryName:"antd",style:true}]
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            // 第三方组件未以module方式引入css，所以不能在全局开启css module
                            modules: false
                        }
                    },
                    {loader: 'postcss-loader',options:{plugins:[autoprefixer({browsers:['ie>=8','>1% in CN']})]}}]
            },
            {
                test: /\.less$/,
                use: lessUse
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        // 编码为dataUrl的最大尺寸
                        limit: 10000,
                        // 输出路径，相对于publicPath
                        outputPath: 'imgs/',
                        name: '[name]_[hash:8].[ext]'
                    }
                }

            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?.*$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        limit: 10000,
                        mimetype: 'application/font-woff',
                        outputPath: 'font/',
                        name: '[name]_[hash:8].[ext]'
                    }
                }
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?.*$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        limit: 10000,
                        mimetype: 'application/octet-stream',
                        outputPath: 'font/',
                        name: '[name]_[hash:8].[ext]'
                    }
                }
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?.*$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        limit: 10000,
                        // mimetype: 'application/vnd.ms-fontobject',
                        outputPath: 'font/',
                        name: '[name]_[hash:8].[ext]'
                    }
                }
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?.*$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        limit: 10000,
                        mimetype: 'application/svg+xml',
                        outputPath: '/font/',
                        name: '[name]_[hash:8].[ext]'
                    }
                }
            },
            {
                test: /\.(htm|html)$/i,
                use: {loader:'html-withimg-loader'}
            },

        ]
    }
}


module.exports = loader;