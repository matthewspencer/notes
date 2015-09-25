---
layout: note
title:  Installing a SSLMate SSL Certificate on WebFaction
date:   Sunday, January 25, 2015
tags:   ssl, https, sslmate, webfaction
---

To me SSL certificates have always been relegated to the realm of ecommerce sites and big tech companies. I wanted to know a site was HTTPS before logging in, but I never really cared how it worked. Recently I read [@bcrypt](https://twitter.com/bcrypt)’s post [tls everything](https://zyan.scripts.mit.edu/blog/tls-everything/), in which I learned that HTTPS is not expensive nor is it hard to set up.

This note is to document my process of getting a SSL certificate from [SSLMate](https://sslmate.com/) set up for this website on [WebFaction](https://www.webfaction.com/?aid=35667).

1. Since we will make SSLMate from source, we will need cpan to install dependencies. Follow [the instructions](http://docs.webfaction.com/software/perl.html#installing-cpan-modules) in the WebFaction documentation to setup cpan for your user account.
1. Follow [the instructions](https://sslmate.com/help/getting_started#install) for SSLMate installation. Choose **Other** as your operating system to get the `make` instructions.
  1. Install SSLMate dependencies with cpan:
    `cpan URI Term::ReadKey JSON::PP`
  1. Grab the latest package and uncompress:
    `wget https://packages.sslmate.com/other/sslmate-latest.tar.gz; tar xzvf sslmate-latest.tar.gz`
  1. `cd` into the uncompressed sslmate directory.
  1. Specify a path to your home directory when running make:
    `make install PREFIX=$HOME/sslmate`
  1. Add an alias to the installation in your .bash_profile, .bashrc, or .aliases:
    `alias sslmate="$HOME/sslmate/bin/sslmate”`
1. Now proceed to purchase a certificate for your domain.
1. After purchasing the certificate, follow [the instructions](http://docs.webfaction.com/user-guide/websites.html#secure-sites-https) for setting up a https site on WebFaction.

### Notes:

- `$HOME/.sslmate` is the file SSLMate uses to store its config (for example, when you run `sslmate link`).
- It took about 30 minutes for the WebFaction staff to enable the certificate after opening the support ticket.