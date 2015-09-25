---
layout: note
title:  Adding Archive Pages to WordPress Menus
date:   Friday, May 16, 2014
tags:   WordPress, Menus, wp_nav_menu, PHP
---

It is somewhat difficult to add post type archive pages into WordPress menus. WordPress does not provided these as options by default. There are workarounds, like using a custom link or [a plugin](https://wordpress.org/plugins/add-custom-post-types-archive-to-nav-menus/), but none work satisfactorily. There are also programmatic approaches, but many include writing custom meta box display code which is … yuck. So what is an elegant way to add archive pages? What does WordPress provide for free?

Here’s the idea: create a custom taxonomy and use it to display archive pages in the menus editor.

![Archive Pages menu](/uploads/2014/05/16/archive-pages.png)

To do so, create a new taxonomy for the archive pages:

<div data-gist="3855fa6cfd1f86fa75c4" data-file="1_create_taxonomy.php"></div>

Then, create the terms for each public post type:

<div data-gist="3855fa6cfd1f86fa75c4" data-file="2_create_terms.php"></div>

Next, filter the term link output to point to the custom archive page:

<div data-gist="3855fa6cfd1f86fa75c4" data-file="3_filter_term_link.php"></div>

Lastly, add the current classes to the menu when viewing that custom post type:

<div data-gist="3855fa6cfd1f86fa75c4" data-file="4_add_current_class.php"></div>