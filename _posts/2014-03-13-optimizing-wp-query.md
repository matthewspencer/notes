---
layout: note
title:  Optimizing WP_Query
date:   Thursday, March 13, 2014
tags:   WordPress, WP_Query, PHP, Optimization
---

### Disable the `found_posts` calculation

If pagination is not required, use the `no_found_rows` parameter to disable the `SQL_CALC_FOUND_ROWS` query that checks for the total number of posts:

    'no_found_rows' => true,

### Query for a single `post_type`

To prevent an extra `JOIN`, set the `post_type` parameter explicitly:

    'post_type' => 'post',

### Disable the `posts_groupby` filter

The `posts_groupby` filter adds the ability to run `GROUP BY` on the returned array of posts. In most cases, this is not necessary. To disable, pass WordPress’ `__return_false()` function to the add filter:

    add_filter( 'posts_groupby', '__return_false' );

And to reset after your query:

    remove_filter( 'posts_groupby', '__return_false' );

### Use `tax_query` over `meta_query` when searching for posts

Unlike taxonomies, postmeta values do not have indexes. `meta_query` searches through the entire wp_postmeta table which results in slow queries.