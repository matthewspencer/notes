---
layout: note
title:  More or less how I setup an iTunes alternative
date:   Wednesday, January 15, 2020
tags:   mpd, ncmpcpp
---

In 2020 my resolution was not to use music streaming services and spend money in a way that goes more directly to artists through Bandcamp, [Resonate](https://resonate.is/), or iTunes. One problem I ran into tho is that iTunes is pretty buggy these days — asking me to log in over and over and randomly quitting while I’m listing to music.

Since most of my time spent listening to music is at my desk at work I was looking for desktop options primarily. I couldn’t really find many and felt so-so about the options until someone mentioned MPD ([Music Player Daemon](https://www.musicpd.org/)). Since I didn’t really find it easy to setup at first I wanted to share my experience setting up `mpd` with `ncmpcpp` ([NCurses Music Player Client (Plus Plus)](https://rybczak.net/ncmpcpp/)).

First here’s my best explanations for what these are:

**`mpd`**

It plays audio files, keeps a database of music, and can be used to make playlists. It can run off a networked server or locally on a laptop. **It has no visual interface.**

**`ncmcpp`**

It is a text-based interface for `mpd` that runs in a terminal.

## Installation

I used [Homebrew](https://brew.sh/) to install them although I’m sure there are other ways:

```
brew install mpd
brew install ncmp
```

If you want to use last.fm with MPD you will also want to:

```
brew install mpdscribble
```

## Setup

### [\~/.mpd/mpd.conf](https://github.com/matthewspencer/dotfiles/blob/master/.mpd/mpd.conf)

MPD needs to know a few things when it starts like where your music files are and where it should save state, playlists, etc.

```
music_directory    "~/Music"
playlist_directory "~/.mpd/playlists"
db_file            "~/.mpd/mpd.db"
log_file           "~/.mpd/mpd.log"
pid_file           "~/.mpd/mpd.pid"
state_file         "~/.mpd/mpdstate"
```

Which I believe you’ll need to create:

```
mkdir -p ~/.mpd/playlists
touch ~/.mpd/{mpd.db,mpd.log,mpd.pid,mpdstate}
```

Next I struggled with the `audio_output` configuration a bit, especially with bluetooth headphones, but the following works great for MacOS:

```
audio_output {
    name       "default"
    type       "ao"
    mixer_type "software"
}
```

There’s a [bunch more options](https://linux.die.net/man/5/mpd.conf) but these are the most important.

### [\~/.ncmpcpp/config](https://github.com/matthewspencer/dotfiles/blob/master/.ncmpcpp/config)

Most of my config is personal preference, but I wanted to talk about a few parts:

- Ignore `the` from artist names (put The Raincoats under `r` not `t`) using `ignore_leading_the = yes`
- I use 25% left pane `locked_screen_width_part = 25` with the visualizer `startup_screen = visualizer` and 75% right pane with the playlist viewer `startup_slave_screen = playlist` focused by default `startup_slave_screen_focus = yes` (ugh I know master/slave nomenclature)

Also as above there’s a bunch more [config options](https://github.com/arybczak/ncmpcpp/blob/master/doc/config) I don’t talk about.

### The Visualizer

I really like the `ncmpcpp` visualizer — it is cute and feels futuristic. To set it up you’ll need to tell `mpd` to output the visualizer bits and configure some preferences in `ncmpcpp`.

In [\~/.mpd/mpd.conf](https://github.com/matthewspencer/dotfiles/blob/master/.mpd/mpd.conf):

```
audio_output {
    name   "visualizer"
    type   "fifo"
    path   "/tmp/mpd.fifo"
    format "44100:16:1"
}
```

(I assume `fifo` refers to “first in first out” but I’ve never specifically looked into it.)

And in [\~/.ncmpcpp/config](https://github.com/matthewspencer/dotfiles/blob/master/.ncmpcpp/config):

```
# I think this has to match the name above,
# but I never really looked into it
visualizer_output_name = visualizer

## defaults to 30
visualizer_sync_interval = 30

## no  - 44100:16:1
## yes - 44100:16:2
visualizer_in_stereo = no

## spectrum, wave, wave_filled, ellipse
visualizer_type = ellipse
```

Definitely check out the different types, but `ellipse` is my fave.

![ncmpcpp player with visualizer](/uploads/2020/01/15/ncmpcpp-visualizer.png)

## Starting

To start `mpd` it is best to use Homebrew:

```
brew services start mpd
```

**Note:** You can `sudo brew service start mpd` if you want to run it at boot, but since I rarely reboot I opted not to since it makes configuration paths more of a pain.

To start `ncmpcpp`:

```
ncmpcpp
```

## Keyboard shortcuts

### `ncmpcpp` shortcuts I use most

- `p` play/pause
- \` (backtick) in playlist edit to open random then `s` for songs and 50 or whatever amount
- 1-8 for different screens, especially `1` for the current playlist and `4` for the normal 3 column artist/album/song view
- `q` quit
- `u` update the `mpd` database

I also setup [vim-like bindings](https://github.com/matthewspencer/dotfiles/blob/master/.ncmpcpp/bindings) since I expected them to work and they didn’t.

### Setting up media keys

This part was a real pain. Basically to use the play/pause, next, and previous keys you have to do the following.

Install [Karabiner](https://pqrs.org/osx/karabiner/) to edit MacOS key bindings:

```
brew cask install karabiner-elements
```

Install [`mpc`](https://musicpd.org/clients/mpc/) for a simple interface to `mpd`:

```
brew install mpc
```

Configuring Karabiner:

- Open Karabiner-Elemnents.app (you’ll want to have this open with the **Login items**)
- Bind the media keys for the following in complex modifications:
    - play/pause `/usr/local/bin/mpc toggle`
    - prev `/usr/local/bin/mpc prev`
    - next `/usr/local/bin/mpc next`
- I found it easiest to edit [~/.config/karabiner/karabiner.json](https://github.com/matthewspencer/dotfiles/blob/master/.config/karabiner/karabiner.json) directly instead of the editor

**Note:** You can either use the `fn` key or not, but whatever you put in the config will work that way disregarding the setting in System Preferences.

## Adding new music

One day I intend to setup [beets](https://beets.readthedocs.io/en/stable/) for organizing files, but today I still use iTunes to import need music and hit `u` in `ncmpcpp` to update the `mpd` database.
