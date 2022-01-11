// ==UserScript==
// @name		YouTube Subscription Redirect
// @description	Automatically load the videos you actually care about
// @version		2.2.2
// @match		*://www.youtube.com/*
// @run-at		document-end
// @grant		none
// @license     MIT
// ==/UserScript==

(function () {
	"use strict";

	const location = window.location,
		  rePathname = /^\/(?:artist|channel|show|user)\/[A-Za-z0-9_-]*\/?$/,
		  reSearch = /^\?(?:annotation_id|app|feature|noredirect|reload|tab)(?:=.*)?$/;

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

	// Listen for yt-navigate-finish events and re-run the script when it fires
	window.addEventListener("yt-navigate-finish", main);
	// We also have to run the script at least once
	main();
}());