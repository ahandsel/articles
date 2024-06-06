# Apple Shortcuts - Import & Delete Calendar Files Automation

Here is a walkthrough of how I built a shortcut to import and delete calendar files from my iCloud calendar.

I hope this can be useful for you in building your own shortcuts or modifying this one to suit your needs.


## TL;DR

* Apple Shortcuts: [Import & Delete Calendar Files](https://www.icloud.com/shortcuts/ceb35c3d1b524af5a65b40d8bc07c598)
* Click the link above to download the Apple Shortcut to your Mac and set the folder path to your `Downloads` folder.
* Download calendar files (`.ics`) to the `Downloads` folder.
* Run the shortcut to import the events to your Apple Calendar and delete the files from the `Downloads` folder.


## Apple Shortcut's Structure


### Open the Calendar App

* Use the `Open App` action to open the Calendar app.
  * The shortcut works smoother if the Calendar app is open at the start.


### Find and Get the Calendar Files

* Use the `Get Contents of Folder` action to get the files from the `Downloads` folder.
* Use the `Filter Files` action to filter the files with the `.ics` extension.


### Notify the User

* Use the `Count` action to count the number of files.
* Use the `Show Notification` action to display the number of files found.
  * This gives the user an estimate of how long the import will take.


### Import the Calendar Files

* Use the `Repeat with Each` action to loop through the files.
* Use the `Open File` action to open the file (`Repeat Item`) in the Calendar app.
* Use the `Run AppleScript` action to execute the script to automate clicking the `OK` button when prompted by the Calendar app.
  * The script is provided in the section below.
* End the `Repeat with Each` action.


### Delete the Calendar Files

* Repeat the steps to find and get the calendar files.
* Use the `Delete File` action to delete the files from the `Downloads` folder.
* Why duplicate the shortcut steps? For some reason, using the `Delete File` action after the `Open File` action does not work smoothly after the `Run AppleScript` action.


### Hide the Calendar App

* Use the `Hide App` action to hide the Calendar app.


## AppleScript to Automate Importing Calendar Events

This AppleScript automates the process of importing calendar events in the Calendar app on macOS. It mainly clicks the `OK` button when prompted by the Calendar app to import an event or skip already-imported events.

[calendar-event-importer.applescript](https://github.com/ahandsel/articles/blob/main/calendar-import-automation/calendar-event-importer.applescript)

```applescript
-- Script Name: Calendar Event Importer
-- Version: 1.1 - Improved script with timeout mechanism
-- Usage: Use this script to automate importing calendar events in the Calendar app on macOS.

-- Function: Check if the Calendar event window is open
on isEventWindowOpen(timeoutSeconds)
	set startTime to current date
	repeat until (existsEventWindow() or ((current date) - startTime) > timeoutSeconds)
		delay 0.5
	end repeat
	return existsEventWindow()
end isEventWindowOpen

-- Function: Check if the event window exists
on existsEventWindow()
	tell application "System Events"
		tell process "Calendar"
			if exists button "OK" of window 1 then
				return true
			end if
		end tell
	end tell
	return false
end existsEventWindow

-- Main script execution
try
	-- Adjust the delay as necessary to ensure the event window has time to open
	delay 2
	
	-- Set timeout period (in seconds) for event window to open
	set timeoutPeriod to 10
	
	-- Check if the event window is open within the timeout period
	if isEventWindowOpen(timeoutPeriod) then
		tell application "System Events"
			tell process "Calendar"
				click button "OK" of window 1
			end tell
		end tell
	else
		-- Event window did not open within timeoutPeriod. Skipping event.
	end if
end try
```


### How to Import and Use the Apple Shortcut

This automation uses the [Shortcuts on Mac](https://support.apple.com/guide/shortcuts-mac/intro-to-shortcuts-apdf22b0444c/mac).

You can get it on your Mac by clicking on the [Import & Delete Calendar Files](https://www.icloud.com/shortcuts/ceb35c3d1b524af5a65b40d8bc07c598) link.

You will be prompted with three questions:
1. Which folder do you want to import the calendar files from? (Default: Downloads)
2. Folder path (same as above)
3. Do you want to delete the calendar files after importing them? (Default: Yes)

After answering the questions, the shortcut will be added to your Shortcuts app on your Mac.

To run the shortcut:
1. Download the calendar files (`.ics`) to the folder you specified.
2. Open the Shortcuts app and run the shortcut.
3. The events will be imported to your Apple Calendar and the files will be deleted from the folder.
