// ==UserScript==
// @name		youtube_AIO
// @description	Removes youtube tv ad card and auto redirect youtube homepage to subscriptions.
// @version		0.0
// @match       http://*.youtube.com/*
// @match       https://*.youtube.com/*
// @grant		none
// @license     MIT
// ==/UserScript==

// fix link auto-redirect. source: https://greasyfork.org/en/scripts/4298-youtube-url-cleaner/code
var newurl = "https://www.youtube.com/watch?"+document.URL.match(/v\=[^&]*/g); 
if (newurl != document.URL) location.replace(newurl);

// removes youtube tv ad card
try {
    let dialog = document.getElementsByTagName("tp-yt-paper-dialog")
    if (dialog) {
        dialog.forEach(e => {
            thread.style.display = "none"
        })
    }
}catch(e){}

// auto redirect youtube homepage to subscriptions
const location = window.location
const rePathname = /^\/(?:artist|channel|show|user)\/[A-Za-z0-9_-]*\/?$/
const reSearch = /^\?(?:annotation_id|app|feature|noredirect|reload|tab)(?:=.*)?$/

function main() {
    if (location.search || location.hash) {
        if (reSearch.test(location.search)) location.search = "";
        if (location.search === "") main();
    }
    else {
        if (location.pathname === "/") location.replace("feed/subscriptions");
        if (rePathname.test(location.pathname)) location.replace(location + "/videos");
    }
}

window.addEventListener("yt-navigate-finish", main)

main()
