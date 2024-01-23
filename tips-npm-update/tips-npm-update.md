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


## Table of Content <!-- omit in toc -->

* [NPM Commands To Check And Update Packages](#npm-commands-to-check-and-update-packages)
  * [npm outdated](#npm-outdated)
  * [npm update](#npm-update)
  * [npm update --save-dev --save](#npm-update---save-dev---save)
  * [npm update -g](#npm-update--g)
* [npm-check-updates Commands To Check And Update Packages](#npm-check-updates-commands-to-check-and-update-packages)
  * [npm install -g npm-check-updates](#npm-install--g-npm-check-updates)
  * [npx npm-check-updates](#npx-npm-check-updates)
  * [ncu -u](#ncu--u)
  * [ncu -g -u](#ncu--g--u)


## NPM Commands To Check And Update Packages


### npm outdated

```shell
npm outdated
```

npm Docs: [npm-outdated](https://docs.npmjs.com/cli/v7/commands/npm-outdated)
This command will check the registry to see if any (or specific) installed packages are currently outdated.

By default, only the root project's direct dependencies and your configured workspaces' direct dependencies are shown. Use `--all` to find all outdated meta-dependencies as well.

npm Docs: [npm-outdated](https://docs.npmjs.com/cli/v7/commands/npm-outdated)


### npm update

```shell
npm update --save
```

npm Docs: [npm-update](https://docs.npmjs.com/cli/v7/commands/npm-update)
Update packages and save to package.json


### npm update --save-dev --save

```shell
npm update --save-dev --save
```

npm Docs: [npm-update --save-dev --save](https://docs.npmjs.com/cli/v7/commands/npm-update --save-dev)
Update dev packages and save to package.json


### npm update -g

```shell
npm update -g
```

npm Docs: [npm-update -g](https://docs.npmjs.com/cli/v7/commands/npm-update -g)
Update global packages


## npm-check-updates Commands To Check And Update Packages

[`npm-check-updates`](https://github.com/raineorshine/npm-check-updates) upgrades your package.json dependencies to the latest versions, ignoring specified versions.


### npm install -g npm-check-updates

```shell
npm install -g npm-check-updates
```

npm Docs: [npm-install -g npm-check-updates](https://docs.npmjs.com/cli/v7/commands/npm-install -g npm-check-updates)
Install `npm-check-updates` globally


### npx npm-check-updates

```shell
npx npm-check-updates
```

Check for outdated packages without installing npm-check-updates


### ncu -u

```shell
ncu -u
```

Update packages and save to package.json


### ncu -g -u

```shell
ncu -g -u
```

Update global packages
