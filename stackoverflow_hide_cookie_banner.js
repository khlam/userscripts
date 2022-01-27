// ==UserScript==
// @name         Hide stackoverflow.com privacy panel
// @name:zh-CN   StackoverflowCookie
// @version      0.5
// @description  Many websites show panel on the left down corner to ask us to accept cookies. But it will connect google API which is NOT reachable from our country,
//               and the panel will never disappear. This simple script will hide the panel directly without any tips!
// @description:
// @author       Andy Cui
// @match        *://superuser.com/*
// @match        *://stackoverflow.com/*
// @match        *://askubuntu.com/*
// @match        *://serverfault.com/*
// @match        *://*.stackexchange.com/*

// @require      https://gist.githubusercontent.com/khlam/f85ee658005a45a99ba0147124c09c38/raw/704f92f52d7c4c1ed8e71f2c9311b46c2e6ea3cc/jQuery.v3.6.0
/* globals jQuery, $, waitForKeyElements */
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  
  var panels = $('.ps-fixed.z-nav-fixed')
  if (panels.length < 1) return;

  panels.each(function () {
      var panel = $(this)

      var zindex = panel.css('z-index')
      if (zindex < 1000) return;


      // !!! Hide it
      panel.css("display", "none")
      return;
  })
})();