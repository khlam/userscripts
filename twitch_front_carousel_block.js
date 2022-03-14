// ==UserScript==
// @name         twitch_front_carousel_block
// @version      0.0
// @description  Blocks twitch frontpage auto-playing stream by setting its source to null. Refresh page if stream you want to play has an error.
// @author       khlam
// @match        http://*.twitch.tv/*
// @match        https://*.twitch.tv/*
// @grant        none
// @license      MIT
// ==/UserScript==

const observer = new MutationObserver(function() {
    try {
        if (window.location.href === "https://www.twitch.tv/" || window.location.href === "http://www.twitch.tv/" ) {
        let i = 0
        let interval = setInterval(() => {
            let video = document.querySelector("video")
            console.log(i)
            if (video.getAttribute('src') != null) {
                console.log("setting video src to null...")
                video.setAttribute('src', null)
                clearInterval(interval)
            }
            i += 1
            if (i === 100) {
                clearInterval(interval)
            }
            }, 100)
        }
    }catch(e){console.log("err", e)}

    try {
        // remove twitch begging for you to sign in
        document.getElementById("twilight-sticky-footer-root").style.display = "none"
    }catch(e){console.log("err", e)}
})

observer.observe(document, {childList: true, characterData: true, subtree: true})
