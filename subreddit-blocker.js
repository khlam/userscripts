// ==UserScript==
// @name           Subreddit blocker
// @description    Hide given subreddits
// @author         khlam
// @match          http://*.reddit.com/*
// @match          https://*.reddit.com/*
// @version        1.0
// ==/UserScript==

let subreddits = [
    "MadeMeSmile",
    "AskReddit",
    "funny",
    "Damnthatsinteresting",
    "mildlyinfuriating",
    "Futurology",
    "gaming",
    "aww",
    "pics",
    "PublicFreakout",
    "HermanCainAward",
    "insaneparents",
    "TooAfraidToAsk",
    "NoStupidQuestions",
    "MapPorn",
    "antiwork",
    "technology",
    "nextfuckinglevel",
    "CryptoCurrency",
    "wallstreetbets",
    "Superstonk",
    "todayilearned",
    "CasualUK",
    "interestingasfuck",
    "teenagers",
    "Unexpected",
    "MurderedByWords",
    "JusticeServed",
    "ContagiousLaughter",
    "oddlyterrifying",
    "meirl",
    "SquaredCircle",
    "HolUp",
    "Tinder",
    "tumblr",
    "TaylorSwift",
    "PoliticalHumor",
    "NatureIsFuckingLit",
    "TrueOffMyChest",
    "memes",
    "vexillologycirclejerk",
    "vexillology",
    "MaliciousCompliance"
]

let subreddits_lowercase = subreddits.map(e => {
                                return e.toLowerCase();
                            })
  
let all_threads = document.querySelectorAll("[data-subreddit]");
console.log(subreddits_lowercase)
all_threads.forEach(thread => {
    let _subreddit = thread.getAttribute('data-subreddit').toLowerCase()
    if (subreddits_lowercase.includes(_subreddit)) {
        console.log("HIDING", thread)
        //thread.innerHTML = `Content from ${_subreddit} hidden.`
        thread.innerHTML = ""
    }   
})