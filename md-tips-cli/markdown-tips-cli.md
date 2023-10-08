# Useful Markdown CLI Commands

* [Markdown Linters](#markdown-linters)

## Markdown Linters

Run `markdown-link-check` to check broken links - [tcort/markdown-link-check](https://github.com/tcort/markdown-link-check)

```shell
find . -name \*.md -not -path "./node_modules/*" -print0 | xargs -0 -n1 markdown-link-check -p -q
```

Run `markdownlint` to check markdown syntax - [igorshubovych/markdownlint-cli](https://github.com/igorshubovych/markdownlint-cli)

```shell
markdownlint '**/*.md' --ignore node_modules
```
