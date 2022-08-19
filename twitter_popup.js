// ==UserScript==
// @name         Twitter Login Popup Remover
// @version      0.2.4
// @description  Allows you to browse Twitter freely without logging in. src: https://greasyfork.org/en/scripts/441222-twitter-login-popup-remover/code
// @author       npc tim
// @match        *://*.twitter.com/*
// @grant        none
// @license      MIT
// ==/UserScript==
 
(function() {
  'use strict';
 
  let url = window.location.href;
  let urlType = url.substring(8,14);
 
  if(urlType == 'mobile') {
    // Execute this script on the mobile version of the site
    // Check if the banner is loaded. If it is, then remove the banner.
    // Check every 100 milliseconds whether or not the banner appeared. Once it has appeared, stop checking for it.
    let banner = document.getElementsByClassName("css-1dbjc4n r-l5o3uw");
    let bannerInterval = setInterval(function() {
      try {
        banner[0].remove();
        clearInterval(bannerInterval);
      }
      catch(err) {
      }
    }, 100);
 
    // Check if the sign up prompt has appeared. If it is, then remove the sign up prompt. Also add scrolling capabilites back.
    // Check every 250 milliseconds whether or not the prompt appeared.
    let prompt1 = document.getElementsByClassName("css-1dbjc4n r-1awozwy r-1kihuf0 r-18u37iz r-1pi2tsx r-1777fci r-1pjcn9w r-xr3zp9 r-1xcajam r-ipm5af r-g6jmlv");
    let promptInterval = setInterval(function() {
      try {
        let top = document.querySelector('html').style.top;
        document.querySelector('html').style.overflowY='scroll';
        prompt1[0].remove();
        document.querySelector('html').style.removeProperty('position');
        document.querySelector('html').scrollTop = Math.abs(parseInt(top));
      }
      catch(err) {
      }
    }, 250);
  }
  else {
    // Execute this script on the desktop version of the site
    // Check if the banner is loaded. If it is, then remove the banner.
    // Check every 100 milliseconds whether or not the banner appeared. Once it has appeared, stop checking for it.
    let banner = document.getElementsByClassName("css-1dbjc4n r-l5o3uw");
    let bannerInterval = setInterval(function() {
      try {
        banner[0].remove();
        clearInterval(bannerInterval);
      }
      catch(err) {
      }
    }, 100);
 
    // Check if the sign up prompt has appeared. If it is, then remove the sign up prompt. Also add scrolling capabilites back.
    // Check every 250 milliseconds whether or not the prompt appeared.
    let prompt1 = document.getElementsByClassName("css-1dbjc4n r-1awozwy r-1kihuf0 r-18u37iz r-1pi2tsx r-1777fci r-1pjcn9w r-xr3zp9 r-1xcajam r-ipm5af r-g6jmlv");
    let promptInterval = setInterval(function() {
      try {
        document.querySelector('html').style.overflowY='scroll';
        prompt1[0].remove();
      }
      catch(err) {
      }
    }, 250);
  }
})();