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

  // Your code here...


  // find the div，some conditions
  /*
  class:
  ps-fixed z-nav-fixed

  z-index:

  5050 or other value greater than 1000 ???

  p content
  Your privacy

  Button

  Accept all cookies
  Customize settings

  */

  var panels = $('.ps-fixed.z-nav-fixed')
  if (panels.length < 1) return;

  panels.each(function () {
      var panel = $(this)

      var zindex = panel.css('z-index')
      if (zindex < 1000) return;


      // !!! Hide it
      panel.css("display", "none")
      return;

/*
   // more conditions ???
   const keywords = ["Your privacy",
                    "accept",
                    "cookie",
                    "cookies",
                    ]
   var pArr = panel.children('p')

   var matchsArr = []
   pArr.each(function (){
     var p = $(this)
     var text = p.text().toLowerCase()
     $(keywords).each(function (){
         debugger
       var aKeyword = this.toLowerCase()
       if (text.includes(aKeyword)) {
        var pair = [text, aKeyword]
        matchsArr.push(pair)
       }
     })
   })
   console.log(matchsArr)


   // buttons

*/

  })
})();