# Example of Slidev Presentation and Hosted on GitHub Pages

Do you hate PowerPoint?

Do you love Markdown and git version control?

If so, you should try [Slidev](https://sli.dev/) and write your next presentation in Markdown!

Here is a walkthrough of how I created a presentation using Slidev and hosted it on GitHub Pages.

## What is Slidev?

[Slidev](https://sli.dev/) is a markdown-based presentation framework that is built on top of [Vite](https://vitejs.dev/).

It is similar to [reveal.js](https://revealjs.com/), but it is much easier to use and great for beginners.

It is also fully customizable with CSS and Vue components so great for pros as well.

For more information, check out the [Slidev documentation](https://sli.dev/guide/why.html).

## Why use Slidev?

I was looking for a way to create a presentation that was:
* Markdown-based
* Outputs as a website
* Easy to maintain and update
* Everything is in a single GitHub repo
* Free

I found Slidev and it checked all the boxes!

It strikes a great balance between ease of use and customization.
* Their [Quick Start](https://sli.dev/guide/#scaffolding-your-first-presentation) can get you up & running in 5 minutes
* Their [customization options](https://sli.dev/custom/#frontmatter-configures) are endless

Alright, now that you are convinced to use Slidev, let's get started!

---

## How to create a Slidev presentation


### Step 1 - Write up your slides in Markdown

A key advantage of Markdown-based slides is it is super easy to go from an outline to a full presentation.

I wrote up the titles of each slide like so:

```md
Outline
* Title Slide
* Hi from Kintone
* Why Use Kintone in My Project?
* Store Your Data in Kintone Web Database
* Traditional vs. Kintone Databases
* Example - Space Invaders
* Example - IoT Samurai Swords
* Example - Hibotan / Flowerpot Project
* Get your Kintone
* Kintone Prize
* Kintone Prize Judging Criteria
```

Then write up sub-bullets for each slide:

```md
* Why Use Kintone in My Project?
  * Free - Kintone is entirely free for developers. No credit card is required!
  * Easy - Easiest way to set up a web database for your project! No server to set up!
  * Quick - Build a web app quickly with just HTML & JS!
  * Resources - Ask Kintone staff for help! Lots of videos & articles to refer to!
```

### Step 2 - Install Slidev

```shell
npm init slidev@latest
```


## How to host a Slidev presentation on GitHub Pages

---

Here is how I created my presentation:
1. Install Slidev
1. Create a new Slidev project
