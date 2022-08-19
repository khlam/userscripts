# userscripts

Simple scripts for reducing distractions.

Tested with [violentmonkey (github)](https://github.com/violentmonkey/violentmonkey).

| For | Script      | Description |
| --- | ----------- | ----------- |
| reddit.com | [reddit_AIO.js](reddit_AIO.js) | Hides all posts from a subreddit by name (not case sensitive) or by regex, removes custom subreddit css, and force old reddit. |
| Stack Exchange sites | [stackoverflow_cookie_banner_block.js](stackoverflow_cookie_banner_block.js) | Removes accept cookie banner from superuser.com, stackoverflow.com, askubuntu.com, serverfault.com and stackexchange.com |
| twitch.tv | [twitch_front_carousel_block.js](twitch_front_carousel_block.js) | Blocks twitch frontpage autoplaying stream by setting its source to null. |
| youtube.com | [youtube_AIO.js](youtube_AIO.js) | Removes youtube tv ad card and auto redirect youtube homepage to subscriptions. |
| mail.google.com | [gmail_title.js](gmail_title.js) | Hides gmail address in tab title. |
| twitter.com | [twitter_popup.js](twitter_popup.js) | Removes twitter sign up popup
 
### misc
Q: "Why use these scripts when browser addon *x* has the same feature?"

A: Personal workflow and trust. I think one browser addon + 4 small JS scripts (which do not auto-update) are easier to audit and maintain compared to 4 browser addons.