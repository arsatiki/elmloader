// TODO: Replace with an "Elm loader"
// elmloader.require([modules])
var elmloader = require("./elmloader.js")
var Elm = elmloader('elm-runtime.js', 'build/Main.js')

var w = Elm.worker(Elm.Squarer, {inputs: 0})

console.log("Attempting to send")

w.ports.outputs.subscribe(function(e) {console.log("Got", e.value)});

for (var k = 0; k < 10; k++)
	w.ports.inputs.send(k);
