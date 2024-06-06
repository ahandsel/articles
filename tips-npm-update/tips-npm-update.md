# Checking and Updating npm Packages

This is a quick rundown on how to check and update npm packages and package.json.


## TL;DR <!-- omit in toc -->

npm commands to check and update packages.

| Command                        | Description                                  |
| ------------------------------ | -------------------------------------------- |
| `npm outdated`                 | Check for outdated packages                  |
| `npm update --save`            | Update packages and save to package.json     |
| `npm update --save-dev --save` | Update dev packages and save to package.json |
| `npm update -g`                | Update global packages                       |

Alternatively, you can use [`npm-check-updates`](https://github.com/raineorshine/npm-check-updates) to check and update packages.

| Command                            | Description                                                        |
| ---------------------------------- | ------------------------------------------------------------------ |
| `npm install -g npm-check-updates` | Install `npm-check-updates` globally                               |
| `npx npm-check-updates`            | Check for outdated packages without installing `npm-check-updates` |
| `ncu -u`                           | Update packages and save to package.json                           |
| `ncu -g -u`                        | Update global packages                                             |


## Table of Contents <!-- omit in toc -->

* [npm Commands to Check and Update Packages](#npm-commands-to-check-and-update-packages)
  * [Listing Outdated Packages](#listing-outdated-packages)
  * [Updating package.json and Packages](#updating-packagejson-and-packages)
* [\[npm-check-updates\] Commands to Check and Update Packages](#npm-check-updates-commands-to-check-and-update-packages)
  * [Install and Run Globally](#install-and-run-globally)
  * [Run with npx](#run-with-npx)


## npm Commands to Check and Update Packages


### Listing Outdated Packages

```shell
npm outdated
```

This command checks the registry to see if any specific installed packages are currently outdated. By default, only the root project's direct dependencies and your configured workspaces' direct dependencies are shown.

npm Documentation: [npm-outdated](https://docs.npmjs.com/cli/v7/commands/npm-outdated)


### Updating package.json and Packages

```shell
npm update --save
```

This command updates all the packages listed to the latest version (specified by the tag config), respecting the semver constraints of both your package and its dependencies (if they also require the same package).

The `--save` flag updates the `package.json` file with the new version as well.

Add the `--dev` flag to update dev packages like so:

```shell
npm update --save-dev --save
```

Add the `-g` flag to update global packages like so:

```shell
npm update -g
```

npm Documentation: [npm-update](https://docs.npmjs.com/cli/v7/commands/npm-update)


## `npm-check-updates` Commands to Check and Update Packages

[`npm-check-updates`](https://github.com/raineorshine/npm-check-updates) upgrades your package.json dependencies to the latest versions, ignoring specified versions.

There are two options for using `npm-check-updates`:
* Install it globally and run it as a command-line app.
* Simply run with `npx` to use it as a one-off command.


### Install and Run Globally

First, install `npm-check-updates` globally.

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
