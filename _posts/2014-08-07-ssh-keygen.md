---
layout: note
title:  Passwordless ssh login
date:   Friday, October 10, 2014
tags:   ssh, shell, security
---

To create a passwordless `ssh` login, first generate a new authentication key:

    ssh-keygen -t rsa

It will prompt you to specify a filename for the key, choose something unique. Skip setting a passphrase by hitting return.

Next copy the public key to the remote server, adding it to the list of authorized keys.

    cat ~/.ssh/unique_key_name.pub | ssh username@server "cat >> ~/.ssh/authorized_keys"

Now, when logging into the server specify which key to use by setting the `-i` flag.

    ssh -i $HOME/.ssh/unique_key_name username@server

Finally, create an alias in your `.bash_profile` or `.aliases` file to allow for a more simple login.

    alias easylogin="ssh -i $HOME/.ssh/unique_key_name username@server"