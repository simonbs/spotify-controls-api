on run (argv)
	set cmd to item 1 of argv
	if is_running("Spotify") then
		try
			if cmd is equal to "current" then
				current_track()
			else if cmd is equal to "play" then
				play()
			else if cmd is equal to "pause" then
				pause()
			else if cmd is equal to "playpause" then
				playpause()
			else if cmd is equal to "next" then
				next_track()
			else if cmd is equal to "previous" then
				previous_track()
			end if
		on error
			log "Could not execute the command. Did you run the script from command line and passed in a valid argument? E.g. next, previous, play, pause or playpause?"
		end try
	end if
end run

on current_track()
	tell application "Spotify"
		if player state is equal to playing then
			set artist_name to artist of current track
			set track_name to name of current track
			return artist_name & " - " & track_name
		end if
	end tell
end current_track

on play()
	tell application "Spotify" to play
end play

on pause()
	tell application "Spotify" to pause
end pause

on playpause()
	tell application "Spotify" to playpause
end playpause

on next_track()
	tell application "Spotify" to next track
end next_track

on previous_track()
	tell application "Spotify"
		if player position is greater than 3 then
			previous track
			previous track
		else
			previous track
		end if
	end tell
end previous_track

on is_running(appName)
	tell application "System Events" to (name of processes) contains appName
end is_running