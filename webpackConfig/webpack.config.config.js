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
            // {storage:'js/aboutUs',entry:"aboutUs.js",template:'aboutUs'},
            // {storage:'js/livePlay',entry:"livePlay.js",template:'livePlay'},
            // {storage:'js/userEval',entry:"userEval.js",template:'userEval'},
            // {storage:'js/userEvalDetail',entry:"userEvalDetail.js",template:'userEvalDetail'},
            // {storage:'js/faq',entry:"faq.js",template:'faq'},
            // {storage:'js/download',entry:"download.js",template:'download'},
            // {storage:'js/download-c4',entry:"download-c4.js",template:'download-c4'},
            // {storage:'js/download-p21',entry:"download-p21.js",template:'download-p21'},
            // {storage:'js/downloadVideo',entry:"downloadVideo.js",template:'downloadVideo'},
            // {storage:'js/joinUs',entry:"joinUs.js",template:'joinUs'},
            // {storage:'js/news',entry:"news.js",template:'news'},
            // {storage:'js/spec-p21',entry:"spec-p21.js",template:'spec-p21'},
            // {storage:'js/overview-p21',entry:"overview-p21.js",template:'overview-p21'},
            // {storage:'js/spec-c4',entry:"spec-c4.js",template:'spec-c4'},
            // {storage:'js/price-c4',entry:"price-c4.js",template:'price-c4'},
            // {storage:'js/overview-c4',entry:"overview-c4.js",template:'overview-c4'},
            // {storage:'js/aerialPhoto-c4',entry:"aerialPhoto-c4.js",template:'aerialPhoto-c4'},
            // {storage:'js/joint-c4',entry:"joint-c4.js",template:'joint-c4'},
            // {storage:'js/browserHint',entry:"browserHint.js",template:'browserHint'},

            //mobile
            // {storage:'js/m_no_mobile',entry:"m_no_mobile.js",template:'m_no_mobile'},
            // {storage:'js/m_home',entry:"m_home.js",template:'m_home'},
            // {storage:'js/m_download',entry:"m_download.js",template:'m_download'},
            // {storage:'js/m_overview-c4',entry:"m_overview-c4.js",template:'m_overview-c4'},
            // {storage:'js/m_joint-c4',entry:"m_joint-c4.js",template:'m_joint-c4'},
            // {storage:'js/m_aerialPhoto-c4',entry:"m_aerialPhoto-c4.js",template:'m_aerialPhoto-c4'},
            // {storage:'js/m_spec-c4',entry:"m_spec-c4.js",template:'m_spec-c4'},
            // {storage:'js/m_price-c4',entry:"m_price-c4.js",template:'m_price-c4'},
            // {storage:'js/m_overview-p21',entry:"m_overview-p21.js",template:'m_overview-p21'},
            // {storage:'js/m_spec-p21',entry:"m_spec-p21.js",template:'m_spec-p21'},
            // {storage:'js/m_joinUs',entry:"m_joinUs.js",template:'m_joinUs'},
            // {storage:'js/m_joinUsDetail',entry:"m_joinUsDetail.js",template:'m_joinUsDetail'},
            // {storage:'js/m_news',entry:"m_news.js",template:'m_news'},
            // {storage:'js/m_downloadVideo',entry:"m_downloadVideo.js",template:'m_downloadVideo'},
            // {storage:'js/m_download-c4',entry:"m_download-c4.js",template:'m_download-c4'},
            // {storage:'js/m_download-p21',entry:"m_download-p21.js",template:'m_download-p21'},
            // {storage:'js/m_faq',entry:"m_faq.js",template:'m_faq'},
            // {storage:'js/m_userEval',entry:"m_userEval.js",template:'m_userEval'},
            // {storage:'js/m_userEvalDetail',entry:"m_userEvalDetail.js",template:'m_userEvalDetail'},
            // {storage:'js/m_livePlay',entry:"m_livePlay.js",template:'m_livePlay'},
            // {storage:'js/m_aboutUs',entry:"m_aboutUs.js",template:'m_aboutUs'},






            // {storage:'js/admin/login',entry:"admin/login.js",template:'admin/login'},
            // {storage:'js/admin/adminNews',entry:"admin/adminNews.js",template:'admin/adminNews'},
            // {storage:'js/admin/adminUserEval',entry:"admin/adminUserEval.js",template:'admin/adminUserEval'},



        ]
    }
}


module.exports = config;