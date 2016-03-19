var express = require('express');
var app = express();
var osascript = require('osascript').file;

app.get('/current', function (req, res) {
  runSpotify('current', function(err, result) {
    res.send({
      success: err == null,
      result: result.trim()
    });
  });
});

app.put('/playpause', function (req, res) {
  runSpotify('playpause', function(err, result) {
    res.send({ success: err == null });
  });
});

app.put('/play', function (req, res) {
  runSpotify('play', function(err, result) {
    res.send({ success: err == null });
  });
});

app.put('/pause', function (req, res) {
  runSpotify('pause', function(err, result) {
    res.send({ success: err == null });
  });
});

app.put('/next', function (req, res) {
  runSpotify('next', function(err, result) {
    res.send({ success: err == null });
  });
});

app.put('/previous', function (req, res) {
  runSpotify('previous', function(err, result) {
    res.send({ success: err == null });
  });
});

app.use(function(req, res, next) {
  res.status(404).send({
    success: false,
    error: 'Resource not found.'
  });
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send({
    success: false,
    error: 'Internal server error.'
  });
});

var port = process.env.SPOTIFY_CONTROLS_API_PORT || 3000;
app.listen(port, function () {
  console.log('Spotify Controls API is listening on port ' + port + '.');
});

function runSpotify(cmd, done) {
  var options = {
    type: 'AppleScript',
    args: [ cmd ]
  }

  osascript('Spotify.applescript', options, function (err, data) {
    done(err, data);
  });
}
