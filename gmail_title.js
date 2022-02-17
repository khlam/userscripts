// ==UserScript==
// @name		gmail_title
// @description	Removes your email from gmail title. Source: https://stackoverflow.com/questions/413439/how-to-dynamically-change-a-web-pages-title
// @version		0.0
// @match       http://*.mail.google.com/*
// @match       https://*.mail.google.com/*
// @license     MIT
// ==/UserScript==

var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
var myObserver       = new MutationObserver (titleChangeDetector);
var obsConfig        = {
    //-- Subtree needed.
    childList: true, characterData: true, subtree: true
};

myObserver.observe (document, obsConfig);

function titleChangeHandler () {
    this.weInitiatedChange      = this.weInitiatedChange || false;
    if (this.weInitiatedChange) {
        this.weInitiatedChange  = false;
        //-- No further action needed
    }
    else {
        this.weInitiatedChange  = true;
        document.title = document.title.replace (/(?<=-).*(?=-)/g, "");
    }
}

function titleChangeDetector (mutationRecords) {

    mutationRecords.forEach ( function (mutation) {
        //-- Sensible, Firefox
        if (    mutation.type                       == "childList"
            &&  mutation.target.nodeName            == "TITLE"
        ) {
            titleChangeHandler ();
        }
        //-- WTF, Chrome
        else if (mutation.type                      == "characterData"
            &&  mutation.target.parentNode.nodeName == "TITLE"
        ) {
            titleChangeHandler ();
        }
    } );
}

//-- Probably best to wait for first title change, but uncomment the next line if desired.
//titleChangeHandler ();