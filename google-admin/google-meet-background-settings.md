# Enforce an approved Google Meet background for employees

Here is a guide on preventing custom images from being used as Google Meet backgrounds and enforcing the use of approved backgrounds featuring the company logo.


## Prerequisites

* [Google Admin access](https://support.google.com/a/answer/182076)


## Prevent custom backgrounds in Google Meet

Modify the settings via the Google Workspace Admin Console to prevent users from using personal images as Google Meet background.


### Step 1: Navigate to Google Meet settings for your organization

1. Sign in to the [Google Admin Console](https://admin.google.com/).
1. Navigate `Apps` > `Google Workspace` > `Settings for Google Meet` > `Visual effects`.
    * Tip: Search `Visual effects` in the search bar to access the settings directly.
1. Find and click on `Visual effects` again under the `Meet video settings` section.


### Step 2: Understanding the Visual effects settings

The following options are available under Google Meet's visual effects settings:

`Users can replace their background with an image`  
* This option controls the ability for users to use any image (admin specified, Google provided, or not) as their [background image](https://support.google.com/a?p=background-replace).
* Recommendation: Keep on (default) ✅
  * This option is required if you want employees to use company-approved backgrounds.
  * If you turn off this option, users cannot use any background images.

`Users can replace their background with custom images they provide themselves`  
* This option allows users to set their personal image as their background.
* Recommendation: Turn off ❌
  * Uncheck this option to prevent employees from using their personal images as background.

`Users can replace their background with stock seasonal images`  
* This option allows users to use Google's stock images as background.
* Recommendation: Turn off ❌
  * Uncheck this option to prevent employees from using random stock images as background.

`Users can replace their background with a custom image provided by you`  
* This option allows users to use admin-provided images as background.
* Recommendation: Keep on (default) ✅
  * This option is required if you want employees to use company-approved backgrounds.
* Requirements:
  * Create a folder in Google Drive with the images you want to provide.
  * [Share the folder](https://support.google.com/a/answer/7337469?fl=1&sjid=15463232510368793355-NC) with all users in your organization.

`Users can use special effects`  
* This option allows users to use [special effects](https://support.google.com/a?p=background-replace&hl=en) like filters.
* Recommendation: Turn off ❌
  * Uncheck this option to prevent employees from using special effects.


## Prepare Google Meet background for employees

Keep the following in mind when creating the Google Meet background image:
* Admins can provide up to 15 images for each organizational unit or group.
* Recommended image format: JPEG, landscape orientation, and 1920x1080p.
* The text in the background image must be flipped vertically to be displayed correctly in Google Meet.

Steps to prepare the Google Meet background:
1. Create a background image featuring the company logo.
1. Create a folder in Google Drive.
1. Share the folder with all users in your organization.
    * Set the sharing permissions to "View" for all users.
    * Do not allow users to edit or delete the images in the folder to maintain consistency.


## Announce the change to employees

After setting up the approved backgrounds, informing your employees about the upcoming change is important. Below are Slack message templates you can use to notify them:


### Template 1: New Google Meet Background Added & Upcoming Settings Change

```markdown
*New Google Meet Background Added & Upcoming Settings Change*

Hello everyone,  
New backgrounds featuring our logo have been added to Google Meet settings for all members to use during meetings with clients or prospects. Additionally, we will be removing the ability to use custom images as backgrounds. This change will take effect on INSERT_DATE.

*Why the change?*  
We aim to maintain a professional look during our meetings and ensure our branding is consistent across all platforms.

*How to use the new backgrounds?*  
The new backgrounds can be found in your Google Meet settings under `Backgrounds` -> `For your organization`.  

*Feedback?*  
Please let me know if you have any feedback or suggestions for new backgrounds.

Thank you for your time and cooperation.  
IT team
```


### Template 2: Google Meet settings have been updated

```markdown
*Google Meet settings have been updated*
You may now only use backgrounds that feature our logo for Google Meet.
If you have any questions, concerns, or feedback, please feel free to let me know. Have a nice day!
```
