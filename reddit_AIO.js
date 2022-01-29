// ==UserScript==
// @name         reddit_AIO
// @version      0.0
// @description  Hides all posts from a subreddit by name (not case sensitive) or by regex, removes custom subreddit css, and force old reddit.
// @author       khlam
// @match        http://*.reddit.com/*
// @match        https://*.reddit.com/*
// @require      https://gist.githubusercontent.com/khlam/f85ee658005a45a99ba0147124c09c38/raw/704f92f52d7c4c1ed8e71f2c9311b46c2e6ea3cc/jQuery.v3.6.0
/* globals jQuery, $ */
// @run-at       document-end
// @grant        none
// ==/UserScript==

const regex = [/porn/, /meme/, /anime/, /fucking/, /circlejerk/, /twitter/, /ask/, /comedy/, /tiktok/]

const blacklisted_subs = [ // not case sensitive
    "MadeMeSmile",
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
    "NoStupidQuestions",
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
    "vexillology",
    "MaliciousCompliance",
    "Whatcouldgowrong",
    "facepalm",
    "shittymoviedetails",
    "moviedetails",
    "iamatotalpieceofshit",
    "sports",
    "baseball",
    "nba",
    "coolguides",
    "Cringetopia",
    "blursedimages",
    "TwoXChromosomes",
    "ToiletPaperUSA",
    "mildlyinteresting",
    "marvelstudios",
    "Genshin_Impact",
    "CozyPlaces",
    "dataisbeautiful",
    "technicallythetruth",
    "TikTokCringe",
    "awfuleverything",
    "AdviceAnimals",
    "greentext",
    "IllegallySmolCats",
    "AnimalsBeingBros",
    "CrappyDesign",
    "canada",
    "confidentlyincorrect",
    "cats",
    "IdiotsInCars",
    "me_irl",
    "shitposting",
    "WinStupidPrizes",
    "gifsthatkeepongiving",
    "trashy",
    "oddlysatisfying",
    "AbruptChaos",
    "Eyebleach",
    "Wellthatsucks",
    "ShitPostCrusaders",
    "atheism",
    "bi_irl",
    "neoliberal",
    "nonononoyes",
    "amcstock",
    "stocks",
    "FuckYouKaren",
    "whenthe",
    "rarepuppers",
    "rareinsults",
    "AnimalsBeingDerps",
    "WatchPeopleDieInside",
    "SubredditDrama",
    "HumansBeingBros",
    "OutOfTheLoop",
    "KidsAreFuckingStupid",
    "BeAmazed",
    "PlayStationPlus",
    "AnimalCrossing",
    "BestofRedditorUpdates",
    "WitchesVsPatriarchy",
    "SelfAwarewolves",
    "OldSchoolCool",
    "Showerthoughts",
    "tifu",
    "sadcringe",
    "explainlikeimfive",
    "WorkReform",
    "LifeProTips",
    "LateStageCapitalism",
    "byebyejob",
    "WhatsWrongWithYourDog",
    "LeopardsAteMyFace",
    "ABoringDystopia",
    "Instagramreality",
    "Zoomies",
    "maybemaybemaybe",
    "assholedesign",
    "woahdude",
    "hmm",
    "UNBGBBIIVCHIDCTIICBG",
    "natureismetal",
    "ThatsInsane",
    "WhatsWrongWithYourCat",
    "AbsoluteUnits",
    "therewasanattempt",
    "unpopularopinion",
    "Catswithjobs",
    "perfectlycutscreams",
    "JoeRogan",
    "YouShouldKnow",
    "gatekeeping",
    "LivestreamFail",
    "Bitcoin",
    "MurderedByAOC",
    "BrandNewSentence",
    "ThatLookedExpensive",
    "UpliftingNews",
    "worldnewsvideo",
    "clevercomebacks",
    "instant_regret",
    "FunnyandSad",
    "onguardforthee",
    "blursed_videos",
    "Perfectfit",
    "bonehurtingjuice",
    "SuddenlyGay",
    "im14andthisisdeep",
]

let blacklisted_subs_lower = blacklisted_subs.map(e => { return e.toLowerCase() }) // all blacklisted subreddits to lowercase

let all_threads = document.querySelectorAll("[data-subreddit]")

all_threads.forEach(thread => {
    let this_sub = thread.getAttribute('data-subreddit').toLowerCase() // post's subreddit to lowercase

    // if subreddit is in blacklist or if subreddit matches regex then hide it
    if ((blacklisted_subs_lower.includes(this_sub) === true) || regex.some(function(r) { return r.test(this_sub)}) === true) { 
        console.log("HIDING", thread)
        //thread.innerHTML = `Content from ${this_sub} hidden.`
        thread.style.display = "none"
    }
})

// force old reddit | by: /u/101743
var url = window.location.host;
if (url.match("old.reddit.com") === null) {
    url = window.location.href;
    if  (url.match("//www.reddit") !== null){
        url = url.replace("//www.reddit", "//old.reddit");
    } else {
    	return;
    }
    //console.log(url);
    window.location.replace(url);
}

// remove subreddit custom css
(function() { 
    'use strict';
    $('link[rel=stylesheet][title="applied_subreddit_stylesheet"]').remove()
})();