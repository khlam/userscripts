// ==UserScript==
// @name         Old Reddit
// @description  Force old.reddit.com regardless of signed-in status
// @author       /u/101743
// @version      1.0.1
// @match        http://*.reddit.com/*
// @match        https://*.reddit.com/*
// @license      GPL-2.0-or-later
// @run-at       document-start
// ==/UserScript==
 
var url = window.location.host;

if (url.match("old.reddit.com") === null) {
    url = window.location.href;
    if  (url.match("//www.reddit") !== null){
        url = url.replace("//www.reddit", "//old.reddit");
    } else {
    	return;
    }
    //console.log(url);
    window.location.replace(url);
}