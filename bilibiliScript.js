// ==UserScript==
// @name         B站中键修复
// @namespace    https://github.com/Zhuxb-Clouds/TamperScript
// @version      0.0.1
// @description  通过更改a标签的href属性，使得中键点击可以在新标签页打开视频。
// @author       Zhuxb
// @match        https://www.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// @license MIT
// ==/UserScript==

(function () {
  "use strict";
  const targetMap = {
    "jump-link search-word": (item) => {
      return item.getAttribute("data-url");
    },
    "jump-link user": (item) => {
      return "https://space.bilibili.com/" + item.getAttribute("data-user-id");
    },
  };
  var timer = setInterval(function () {
    Object.keys(targetMap).forEach((key) => {
      var elements = document.getElementsByClassName(key);
      if (elements.length === 0) return;
      elements = Array.from(elements);
      elements.forEach((item) => {
        if (item.href) return;
        item.href = targetMap[key](item);
      });
    });
  }, 5000);
})();
