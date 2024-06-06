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