# Slidev Tip - `npm run export` not working?

This is a quick debugging guide when you encounter the `npx playwright install` error when trying to export a Slidev presentation to PDF or PNG with the `npm run export` command.


## Error Message

```shell
❯ npm run export

(node:29189) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)


  ●■▲
  Slidev  v0.42.11

  theme       /
  css engine  unocss
  entry       /Users/.../GitHub/slidev/example.md
browserType.launch: Executable doesn't exist at /Users/.../Library/Caches/ms-playwright/chromium-1071/chrome-mac/Chromium.app/Contents/MacOS/Chromium
╔═════════════════════════════════════════════════════════════════════════╗
║ Looks like Playwright Test or Playwright was just installed or updated. ║
║ Please run the following command to download new browsers:              ║
║                                                                         ║
║     npx playwright install                                              ║
║                                                                         ║
║ <3 Playwright Team                                                      ║
╚═════════════════════════════════════════════════════════════════════════╝
    at exportSlides (/Users/.../GitHub/slidev/node_modules/@slidev/cli/dist/export-BGMCS4F2.js:130:34)
    at async Object.handler (/Users/.../GitHub/slidev/node_modules/@slidev/cli/dist/cli.js:354:22) {
  name: 'Error'
}
```


## Solutions

There are two ways to solve this problem.


### Solution 1: Clean install of slidev

Do not duplicate an old Slidev project. Instead, create a new Slidev project and copy over the `slides.md` file.

```shell
npm init slidev
npm i -D playwright-chromium
npx slidev export
```

The PDF files will be exported as `./slides-export.pdf`.


### Solution 2: Delete `node_modules` folder and reinstall

```shell
rm -rf node_modules
npm i -D playwright-chromium
npm i
npx slidev export
```

The PDF files will be exported as `./slides-export.pdf`.

---


## Appendix


### What is Slidev?

Snippet from [sli.dev/guide/](https://sli.dev/guide/):  

> [Slidev](https://sli.dev/) (slide + dev, /slaɪdɪv/) is a web-based slides maker and presenter. It's designed for developers to focus on writing content in Markdown while also having the power of HTML and Vue components to deliver pixel-perfect layouts and designs with embedded interactive demos in your presentations.


### Slidev Export Options

```shell
❯ slidev export --help
slidev export [entry..]

Export slides to PDF

Positionals:
  entry  path to the slides markdown entry        [array] [default: "slides.md"]

Options:
  -t, --theme            override theme                                 [string]
      --output           path to the output                             [string]
      --format           output format    [string] [choices: "pdf", "png", "md"]
      --timeout          timeout for rendering the print page           [number]
      --range            page ranges to export, for example "1,4-5,6"   [string]
      --dark             export as dark theme                          [boolean]
  -c, --with-clicks      export pages for every clicks                 [boolean]
      --executable-path  executable to override playwright bundled browser
                                                                        [string]
      --with-toc         export pages with outline                     [boolean]
      --per-slide        slide slides slide by slide. Works better with global
                         components, but will break cross slide links and TOC in
                         PDF                                           [boolean]
  -h, --help             Show help                                     [boolean]
  -v, --version          Show version number                           [boolean]
```
