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
if (window.location.href !== "https://www.youtube.com/feed/subscriptions") {
    var newurl = "https://www.youtube.com/watch?"+document.URL.match(/v\=[^&]*/g)
    if (newurl != document.URL) location.replace(newurl);
}

// auto redirect youtube homepage to subscriptions
function redirect_to_subs() {
    if (window.location.href !== "https://www.youtube.com/feed/subscriptions") {
        if (window.location.href === "https://www.youtube.com/" || window.location.href === "http://www.youtube.com/" ) {
            window.location.href = "https://www.youtube.com/feed/subscriptions"
        }
    }
}

window.addEventListener("yt-navigate-finish", redirect_to_subs)

redirect_to_subs()

const observer = new MutationObserver(function() {
    try {
        let dialog = document.getElementsByTagName("ytd-mealbar-promo-renderer")
        console.log(dialog[0])
        dialog[0].style.display = 'none'
    }catch(e){console.log("err", e)}

    let home_links = document.getElementsByTagName('a')
    home_links.forEach(_link => {
        if (_link.href === "/") {
            console.log(_link)
            _link.href = "https://www.youtube.com/feed/subscriptions"
        }
    })
})

observer.observe(document, {childList: true, characterData: true, subtree: true});
