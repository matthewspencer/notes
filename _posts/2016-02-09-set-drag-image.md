---
layout: note
title:  setDragImage Edge Cases
date:   Tuesday, February 9, 2016
tags:   JavaScript, Dragging
---

### What this is

The [HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API) is an important tool for building dynamic interfaces, but it is inconsistently implemented across browsers (which can be [_quite frustrating_](http://www.quirksmode.org/blog/archives/2009/09/the_html5_drag.html)). The goal of this post is to enumerate some of these rough edges, specifically with regards to the [`setDragImage`](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/setDragImage) method on the `dataTransfer` object[^1].

### Firefox and the DOM

When using a custom element for the drag image, Firefox prefers it to be in the DOM. In fact, it won’t display it otherwise. Safari and Chrome permit this, but they don’t like it. They’ll often pick up weird artifacts in the drag image from nearby elements.

Unfortunately, there isn’t a good way to test for this other than looking at the browser’s user agent[^2]:

<div data-gist="77ca95e1c67ee877df9f" data-file="1-is-firefox.js"></div>

It works like this, on `dragstart` add the element to the DOM for Firefox:

<div data-gist="77ca95e1c67ee877df9f" data-file="2-dragstart.js"></div>

And on `dragend` clean-up the drag image:

<div data-gist="77ca95e1c67ee877df9f" data-file="3-dragend.js"></div>

### Using an image

To use an image (or background image) for the drag image, it must first be downloaded. Otherwise the drag image appears blank on drag. Images can be prefetched using an image element:

<div data-gist="77ca95e1c67ee877df9f" data-file="4-prefetch.js"></div>

Also worth noting, animated gifs do not animate when set as the drag image.

### Positioning the drag image

The latter two arguments for `setDragImage` are the x and y offset of the drag image relative to the cursor. Often examples set these to a specific number like `0`, but this differs from the normal `img` drag behavior which sets the drag image relative to the cursor position on mousedown.

To recreate this behavior, use `getBoundingClientRect()` to calculate the offset position:

<div data-gist="77ca95e1c67ee877df9f" data-file="5-offset.js"></div>

### Maximum drag image dimensions

Anecdotally these are the largest pixel dimensions for a drag image before cropping occurs:

400×400 - Safari/Chrome   
700×450 - Firefox

Noting this, it is important to scale the dimension of the drag image as well as its offset position. The following scales the `clientRect` to the smallest maximum:

<div data-gist="77ca95e1c67ee877df9f" data-file="6-scaled-clientrect.js"></div>

### Firefox and window.devicePixelRatio

Unlike Safari and Chrome, Firefox sees the actual dimensions not the retina-scaled dimensions. Multiply the offsets by the `devicePixelRatio`, otherwise Firefox’s offset is always off on retina screens[^3]:

<div data-gist="77ca95e1c67ee877df9f" data-file="7-retina.js"></div>

### Firefox and the drag event

Safari and Chrome provide dynamic mouse position on the `drag` event. Firefox does not ([wontfix](https://bugzilla.mozilla.org/show_bug.cgi?id=505521)). To get around this just use the `dragover` event which provides the mouse position in all browsers.

### Other notes

- Firefox will not allow you to drag an element without the `draggable` attribute.
- The drag image element accepts limited styling.

[^1]: `setDragImage` is used to set a custom ghosted image that appears while a `draggable` element is being dragged. This post glosses over the basics of its usage, which is covered quite thoroughly in [_Setting a custom ghost image when using HTML5 drag and drop_](http://www.kryogenix.org/code/browser/custom-drag-image.html).
[^2]: It would better to have a feature test for this. I’m open to suggestions.
[^3]: Again, open to suggestions for feature detection in lieu of user agent detection.
