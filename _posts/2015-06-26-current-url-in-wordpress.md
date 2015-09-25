---
layout: note
title:  Get the current URL in WordPress
date:   Friday, June 26, 2015
tags:   wordpress, path, url
---

Sometimes you need to get the current URL (or path) in WordPress outside the loop (e.g. when a post ID is unavailable like on archive pages). There are different ways of handling this — constructing the URL using `$_SERVER` or the global `$wp` object — but I prefer the following approach for its brevity.

The idea is to use [`add_query_arg()`](https://developer.wordpress.org/reference/functions/add_query_arg/) with a bogus / empty query variable. This works because `add_query_arg()` has a fallback when no URI is passed. The falsey value removes the query variable from the path (this is how [`remove_query_arg()`](https://developer.wordpress.org/reference/functions/remove_query_arg/) works).

    // This will return the current path including query_vars
    add_query_arg( '_', false );

    // This will return the absolute URL
    home_url( add_query_arg( '_', false ) );