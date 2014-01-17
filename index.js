// TODO: Replace with an "Elm loader"
// elmloader.require([modules])
var Elm = require("./result.js")

var w = Elm.worker(Elm.Squarer)
var send = w.send('input')

console.log("Attempting to send")

w.recv('reply', function(e) {console.log("Got ", e.value)});

for (var k = 0; k < 10; k++)
	send(k);
