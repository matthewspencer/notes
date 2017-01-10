---
layout: note
title:  "Debug: a simple console.log wrapper with line numbers"
date:   Wednesday, June 26, 2015
tags:   console, debug, JavaScript
---

Not all browsers support the `console` object in the same way or at all. While it is best to avoid running debugging code on a production site, there are times when you may need to (or think you do 😜). To get around these cross browser issues, the following helper function calls `console.log()` for you, first checking if the `console` object exits:

    function debug(args) {
      if (!window.console || !console.log) {
        return;
      }
      console.log(args);
    }

The issue with this function is that `console` shows the line and column numbers for this function definition instead of showing the line and column numbers of the caller. Not very helpful!

The following method resolves this by using `bind` and `call`, to act as if `console.log()` is getting called from the caller:

    var debug = function () {
      if (!window.console || !console.log) {
        return;
      }
      return Function.prototype.bind.call(console.log, console);
    } ();
