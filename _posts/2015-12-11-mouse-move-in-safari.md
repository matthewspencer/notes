---
layout: note
title:  Safari’s weird mousemove
date:   Friday, December 11, 2015
tags:   JavaScript, keydown, mousemove, browser bugs
---

The implementation of Safari’s `mousemove` event differs in a notable way from Chrome and Firefox. After first mouse movement, Safari fires the event on key press of the modifier keys `ctrlKey`, `shiftKey`, `altKey`, and `metaKey`. For example, the following logs the event name in Safari without mouse movement.

<div data-gist="1844cb88925eef8c75c5" data-file="1-log-mousemove.js"></div>

Additionally Safari’s `MouseEvent` object uses the last known position values (i.e. `clientX`, `clientY`), which can create issues. To get around this behavior and ensure the mouse has actually moved, check against the last known position:

<div data-gist="1844cb88925eef8c75c5" data-file="2-check-for-position-change.js"></div>
