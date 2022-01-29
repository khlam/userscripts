// ==UserScript==
// @name         subreddit_custom_css_block
// @version      0.0
// @description  Removes subreddit custom css for old.reddit.com
// @author       khlam
// @match        http://*.reddit.com/*
// @match        https://*.reddit.com/*
// @require      https://gist.githubusercontent.com/khlam/f85ee658005a45a99ba0147124c09c38/raw/704f92f52d7c4c1ed8e71f2c9311b46c2e6ea3cc/jQuery.v3.6.0
/* globals jQuery, $ */
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  $('link[rel=stylesheet][title="applied_subreddit_stylesheet"]').remove()
})();