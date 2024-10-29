# Bulk Editing Files in Visual Studio Code on macOS Easily


## Overview

* Learn how to bulk edit files in Visual Studio Code (VS Code) using the **Change All Occurrences** and **Multi-Cursor Editing** features.
* Customize the keybindings to tailor these features to your workflow.
* This guide is for beginner VS Code users on macOS.


## Table of Contents

* [Overview](#overview)
* [Table of Contents](#table-of-contents)
* [Introduction](#introduction)
* [Preparations](#preparations)
* [Steps to Bulk Edit Files in VS Code](#steps-to-bulk-edit-files-in-vs-code)
  * [Using Change All Occurrences](#using-change-all-occurrences)
  * [Using Multi-Cursor Editing](#using-multi-cursor-editing)
  * [Customizing Keybindings for Bulk Editing](#customizing-keybindings-for-bulk-editing)
* [Restrictions](#restrictions)
* [Support](#support)
* [FAQs](#faqs)
  * [Q1. Can I undo changes made with Change All Occurrences?](#q1-can-i-undo-changes-made-with-change-all-occurrences)
  * [Q2. How can I select only specific words for multi-cursor editing?](#q2-how-can-i-select-only-specific-words-for-multi-cursor-editing)


## Introduction

This guide will walk you through using the **Change All Occurrences** and **Multi-Cursor Editing** features to modify multiple lines or instances of text efficiently. It is intended for users looking to enhance their editing speed in VS Code. By the end of this guide, you will be able to **easily make bulk edits across multiple lines of text easily**.

> [!NOTE]
> Windows users can follow similar steps with minor adjustments. The keybindings mentioned in this guide are for macOS.


## Preparations

Before beginning, make sure to:
1. **Open Visual Studio Code** - Install VS Code from [Visual Studio Code's website](https://code.visualstudio.com/) if it is not already installed.
2. **Have a Workspace or File Open** - You need an open file or project to work with bulk edit features.


## Steps to Bulk Edit Files in VS Code


### Using Change All Occurrences

The **Change All Occurrences** feature in VS Code allows you to select all instances of a word or selection and edit them simultaneously.

1. **Select the Word or Text**  
   Use your mouse to select the word or block of text you want to edit across your file.

2. **Invoke Change All Occurrences**  
   Press `Command + Shift + L` to highlight all occurrences of the selected text within your file.

3. **Edit the Text**  
   With all instances selected, type to edit. Changes you make will apply to each selected instance.

> Summary of Step 1: The **Change All Occurrences** feature allows for quick modifications across your file by selecting identical words or phrases and editing them simultaneously.


### Using Multi-Cursor Editing

**Multi-Cursor Editing** allows you to place multiple cursors in different parts of your code, enabling simultaneous editing in those locations.

1. **Place Multiple Cursors**  
   To place a cursor on multiple lines, hold `Option` and click on each line where you want a cursor. You can also hold `Command + Option + Down Arrow` or `Command + Option + Up Arrow` to add a cursor on the line below or above, respectively.

2. **Edit the Lines Simultaneously**  
   Once your cursors are in place, type to make changes. Each cursor will apply your edits to its position.

> Summary of Step 2: **Multi-Cursor Editing** is useful for editing multiple lines at once, saving time when working on repetitive structures.


### Customizing Keybindings for Bulk Editing

VS Code allows you to customize keybindings for the **Change All Occurrences** and **Multi-Cursor Editing** features.

1. **Open Keyboard Shortcuts**  
   Go to `Code > Preferences > Keyboard Shortcuts` or use the shortcut `Command + K, Command + S`.

2. **Search for Change All Occurrences**  
   In the search bar, type "Change All Occurrences" to locate this feature. Right-click and select **Change Keybinding** to assign a new shortcut.

3. **Search for Multi-Cursor Keybindings**  
   Search for "Add Cursor Above" or "Add Cursor Below" to adjust multi-cursor shortcuts. Right-click and select **Change Keybinding** to modify these as well.

4. **Save and Test the New Keybindings**  
   After adjusting your shortcuts, test them in a file to ensure they work as expected.

> Summary of Step 3: Customizing your keybindings allows you to tailor VS Code’s bulk editing features to fit your workflow.


## Restrictions

The **Change All Occurrences** and **Multi-Cursor Editing** features are limited to individual files. They do not apply across multiple open files or the entire project. For project-wide modifications, consider using **Find and Replace** across files (`Command + Shift + F`).


## Support

If you need further assistance, you can reach out to **Visual Studio Code Support**. When contacting support, please provide:
* A detailed description of the issue.
* Any relevant screenshots.
* Steps you have tried so far.


## FAQs

Here are some frequently asked questions about bulk editing in VS Code.


### Q1. Can I undo changes made with Change All Occurrences?

* A1: Yes, you can undo changes by pressing `Command + Z`. This will revert the most recent bulk edit action.


### Q2. How can I select only specific words for multi-cursor editing?

* A2: For more selective multi-cursor editing, use the **Find Selection** feature. Highlight the word, press `Command + D` to select additional instances one at a time.
