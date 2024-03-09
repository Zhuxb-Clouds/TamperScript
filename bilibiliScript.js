// ==UserScript==
// @name         B站中键修复
// @namespace    http://tampermonkey.net/
// @version      2024-03-09
// @description  通过更改a标签的href属性，使得中键点击可以在新标签页打开视频。
// @author       Zhuxb
// @match        https://www.bilibili.com/video/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  const targetMap = {
    "jump-link search-word" : (item)=>{
      return item.getAttribute('data-url');
    },
    "jump-link user": (item)=>{
      return 'https://space.bilibili.com/'+item.getAttribute('data-user-id');
    }
  }
  var timer = setInterval(function(){
    Object.keys(targetMap).forEach((key)=>{
      var elements = document.getElementsByClassName(key);
      if(elements.length === 0) return;
      console.log("elements",elements);
      elements = Array.from(elements);
      elements.forEach(item => {
        item.href = targetMap[key](item);
        console.dir(item);
      });
    })
  }, 5000);

})();
