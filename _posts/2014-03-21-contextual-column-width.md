---
layout: note
title:  Contextual Column Width
date:   Friday, March 21, 2014
tags:   CSS, LESS
---

Using a combination `:first-child` and `:nth-last-child`, it is possible to write selectors based on the number of child elements. This can be useful to set column width contextually when there are an unknown amount of columns in a layout.

This method comes from [Lea Verou’s blog](http://lea.verou.me/2011/01/styling-children-based-on-their-number-with-css3/):

<div data-gist="9944763"></div>