# Nodenv Cheatsheet

Here is a quick reference guide to the [Nodenv](https://github.com/nodenv/nodenv) CLI tool.

⚡ Note: Swap out `specify_abc` with the specific `abc` variable for the listed commands.
* Example: swap `specify_version` with `14.5.0` to install Node.js version `14.5.0`.

## Outline
- [Common Nodenv Commands](#common-nodenv-commands)
- [What is Nodenv?](#what-is-nodenv)
- [Install & Setup Nodenv](#install-amp-setup-nodenv)
- [Usage - Install & Setup a Node.js version](#usage-install-amp-setup-a-nodejs-version)
  - [Which Node.js version should I use?](#which-nodejs-version-should-i-use)
- [Nodenv Plugins](#nodenv-plugins)
  - [Install Nodenv Plugins - Example: nodenv-nvmrc](#install-nodenv-plugins-example-nodenvnvmrc)

## Common Nodenv Commands

| Action                                        | Command                            |
| --------------------------------------------- | ---------------------------------- |
| List all available Node.js versions           | `nodenv install --list`            |
| List installed Node.js versions               | `nodenv versions`                  |
| Install a specific Node.js version            | `nodenv install specify_version`   |
| Set a global Node.js version                  | `nodenv global specify_version`    |
| Set a local (folder-specific) Node.js version | `nodenv local specify_version`     |
| Uninstall a specific Node.js version          | `nodenv uninstall specify_version` |
| Switch to a specific Node.js version          | `nodenv shell specify_version`     |

## What is Nodenv?
Since Node.js is notorious for breaking changes, it is important to be able to manage multiple Node.js versions on your machine.

That is where [Nodenv](https://github.com/nodenv/nodenv) comes in. It is a tool that allows you to install and switch between multiple Node.js versions seamlessly.

## Install & Setup Nodenv
⚠️ **Warning**: Remove any existing installations of Node.js **before** installing nodenv! Having different Node.js installations can lead to conflict issues.

1. Install nodenv with [Homebrew](https://brew.sh/)
1. Set up nodenv shell integration
1. Implement the changes by restarting the Terminal window
1. Verify that nodenv is set up correctly using the [nodenv-doctor](https://github.com/nodenv/nodenv-installer/blob/master/bin/nodenv-doctor) script.

```shell
# Update Homebrew
brew update && brew upgrade

# Install nodenv
brew install nodenv

# Initialization command
nodenv init

# Append the following line into the shell's rc/profile
eval "$(nodenv init -)"

# ----

# For Zsh users
echo 'eval "$(nodenv init -)"' >> ~/.zshrc
cat < ~/.zshrc

# For Bash users
echo 'eval "$(nodenv init -)"' >> ~/.bash_profile
cat < ~/.bash_profile

# ----
# Close & open a new Terminal window for the changes to take place.
# ----

# Verify that Nodenv is properly set up
curl -fsSL https://github.com/nodenv/nodenv-installer/raw/master/bin/nodenv-doctor | bash
```

## Usage - Install & Setup a Node.js version
Now you're ready to install specific Node.js versions!  
**Inside** `project` folder, install Node.js version `14.5.0`:

```shell
cd project/

nodenv install 14.5.0

nodenv local 14.5.0
```

Alright! Your Mac is now armed with Node.js!

### Which Node.js version should I use?
Use the latest **LTS (long-term support)** Node.js version when in doubt.  
Find it here: [Node.js](https://nodejs.org/en/)

If you are going to use a framework like [React](https://reactjs.org/), [Vue](https://vuejs.org/), or [Angular](https://angular.io/), you should check their documentation for the recommended Node.js version.

## Nodenv Plugins

What are plugins? Plugins are additional features that you can add to nodenv to enhance its functionality. You can find a list of plugins here: [Plugins · nodenv/nodenv Wiki](https://github.com/nodenv/nodenv/wiki/Plugins)

| Action                                               | Command                                 |
| ---------------------------------------------------- | --------------------------------------- |
| List available nodenv plugins                        | `nodenv plugins`                        |
| Set Nodenv [Homebrew Tap](https://docs.brew.sh/Taps) | `brew tap nodenv/nodenv`                |
| Install a nodenv plugin                              | `brew install specify_plugin`           |
| Enable a nodenv plugin                               | `nodenv specify_plugin specify_command` |

### Install Nodenv Plugins - Example: nodenv-nvmrc

```shell
brew tap nodenv/nodenv
brew install nodenv-nvmrc
```
