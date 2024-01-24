# Checking and Updating NPM Packages

A quick rundown on how to check and update npm packages.


## TL;DR <!-- omit in toc -->

npm commands to check and update packages.

| Command                        | Description                                  |
| ------------------------------ | -------------------------------------------- |
| `npm outdated`                 | Check for outdated packages                  |
| `npm update --save`            | Update packages and save to package.json     |
| `npm update --save-dev --save` | Update dev packages and save to package.json |
| `npm update -g`                | Update global packages                       |

Alternatively, you can use [`npm-check-updates`](https://github.com/raineorshine/npm-check-updates) to check and update packages.

| Command                            | Description                                                      |
| ---------------------------------- | ---------------------------------------------------------------- |
| `npm install -g npm-check-updates` | Install `npm-check-updates` globally                             |
| `npx npm-check-updates`            | Check for outdated packages without installing npm-check-updates |
| `ncu -u`                           | Update packages and save to package.json                         |
| `ncu -g -u`                        | Update global packages                                           |


## Table of Contents <!-- omit in toc -->

* [NPM Commands To Check And Update Packages](#npm-commands-to-check-and-update-packages)
  * [List up the outdated packages](#list-up-the-outdated-packages)
  * [Update package.json \& packages](#update-packagejson--packages)
* [npm-check-updates Commands To Check And Update Packages](#npm-check-updates-commands-to-check-and-update-packages)
  * [Install And Run Globally](#install-and-run-globally)
  * [Run with npx](#run-with-npx)


## NPM Commands To Check And Update Packages


### List up the outdated packages

```shell
npm outdated
```

This command will check the registry to see if any (or specific) installed packages are currently outdated.

By default, only the root project's direct dependencies and your configured workspaces' direct dependencies are shown. Use `--all` to find all outdated meta-dependencies as well.

npm Docs: [npm-outdated](https://docs.npmjs.com/cli/v7/commands/npm-outdated)


### Update package.json & packages

```shell
npm update --save
```

This command will update all the packages listed to the latest version (specified by the tag config), respecting the semver constraints of both your package and its dependencies (if they also require the same package).

The `--save` flag will update the `package.json` file with the new version as well.

Add the `--dev` flag to update dev packages like so:

```shell
npm update --save-dev --save
```

Add the `-g` flag to update global packages like so:

```shell
npm update -g
```

npm Docs: [npm-update](https://docs.npmjs.com/cli/v7/commands/npm-update)


## npm-check-updates Commands To Check And Update Packages

[`npm-check-updates`](https://github.com/raineorshine/npm-check-updates) upgrades your package.json dependencies to the latest versions, ignoring specified versions.

There are two options for using `npm-check-updates`:
* Install it globally and run it as a command-line app.
* Simply run with `npx` to use it as a one-off command.


### Install And Run Globally

First, install npm-check-updates globally.

```shell
npm install -g npm-check-updates
```

Run `npm-check-updates` with the `-u` or `--upgrade` flag to upgrade your `package.json` file.

```shell
ncu -u
```

For global packages, run with the `-g` flag.

```shell
ncu -g -u
```


### Run with npx

Alternatively, use `npx` to run `npm-check-updates` without installing it globally.

```shell
npx npm-check-updates
```
