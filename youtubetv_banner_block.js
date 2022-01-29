// ==UserScript==
// @name		youtubetv_banner_block
// @description	Removes youtube tv ad card
// @version		0.0
// @match		*://www.youtube.com/*
// @run-at		document-end
// @grant		none
// @license     MIT
// @run-at       document-end
// ==/UserScript==

let dialog = document.getElementsByTagName("tp-yt-paper-dialog")

dialog.forEach(e => {
    thread.style.display = "none"
})