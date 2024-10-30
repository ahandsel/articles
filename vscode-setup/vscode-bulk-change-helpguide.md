# Easily Bulk Edit Files in Visual Studio Code


## Overview

* Learn how to bulk edit files in Visual Studio Code (VS Code) using the **Change All Occurrences** and **Multi-Cursor Editing** features.
* Customize keybindings to tailor these features to your workflow.
* This guide is for beginner VS Code users on macOS.


## Table of Contents

* [Overview](#overview)
* [Table of Contents](#table-of-contents)
* [Introduction](#introduction)
* [Preparations](#preparations)
* [Steps to Bulk Edit Files in VS Code](#steps-to-bulk-edit-files-in-vs-code)
  * [Using Change All Occurrences](#using-change-all-occurrences)
  * [Using Multi-Cursor Editing](#using-multi-cursor-editing)
  * [Using Add Cursors to Line Ends](#using-add-cursors-to-line-ends)
* [Customizing Keybindings for Bulk Editing](#customizing-keybindings-for-bulk-editing)
* [Restrictions](#restrictions)
* [Support and References](#support-and-references)
* [FAQs](#faqs)
  * [Q1. Why is this article written in a super-rigid structure?](#q1-why-is-this-article-written-in-a-super-rigid-structure)
  * [Q2. Why write about something so basic as bulk editing in VS Code?](#q2-why-write-about-something-so-basic-as-bulk-editing-in-vs-code)


## Introduction

This guide will walk you through using the **Change All Occurrences** and **Multi-Cursor Editing** features to modify multiple lines or text snippets efficiently. It is intended for users looking to enhance their editing speed. By the end of this guide, you will be able to **make bulk edits across multiple lines of text quickly**.

> [!NOTE]
> Windows users can follow these steps; however, specific keybindings may differ. Please refer to the [Keyboard shortcuts for Windows](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf) VS Code document.


## Preparations

Before beginning, make sure to:

1. **Open Visual Studio Code** - Install [Visual Studio Code](https://code.visualstudio.com/) if you have not already done so.
2. **Have a Workspace or File Open** - You need an open file or project to work with bulk edit features. A long file with repeated text or similar lines is ideal for practice.


## Steps to Bulk Edit Files in VS Code


### Using Change All Occurrences

The **Change All Occurrences** feature in VS Code allows you to select all instances of a word or selection and edit them simultaneously. This feature is helpful for fixing typos or changing variable names across the entire document.

1. **Select the Word or Text**  
    Highlight the text snippet you want to edit with your cursor.

2. **Invoke Change All Occurrences**  
    Press `Command (⌘) + Shift + L` to highlight all occurrences of the selected text.

3. **Edit the Text**  
    With all instances selected, type to edit. Changes you make will apply to each selected instance.

> [!TIP]
> You can also use the **Change All Occurrences** feature by right-clicking on the selected text and choosing **Change All Occurrences** from the context menu.


### Using Multi-Cursor Editing

**Multi-Cursor Editing** allows you to place multiple cursors in different parts of your file, enabling simultaneous editing in those locations. This feature is useful for making similar changes, such as to Markdown lists or CSS properties.

1. **Place Multiple Cursors**  
    To place a cursor on multiple lines, hold `Option` and click on each line where you want a cursor. You can also hold `Command (⌘) + Option + Down Arrow` or `Command (⌘) + Option + Up Arrow` to add a cursor on the line below or above, respectively.

2. **Edit the Lines Simultaneously**  
    Once your cursors are in place, type to make changes. Each cursor will apply your edits to its position.


### Using Add Cursors to Line Ends

Similar to multi-cursor editing, you can add cursors to the end of each line in a selection. This is useful when you want to edit a section of a file in the same way (for example, adding a period at the end of each line).

1. **Select the Lines**  
    Highlight the lines you want to edit.

2. **Add Cursors to Line Ends**  
    Open the command palette by pressing `Command (⌘) + Shift + P` and type `Add Cursors to Line Ends`. Select this option to place a cursor at the end of each line.

3. **Edit the Lines Simultaneously**  
    Type to make changes. Each cursor will apply your edits to its position.


## Customizing Keybindings for Bulk Editing

VS Code allows you to customize keybindings for nearly all features, including **Change All Occurrences** and **Multi-Cursor Editing**. By assigning custom shortcuts, you can streamline your workflow and make bulk editing even more efficient.

1. **Open Keyboard Shortcuts**  
    Go to `Code > Preferences > Keyboard Shortcuts` or use the shortcut `Command (⌘) + K, Command (⌘) + S`.

2. **Search for Change All Occurrences**  
    In the search bar, type `Change All Occurrences` to locate this feature. Right-click and select **Change Keybinding** to assign a new shortcut.

3. **Search for Multi-Cursor Keybindings**  
    Search for `Add Cursor Above` or `Add Cursor Below` to adjust multi-cursor shortcuts. Right-click and select **Change Keybinding** to modify these as well.

4. **Search for Add Cursors to Line Ends**  
    Search for `Add Cursors to Line Ends` to adjust the shortcut for this feature. Right-click and select **Change Keybinding** to assign a new shortcut.

5. **Save and Test the New Keybindings**  
    After adjusting your shortcuts, test them in a file to ensure they work as expected.

> [!TIP]
> You can easily export your custom keybindings to a file for backup or sharing with others by using the `Preferences: Open Keyboard Shortcuts (JSON)` command from the command palette to access the `keybindings.json` file.


## Restrictions

The **Change All Occurrences** and **Multi-Cursor Editing** features are limited to individual files. They do not apply across multiple open files or the entire project. For project-wide modifications, consider using **Find and Replace** across files (`Command (⌘) + Shift + F`).


## Support and References

* For more information on macOS-specific VS Code keybindings, refer to the [Visual Studio Code Keyboard Shortcuts Reference for macOS](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf).
* For more information on VS Code editing features, refer to the [Basic Editing in Visual Studio Code](https://code.visualstudio.com/docs/editor/codebasics#_multiple-selections-multicursor) documentation.


## FAQs

Here are some frequently asked questions about bulk editing in VS Code.


### Q1. Why is this article written in a super-rigid structure?

I am testing out a Help-Guide template for a different project and decided to post it here as well.


### Q2. Why write about something so basic as bulk editing in VS Code?

There were a few times where I noticed coworkers manually editing multiple lines of text in their documents and figured I should put together something specifically about bulk editing. Despite being a basic feature, it is not something you become aware of until you see someone else using it. Hopefully, this guide helps someone in a similar situation.
