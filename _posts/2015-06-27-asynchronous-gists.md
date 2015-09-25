---
layout: note
title:  Asynchronous gist embeds
date:   Saturday, June 27, 2015
tags:   gist, GitHub, JavaScript, AJAX, jQuery
---

I discovered recently that gist embeds use `document.write()`. This is _fine_ in some cases, but it doesn’t work at all with asynchronously-loaded content. This is because `document.write()` can’t be used once the document has completed loading. `document.write()` is also blocking meaning that the document cannot proceed to load until the write is complete. If gist.github.com is slow to respond, your site will load slowly.

The good news is that we can get around this. Each gist has a JSON endpoint, which we can use to load the gist asynchronously. The following is a simple example using jQuery:

<div data-gist="5968c0064b1ea73c4f42"></div>

For a more flexible approach, please check out this [jQuery plugin](https://github.com/matthewspencer/gist) that I wrote. This site you are reading now uses it. That gist right there.