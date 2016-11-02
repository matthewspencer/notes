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

    cat ~/.ssh/unique_key_name.pub | ssh username@servername "cat >> ~/.ssh/authorized_keys"

If either the `.ssh` directory or `authorized_keys` file don’t exist, create them with the following permissions:

    chmod 700 ~/.ssh
    chmod 600 ~/.ssh/authorized_keys

Now, when logging into the server specify which key to use by setting the `-i` flag.

    ssh -i $HOME/.ssh/unique_key_name username@servername

Finally, create an entry in your `~/.ssh/config` file to allow for a more simple login.

    Host mellowalias
        Hostname servername
        IdentityFile ~/.ssh/unique_key_name
        User username
