---
layout: note
title:  Using Jetpack’s Markdown with Timber
date:   Tuesday, May 12, 2015
tags:   wordpress, jetpack, timber, markdown, twig
---

Jetpack’s [Markdown implementation](http://jetpack.me/support/markdown/) works well for post and comment content, but does not provide hooks for use on [custom fields](https://github.com/Automattic/jetpack/issues/155). As part of a recent project that uses Markdown extensively in [ACF](http://www.advancedcustomfields.com/) fields, I put together the following implementation for leveraging [Timber](https://github.com/jarednova/timber/) and Jetpack to convert Markdown in Twig views. The implementation uses Timber’s [`get_twig`](https://github.com/jarednova/timber/blob/43a2d16434c111ce42f267332d1846323b33f7b3/lib/timber-twig.php#L143) WordPress filter hook. This filter passes in the `$twig` object used by Timber and can be used to add [Twig filters and functions](http://twig.sensiolabs.org/doc/advanced.html).

The following filter checks to see if Jetpack’s Markdown module is active and uses it to convert a string to HTML.

<div data-gist="811738c36877f41fe664" data-file="01-twig-filters.php"></div>

The `markdown` Twig filter can be used in the Twig view as any other, for example:

<div data-gist="811738c36877f41fe664" data-file="02-post-content.twig"></div>

One caveat to this approach, conversion of Markdown to HTML at render could be slow. The Jetpack Markdown module converts post content on save (and saves to `post_content_filtered`). Make sure to use page caching or [Twig template caching](https://github.com/jarednova/timber/wiki/Performance#cache-the-entire-twig-file-and-data).