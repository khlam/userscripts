// ==UserScript==
// @name         twitch_front_carousel_block
// @version      0.0
// @description  Removes twitch frontpage carousel
// @author       khlam
// @match        http://www.twitch.tv/
// @match        https://www.twitch.tv/
// @grant        none
// @run-at       document-end
// ==/UserScript==

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


