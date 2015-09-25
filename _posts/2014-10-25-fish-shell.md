---
layout: note
title:  Fish Shell
date:   Saturday, October 25, 2014
tags:   bash, shell, git
---

Inspired by a [recent interview on the Setup](http://karolina.szczur.usesthis.com/), I took a look at a shell called [fish](http://fishshell.com/). This note is not to sell you on the wonders of fish, but to share some tips for getting started in the fish future.

### Default Shell

Instead of running the `fish` command every time you open a new Terminal window or tab, set fish as the default shell (in OS X):

1. Add the path for fish (`/usr/local/bin/fish` as installed by Homebrew) to the list of system shells in `/etc/shells`
1. Use the change shell command `chsh` to set fish as the default for your user account: `chsh -s /usr/local/bin/fish`

### Custom Prompt

To customize the fish prompt you can either use the interactive web-based `fish_config` command to select from one of the presets or build a custom prompt:

1. Create the functions directory for fish if it does not already exists, the path is `~/.config/fish/functions`
1. Add a prompt function file in the functions directory: `~/.config/fish/functions/fish_prompt.fish`
1. In it define the `fish_prompt` function and add a custom prompt, [sample prompts](https://github.com/fish-shell/fish-shell/tree/master/share/tools/web_config/sample_prompts) are found in the source

As an example, behold my transcendent prompt:

<div data-gist="f4a08ec125ba10e5f9ac"></div>