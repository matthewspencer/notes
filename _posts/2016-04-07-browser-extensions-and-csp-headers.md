---
layout: note
title:  Browser extensions and restrictive CSP headers
date:   Thursday, April 7, 2016
tags:   JavaScript, Chrome, Safari, Extensions, CSP, Security
---

Recently I’ve been working on browser extensions for Chrome and Safari. One of the major hurdles was dealing with sites that have restrictive [Content Security Policy](http://www.html5rocks.com/en/tutorials/security/content-security-policy/) (CSP) headers. CSP headers are used to prevent XSS attacks or code injection from unauthorized sources. Some sites (e.g. [twitter.com](/uploads/2016/04/07/twitter-content-security-policy.png)) make full use of them. And, the thing is, when you boil it down, browser extensions are just that, code injection.

Let’s say you wanted to load a stylesheet from your server, you’re likely to get [this gnarly console error](/uploads/2016/04/07/csp-error.png). This is the browser telling you that they honoring this site’s CSP. This is good and important, but is frustrating for our purposes.

One approach that I’ve been using for Chrome is using the browser extension to rewrite CSP headers. I’m going to show how this is possible here for posterity, but, spoiler, this is a bad idea and you shouldn’t do this and there are crazy caveats and I’m going to give you a better workaround!

Chrome has an API ([`chrome.webRequest`](https://developer.chrome.com/extensions/webRequest)) which gives you, the browser extension developer, access to every request the browser makes. To enable access to this API add `webRequest` and `webRequestBlocking` to the `permissions` array in manifest.json:

<div data-gist="a48f17eb2db3a1c5c0b1dcf625e6a312" data-file="1-manifest-webrequest.json"></div>

Additionally, the `webRequest` API is only available for the older (deprecated?) [Background Pages](https://developer.chrome.com/extensions/background_pages). To switch from the newer, more performant [Event Pages](https://developer.chrome.com/extensions/event_pages) set `persistent` to `true` in `background` object in manifest.json:

<div data-gist="a48f17eb2db3a1c5c0b1dcf625e6a312" data-file="2-manifest-persistent.json"></div>

Okay, now let’s hook into the `chrome.webRequest.onHeadersReceived` event and rewrite some CSP headers!

<div data-gist="a48f17eb2db3a1c5c0b1dcf625e6a312" data-file="3-on-headers-received.js"></div>

Pretty wild right? Well this _works_, but there are said caveats. The major drawback to this approach is that **only one installed extension can rewrite headers**[^1]. This would only work for the most recently installed extension, so there are no assurances that doing something gross like this would even work 100% of the time. And this only works for Chrome, there are no parallels for Safari.

Now I said there was a better workaround. It is somewhat less gross and works for both extensions! Reading through Apple’s (somewhat inscrutable) documentation I discovered Safari extension code is sandboxed. This means the browser considers it safe and doesn’t consider CSP headers for code loaded from the extension. This mean an extension file could be used as a proxy to load files off of our server.

The idea is to use a content (or injected content) script to load an “unsafe” iframe inside of a “safe” iframe.[^2] Below is the basic idea, but it can be accomplished in different ways:

The safe iframe looks like this and gets appended to the current page:

<div data-gist="a48f17eb2db3a1c5c0b1dcf625e6a312" data-file="4-iframe.html"></div>

The linked script looks like this and is used to load the unsafe iframe[^3]:

<div data-gist="a48f17eb2db3a1c5c0b1dcf625e6a312" data-file="5-iframe.js"></div>

Then inside the extension’s background (or global) script:

<div data-gist="a48f17eb2db3a1c5c0b1dcf625e6a312" data-file="6-iframe-usage.js"></div>

Side note: Chrome needs these files to be whitelisted in the `web_accessible_resources` array in manifest.json:

<div data-gist="a48f17eb2db3a1c5c0b1dcf625e6a312" data-file="7-manifest-accessible-resources.json"></div>

So the essence of this approach: a safe iframe is loaded directly from the extension’s directory, its contents are deemed safe by the browser, magic. Hopefully this helps you in your future extension explorations.

[^1]: The [Chrome extension error](/uploads/2016/04/07/only-one.png) indicating as much.
[^2]: This idea was definitely inspired by advertisers and their “safe” iframes.
[^3]: Chrome doesn’t think inline JavaScript is safe so it is loaded from an external file.
