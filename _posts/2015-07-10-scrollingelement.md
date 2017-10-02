---
layout: note
title:  document.scrollingElement
date:   Friday, July 10, 2015
tags:   JavaScript, jQuery, scrollingElement
---

> **Update October 2017**
>
> Chrome now uses `document.documentElement` for `scrollTop`. Chrome, Safari, and Firefox support `document.scrollingElement`.

When discussing animating document scroll with jQuery, there are often examples given like this:

    $('html, body').animate({scrollTop: 200});

You’ll notice both the document and body elements are selected. This is due to inconsistencies between browsers. The standards mode approach is to use the `document.documentElement`, but quirks mode uses `document.body`.[^1]

While the approach to target both works, it can be potentially problematic. For example, if you have a `complete` callback on the animate, it will get called twice, once for each element:

    $('html, body').animate({
      scrollTop: 200
    }, {
      complete: function () {
        // I’m doing cool stuff after the animation.
        // Whoops! I’m doing it again.
      }
    });

This can prevented using something like Underscore’s `_.once()`, but ideally we could solve for the root issue.

To that end, there’s [a working draft](http://dev.w3.org/csswg/cssom-view/#dom-document-scrollingelement) for a new `document` attribute called [`scrollingElement`](https://developer.mozilla.org/en-US/docs/Web/API/document/scrollingElement). It would be used in lieu of `documentElement` and `body` as a consistent approach across browsers.

Unfortunately, there currently isn’t much support for `scrollingElement`[^2]. If you want to start using it today you could use [this function](https://gist.github.com/dperini/ac3d921d6a08f10fd10e) or [the polyfill](https://github.com/mathiasbynens/document.scrollingElement).

For now, I’m continuing target both elements.

[^1]: Firefox and Internet Explorer use the former, Safari and Chrome (and probably Opera) use the latter.
[^2]: At the time of writing, the next version of Chrome will support it (Chrome 44).
