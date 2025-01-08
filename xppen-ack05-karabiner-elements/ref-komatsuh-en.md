---
title: "Using the XPPen ACK05 Shortcut Remote with macOS's Karabiner-Elements"
emoji: "⌨️"
type: "tech"
topics:
  - "macos"
  - "keyboard"
  - "karabiner"
published: true
published_at: "2023-08-13 23:07"
---

Initial draft: 2023-08-13
Hiroyuki Komatsu ([@komatsuh:twitter](https://twitter.com/komatsuh), [@komatsuh:bsky](https://bsky.app/profile/komatsuh.bsky.social))


## Introduction

The XPPen ACK05 Shortcut Remote (hereafter referred to as ACK05) is an input device known as a left-hand device or macro pad. I am fond of its simple design.

While there is a macOS-specific configuration app available, it is also possible to use it in combination with Karabiner-Elements. This article will guide you through the process.

![XPPen ACK05](https://storage.googleapis.com/zenn-user-upload/b3998992ced4-20230813.png)

<https://www.xp-pen.jp/product/1369.html>


## What is Karabiner-Elements?

Karabiner-Elements is an application for macOS that allows you to modify settings for keyboards and mice. For example, you can remap the Japanese keyboard's conversion/non-conversion keys to macOS's kana/Alphanumeric keys, or assign F11 to a mouse click.

While standard configurations are readily available, it is also possible to set up more complex configurations by writing JSON files. The setup for ACK05 is implemented through a JSON file.

<https://karabiner-elements.pqrs.org/>


## Using ACK05 with Karabiner-Elements

Normally, you would install a driver and configuration app specifically for the ACK05, but when using Karabiner-Elements, this is not necessary. No installation of drivers or apps is required.

Even without a driver, the ACK05 will operate with its standard settings. Karabiner-Elements allows you to make modifications based on these settings.

![ACK05 Default Settings](https://storage.googleapis.com/zenn-user-upload/2dcd937c3e24-20230813.png)
*ACK05 Default Settings (from the product site)*


## Loading a Template Configuration File

When you load a template configuration file, it assigns each key and the left and right wheels of the ACK05 to the number keys and l, r, respectively. You can then rewrite these assignments to the settings you actually want to use.

The procedure is as follows:

1. Save the template JSON file to `~/.config/karabiner/assets/complex_modifications/xppen_ack05.json`
2. Start Karabiner-Elements
3. Enable Modify events for XP-PEN under the Devices section
4. Under Complex Modifications, add the XPPen ACK05 setting and enable it
5. Raise the priority of XPPen ACK05


### 1. Saving the Template JSON File

Save the following configuration file to `~/.config/karabiner/assets/complex_modifications/xppen_ack05.json` (collapsed for space):

[xxpen-ack05.json](./xppen-ack05.json)


### 2. Start Karabiner-Elements

Please start the application.


### 3. Enable Modify Events for XP-PEN

![Karabiner-Elements > Devices](https://storage.googleapis.com/zenn-user-upload/ce75558d9c47-20230813.png)


### 4. Enable the XPPen ACK05 Setting

![Karabiner-Elements > Complex Modifications > Add Rule](https://storage.googleapis.com/zenn-user-upload/dc5d53b9d0c4-20230813.png)


### 5. Raise the Priority of XPPen ACK05

![Karabiner-Elements > Complex Modifications](https://storage.googleapis.com/zenn-user-upload/864b7e1df7a1-20230813.png)

Raising the priority is to avoid conflicts with other settings. If other high-priority settings use the keys that the ACK05 standard settings use, those settings will be applied instead, and it may not work as expected. The settings for ACK05 will only apply to the ACK05 and do not affect other settings.

With these settings in place, each key and wheel input should now input the number keys and l, r.


## Editing the Template

You can replace the number keys and l, r in the template with your preferred settings. Anything you can do in Karabiner-Elements can be applied here.

The keys are arranged in the following order:
Wheel left and right, K4,

 K3, K2, K1, K10, K9, K8, K7, K6, K5

The order is not intuitive because the K7, K6, K5 keys are typically assigned to Command, Control, Shift by default. By setting these last, we adjust the evaluation priority of the settings.

The JSON file editing instructions can be found in the reference manual.

<https://karabiner-elements.pqrs.org/docs/json/typical-complex-modifications-examples/>


## What Karabiner-Elements Can and Cannot Do

What it can do:
* Change settings for ACK05's wheel and each key

What it cannot do:
* GUI-based editing like the ACK05 standard app

Things it might be able to do but haven't been confirmed:
* Per-application key settings
* Page switching of key settings

Things the method for which is unknown:
* Recognition of the K11 key in the middle of the wheel


## Conclusion

This article introduced how to configure the XPPen ACK05 using Karabiner-Elements. I find it very useful for launching applications, navigating screens, and assigning editor shortcut keys.

If anyone knows how to recognize the K11 key, please let me know.
