// ==UserScript==
// @name		youtube_AIO
// @description	Removes youtube tv ad card and auto redirect youtube homepage to subscriptions.
// @version		0.0
// @match       http://*.youtube.com/*
// @match       https://*.youtube.com/*
// @exclude     https://www.youtube.com/feed/subscriptions
// @grant		none
// @license     MIT
// ==/UserScript==

// fix link auto-redirect. source: https://greasyfork.org/en/scripts/4298-youtube-url-cleaner/code
var newurl = "https://www.youtube.com/watch?"+document.URL.match(/v\=[^&]*/g); 
if (newurl != document.URL) location.replace(newurl);

// removes youtube tv ad card
try {
    let dialog = document.getElementsByTagName("ytd-mealbar-promo-renderer")
    if (dialog) {
        dialog.forEach(e => {
            thread.style.display = "none"
        })
    }
}catch(e){}

// auto redirect youtube homepage to subscriptions
function redirect_to_subs() {
    if (window.location.href === "https://www.youtube.com/" || window.location.href === "http://www.youtube.com/" ) {
        window.location.href = "https://www.youtube.com/feed/subscriptions"
    }
}

window.addEventListener("yt-navigate-finish", redirect_to_subs)

redirect_to_subs()
