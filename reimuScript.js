// ==UserScript==
// @name         灵梦御所隐藏默认打开
// @namespace    https://github.com/Zhuxb-Clouds/TamperScript
// @version      0.0.2
// @description  优化事件钩子
// @author       Zhuxb
// @match        *://blog.reimu.net/archives/*
// @icon         https://blog.reimu.net/wp-content/uploads/2016/02/cropped-logo-192x192.png
// @run-at       document-end
// @grant        none
// @license MIT
// ==/UserScript==

document.addEventListener('DOMContentLoaded',function(){
    const pres = document.getElementsByTagName("pre");
    for (let i = 0; i< pres.length; i++) {
        setTimeout(()=>{
            console.log("pres",pres,i)
            pres[i].style.display = 'block';
        },0)
    }
});
