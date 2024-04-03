# How to configure the Slidev export function to include the background theme's styling?


## Table of Contents <!-- omit in toc -->

* [What is Slidev?](#what-is-slidev)
* [Question / Problem](#question--problem)
  * [Desired Outcome vs Actual Result](#desired-outcome-vs-actual-result)
* [Solution](#solution)
  * [Export Slidev to PDF with background](#export-slidev-to-pdf-with-background)
  * [Export Slidev to PNG with background](#export-slidev-to-png-with-background)
  * [Result](#result)
* [Appendix](#appendix)
  * [Slidev Export Options](#slidev-export-options)
  * [Big Thanks to 0phoff](#big-thanks-to-0phoff)


## What is Slidev?

Snippet from [sli.dev/guide/](https://sli.dev/guide/):  

> [Slidev](https://sli.dev/) (slide + dev, /slaɪdɪv/) is a web-based slides maker and presenter. It's designed for developers to focus on writing content in Markdown while also having the power of HTML and Vue components to deliver pixel-perfect layouts and designs with embedded interactive demos in your presentations.


## Question / Problem

I was exporting my [kintone-for-hackathon Slidev](https://github.com/ahandsel/kintone-for-hackathon/) as PNG and PDF, but the background is missing (teal bubbles).

I needed to figure out how to change the export function to include the background in my exports.


### Desired Outcome vs Actual Result

| Desired Outcome                                                                                                                        | Actual Result                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| ![Screenshot of Slidev slides with desired outcome](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/j0gvzbxdsxujco71cjlv.png) | ![Screenshot of Slidev slides with actual result](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9beyvgkijv0yh6nio3ln.png) |
| Includes the teal bubbles in the background.                                                                                           | Does not include the teal bubbles in the background.                                                                                 |


## Solution

By default, the Slidev export function does not render the background styling (PNG or SVG).

So then, by using the `--per-slide` option, slides are rendered individually and include all information.


### Export Slidev to PDF with background

```shell
slidev export --per-slide --format pdf
```


### Export Slidev to PNG with background

```shell
slidev export --per-slide --format png
```


### Result

| Exported PDF                                                                                                                      | Exported PNG                                                                                                                                                                                                                                                            |
| --------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Screenshot of Slidev Slides exported as PDF](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yki7cp2ejzh2kajfna4w.png) | ![Screenshot of Slidev Slides exported as PNG 1](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g10c5eseet1h6qkhytcb.png) ![Screenshot of Slidev Slides exported as PNG 2](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hk7h42lpwo0gt44fna1s.png) |


## Appendix


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


### Big Thanks to 0phoff

Thank you [0phoff](https://github.com/0phoff) for pointing out that Slidev's export has more options than specified in the [sli.dev](https://sli.dev/) documentation.
