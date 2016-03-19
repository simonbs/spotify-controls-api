# spotify-controls-api

A dead simple API for controlling Spotify from other services.

This tiny API is useful for integration into other services, e.g. [openHAB](http://github.com/openhab/openhab-distro) if you are into home automation. The API can easily be integrated into openHAB using either the [HTTP Binding](https://github.com/openhab/openhab/wiki/Http-Binding) or the [Exec binding](https://github.com/openhab/openhab/wiki/Exec-Binding).

## Features

This simple API allows you to control Spotify running on an OS X machine using a simple API which you can communicate with using HTTP.

The following commands are supported:

- Play
- Pause
- Play/pause, i.e. toggling between the two.
- Next track
- Previous track
- Retrieving artist name and track name for the current track.

## Usage

Run the Node.js app using `node app.js`. The API will be available on `localhost:3000`.

You can issue the following requests. E.g. `PUT localhost:3000/next` to skip to the next track.

| HTTP Method | Resource                      |
|-------------|--------------------------------
| PUT         | /play                         |
| PUT         | /pause                        |
| PUT         | /playpause                    |
| PUT         | /next                         |
| PUT         | /previous                     |
| GET         | /current                      |

The API is backed by an Apple Script which sends the commands to Spotify.
