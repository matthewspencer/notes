---
layout: note
title:  Disable wpautop on embeds
date:   Wednesday, April 2, 2014
tags:   PHP, WordPress, oEmbed, WP_Embed, wpautop
---

When some embeds are inserted into `the_content` by `WP_Embed`, `wpautop` wraps them in `<p>` tags. This behavior is not ideal. The reason for this is that some embeds, like YouTube, are not wrapped in a block element. The `WP_Embed` class has a filter, `embed_handler_html`, which can be used to override this behavior by wrapping the embed in a block element.

Usage:

<div data-gist="7b84f8199381ac336670"></div>