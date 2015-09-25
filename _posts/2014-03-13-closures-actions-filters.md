---
layout: note
title:  Using Closures with WordPress’ Actions and Filters
date:   Thursday, March 13, 2014
tags:   WordPress, PHP, Anonymous Functions, Closures
---

In WordPress, the `$function_to_add` passed to `add_action` or `add_filter` functions only accepts the default arguments provided to the action or filter. Sometimes it is necessary to introduce an outside variable into the scope of the `$function_to_add`.

Since PHP 5.3, it is possible to use [closures](http://www.php.net/manual/en/functions.anonymous.php) (or anonymous functions) with actions and filters. To introduce a variable into the scope of the closure use the `use` language construct.

    add_filter( 'pre_option_posts_per_rss', function () use ( $option ) {
      return $option;
    } );