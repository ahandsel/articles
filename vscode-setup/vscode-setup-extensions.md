# VS Code Setup - Recommended Extensions

This is a list of Visual Studio Code extensions that I recommend.


## Table of Contents <!-- omit in toc -->

* [Markdown Related Extensions](#markdown-related-extensions)
* [Writing (in General) Related Extensions](#writing-in-general-related-extensions)
* [GitHub Related Extensions](#github-related-extensions)
* [CSV Related Extensions](#csv-related-extensions)
* [Japanese Language Related Extensions](#japanese-language-related-extensions)
* [Styling and Themes Related Extensions](#styling-and-themes-related-extensions)
* [Utility Extensions](#utility-extensions)
* [Easy Installation Method](#easy-installation-method)
  * [extensions.json](#extensionsjson)


## Markdown Related Extensions

| Extension                                                        | Description                                                                  |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [Copy Markdown as HTML][copy-markdown-as-html]                   | Converts Markdown to HTML.                                                   |
| [Markdown All in One][markdown-all-in-one]                       | Amazing tool that has all the features you need when writing Markdown files! |
| [Markdown Footnotes][bierner.markdown-footnotes]                 | Adds [^footnote] syntax support to VS Code's built-in markdown preview       |
| [Markdown Paste][markdown-paste]                                 | Smartly paste images in Markdown with `Markdown Paste` command.              |
| [Markdown PDF][yzane.markdown-pdf]                               | Convert Markdown to PDF                                                      |
| [Markdown Preview Enhanced][shd101wyy.markdown-preview-enhanced] | Markdown Preview Enhanced ported to vscode                                   |
| [Markdownlint][markdownlint]                                     | Markdown linting and style checking for Visual Studio Code.                  |
| [Paste Image][paste-image]                                       | Easily paste images into Markdown and HTML.                                  |
| [MDX][unifiedjs.vscode-mdx]                                      | Language support for MDX                                                     |
| [Path IntelliSense][path-intellisense]                           | Auto-completes filenames.                                                     |


## Writing (in General) Related Extensions

| Extension                                          | Description                                                                                                       |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| [Code Spell Checker][code-spell-checker]           | Great spell checker for programmers as it works well with camelCase code and keeps false positives pretty low.    |
| [Capitalize][capitalize]                           | Capitalize your text.                                                                                             |
| [Change Case][change-case]                         | Easily change the case of text.                                                                                   |
| [Insert Line Number][andersliu.insert-line-number] | Insert line numbers to selected lines or the whole document.                                                      |
| [DupChecker][dupchecker]                           | Check duplicate lines in the file content or selection and remove them if you need to keep the unique lines only. |
| [:emojisense:][emojisense]                         | Autocomplete for emoji.                                                                                           |
| [Replace Curly Quotes][replace-curly-quotes]       | Replaces all curly quotes (`‘`, `’`, `“`, `”`) in a document with straight quotes (`'`, `"`).                     |
| [Sort lines][Tyriar.sort-lines]                    | Sorts lines of text                                                                                               |


## GitHub Related Extensions


| Extension                                          | Description                                                        |
| -------------------------------------------------- | ------------------------------------------------------------------ |
| [GitHub Markdown Preview][github-markdown-preview] | View your Markdown file as they would on GitHub.                   |
| [GitHub Copilot Chat][GitHub.copilot-chat]         | AI chat features powered by Copilot                                |
| [GitHub Copilot][github-copilot]                   | AI-powered code completion tool.                                   |
| [Open in GitHub Desktop][open-in-github-desktop]   | Open the [GitHub Desktop App][github-desktop] easily from VS Code. |
| [Highlight Bad Chars][highlight-bad-chars]         | Makes zenkaku-space (double-byte-whitespace) visible.                                                             |
| [NBSP][nbsp]                                       | Visualizes suspicious Unicode characters and trailing whitespaces.                                                |


## CSV Related Extensions

| Extension                             | Description                                            |
| ------------------------------------- | ------------------------------------------------------ |
| [CSV to Table][phplasma.csv-to-table] | Convert a CSV/TSV/PSV file to an ASCII formatted table |
| [Rainbow CSV][rainbow-csv]            | Makes it easier to read and edit CSV and TSV files.    |


## Japanese Language Related Extensions

| Extension                                     | Description                                                                         |
| --------------------------------------------- | ----------------------------------------------------------------------------------- |
| [テキスト校正くん][ICS.japanese-proofreading] | Extension to check Japanese sentences in text files and Markdown files in VS Code   |
| [Japanese Word Count][japanese-word-count]    | Count Japanese characters, words, and lines.                                        |
| [Zenkaku][zenkaku]                            | Show double-byte whitespace.                                                        |
| [Trailing Spaces][trailing-spaces]            | Highlights trailing spaces and allows for simple all trailing space delete command. |


## Styling and Themes Related Extensions

| Extension                                                        | Description                                                                     |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| [TODO Highlight][wayou.vscode-todo-highlight]                    | highlight TODOs, FIXMEs, and any keywords, annotations...                       |
| [Better Solarized][ginfuru.ginfuru-better-solarized-dark-theme]  | A Better Solarized theme for Visual Studio Code include light and dark versions |
| [Material Icon Theme][PKief.material-icon-theme]                 | Material Design Icons for Visual Studio Code                                    |
| [Toggle Light/Dark Theme][danielgjackson.auto-dark-mode-windows] | Command to toggle the theme between light/dark.                                 |


## Utility Extensions

| Extension                                                    | Description                                                                                                          |
| ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| [ARB Editor][Google.arb-editor]                              | Editor for Application Resource Bundle files, used for localization.                                                 |
| [Code Runner][code-runner]                                   | Useful in running Python and JavaScript code locally for a quick check.                                              |
| [ESLint][eslint]                                             | Integrates ESLint JavaScript into VS Code.                                                                           |
| [File Utils][sleistner.vscode-fileutils]                     | A convenient way of creating, duplicating, moving, renaming and deleting files and directories.                      |
| [HTML Snippets][html-snippets]                               | Full HTML tags including HTML5 snippets.                                                                             |
| [IntelliSense for CSS class names in HTML][intellisense-css] | CSS class name completion for the HTML class attribute based on the definitions found in your workspace.             |
| [Live Server][live-server]                                   | Launch a local development server with live reload feature for static & dynamic pages. Perfect when working on HTML. |
| [Open in Finder][fabiospampinato.vscode-open-in-finder]      | Adds a few commands for opening the current file or project in Finder.                                               |
| [Prettier - Code formatter][esbenp.prettier-vscode]          | Code formatter using prettier                                                                                        |
| [YAML][redhat.vscode-yaml]                                   | YAML Language Support by Red Hat, with built-in Kubernetes syntax support                                            |


## Easy Installation Method

You can install all the recommended extensions easily by creating a `extensions.json` file in your `.vscode` directory and doing the following:

1. Open the VS Code project where you want to install the recommended extensions.
1. Open the command palette with `Ctrl+Shift+P` or `Cmd+Shift+P` (on macOS).
1. Type and select `Configure Recommended Extensions (Workspace Folder)`.
1. Copy and paste the contents of the `extensions.json` file below into your `extensions.json` file.
1. Then type and select `Extensions: Show Recommended Extensions` in the command palette.


### extensions.json

```json
{
  "recommendations": [
    "Google.arb-editor",
    "danielgjackson.auto-dark-mode-windows",
    "viablelab.capitalize",
    "wmaurer.change-case",
    "formulahendry.code-runner",
    "streetsidesoftware.code-spell-checker",
    "GitHub.copilot-chat",
    "GitHub.copilot",
    "jerriepelser.copy-markdown-as-html",
    "phplasma.csv-to-table",
    "jianbingfang.dupchecker",
    "bierner.emojisense",
    "ginfuru.ginfuru-better-solarized-dark-theme",
    "bierner.github-markdown-preview",
    "wengerk.highlight-bad-chars",
    "abusaidm.html-snippets",
    "Zignd.html-css-class-completion",
    "andersliu.insert-line-number",
    "ICS.japanese-proofreading",
    "sifue.japanese-word-count",
    "ritwickdey.LiveServer",
    "bierner.markdown-footnotes",
    "shd101wyy.markdown-preview-enhanced",
    "yzane.markdown-pdf",
    "yzhang.markdown-all-in-one",
    "PKief.material-icon-theme",
    "possan.nbsp-vscode",
    "wraith13.open-in-github-desktop",
    "christian-kohler.path-intellisense",
    "esbenp.prettier-vscode",
    "mechatroner.rainbow-csv",
    "jinhyuk.replace-curly-quotes",
    "Tyriar.sort-lines",
    "shardulm94.trailing-spaces",
    "davidanson.vscode-markdownlint",
    "dbaeumer.vscode-eslint",
    "fabiospampinato.vscode-open-in-finder",
    "mushan.vscode-paste-image",
    "redhat.vscode-yaml",
    "sleistner.vscode-fileutils",
    "telesoho.vscode-markdown-paste-image",
    "unifiedjs.vscode-mdx",
    "wayou.vscode-todo-highlight",
    "mosapride.zenkaku"
  ]
}
```

[andersliu.insert-line-number]: https://marketplace.visualstudio.com/items?itemName=andersliu.insert-line-number
[bierner.markdown-footnotes]: https://marketplace.visualstudio.com/items?itemName=bierner.markdown-footnotes
[capitalize]: https://marketplace.visualstudio.com/items?itemName=viablelab.capitalize
[change-case]: https://marketplace.visualstudio.com/items?itemName=wmaurer.change-case
[code-runner]: https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner
[code-spell-checker]: https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker
[copy-markdown-as-html]: https://marketplace.visualstudio.com/items?itemName=jerriepelser.copy-markdown-as-html
[danielgjackson.auto-dark-mode-windows]: https://marketplace.visualstudio.com/items?itemName=danielgjackson.auto-dark-mode-windows
[dupchecker]: https://marketplace.visualstudio.com/items?itemName=jianbingfang.dupchecker
[emojisense]: https://marketplace.visualstudio.com/items?itemName=bierner.emojisense
[esbenp.prettier-vscode]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[eslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[fabiospampinato.vscode-open-in-finder]: https://marketplace.visualstudio.com/items?itemName=fabiospampinato.vscode-open-in-finder
[ginfuru.ginfuru-better-solarized-dark-theme]: https://marketplace.visualstudio.com/items?itemName=ginfuru.ginfuru-better-solarized-dark-theme
[github-copilot]: https://marketplace.visualstudio.com/items?itemName=GitHub.copilot
[github-desktop]: https://desktop.github.com/
[github-markdown-preview]: https://marketplace.visualstudio.com/items?itemName=bierner.github-markdown-preview
[GitHub.copilot-chat]: https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat
[Google.arb-editor]: https://marketplace.visualstudio.com/items?itemName=Google.arb-editor
[highlight-bad-chars]: https://marketplace.visualstudio.com/items?itemName=wengerk.highlight-bad-chars
[html-snippets]: https://marketplace.visualstudio.com/items?itemName=abusaidm.html-snippets
[ICS.japanese-proofreading]: https://marketplace.visualstudio.com/items?itemName=ICS.japanese-proofreading
[intellisense-css]: https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion
[japanese-word-count]: https://marketplace.visualstudio.com/items?itemName=sifue.japanese-word-count
[live-server]: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
[markdown-all-in-one]: https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one
[markdown-paste]: https://marketplace.visualstudio.com/items?itemName=telesoho.vscode-markdown-paste-image
[markdownlint]: https://marketplace.visualstudio.com/items?itemName=davidanson.vscode-markdownlint
[nbsp]: https://marketplace.visualstudio.com/items?itemName=possan.nbsp-vscode
[open-in-github-desktop]: https://marketplace.visualstudio.com/items?itemName=wraith13.open-in-github-desktop
[paste-image]: https://marketplace.visualstudio.com/items?itemName=mushan.vscode-paste-image
[path-intellisense]: https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense
[phplasma.csv-to-table]: https://marketplace.visualstudio.com/items?itemName=phplasma.csv-to-table
[PKief.material-icon-theme]: https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme
[rainbow-csv]: https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv
[redhat.vscode-yaml]: https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml
[replace-curly-quotes]: https://marketplace.visualstudio.com/items?itemName=jinhyuk.replace-curly-quotes
[shd101wyy.markdown-preview-enhanced]: https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced
[sleistner.vscode-fileutils]: https://marketplace.visualstudio.com/items?itemName=sleistner.vscode-fileutils
[trailing-spaces]: https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces
[Tyriar.sort-lines]: https://marketplace.visualstudio.com/items?itemName=Tyriar.sort-lines
[unifiedjs.vscode-mdx]: https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx
[wayou.vscode-todo-highlight]: https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight
[yzane.markdown-pdf]: https://marketplace.visualstudio.com/items?itemName=yzane.markdown-pdf
[zenkaku]: https://marketplace.visualstudio.com/items?itemName=mosapride.zenkaku
