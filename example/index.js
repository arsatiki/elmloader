var elmloader = require("elmloader")
var Elm = elmloader('elm-runtime.js', 'Squarer.js')

var w = Elm.worker(Elm.Squarer, {inputs: 0})

console.log("Attempting to send")

logger = function(e) {console.log("Got", e)};
w.ports.outputs.subscribe(logger);

for (var k = 0; k < 10; k++)
	w.ports.inputs.send(k);
