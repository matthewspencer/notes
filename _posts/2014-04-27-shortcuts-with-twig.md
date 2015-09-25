---
layout: note
title:  Why Twig Rules
date:   Sunday, April 27, 2014
tags:   PHP, Twig
---

The more I use [Twig](http://twig.sensiolabs.org/), the PHP templating language, the more I discover its power and simplicity. Moments that would be a slog in PHP (especially in your HTML, ugh!) become invisible with Twig.

Let’s say you have a variable, but you don’t know whether it has been set for your view. The data may or may not be there. It might have never been defined in the first place.

In PHP, you would check to see if it is set and not empty:

<div data-gist="11292161" data-file="1_isset_not_empty.php"></div>

Similarly in Twig, you could check in the same (but more wordy) way:

<div data-gist="11292161" data-file="2_isset_not_empty_the_long_way.twig"></div>

But wait, Twig has a filter called [`default`](http://twig.sensiolabs.org/doc/filters/default.html), that will return a default value for a variable that is not set.

Here the default value is set to nothing:

<div data-gist="11292161" data-file="3_isset_not_empty_the_better_way.twig"></div>

Better, right? Well, yes, _better,_ but not the **best.**

Looking back at `default`, it is actually a wrapper for both `defined` and `empty`. This means we don’t need to check if the variable has value since it is already being checked.

This is why Twig rules:

<div data-gist="11292161" data-file="4_isset_not_empty_the_only_way_to_live.twig"></div>