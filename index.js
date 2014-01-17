var Elm = require("./result.js")

var w = Elm.worker(Elm.Logger)
var send = w.send('log')

console.log("Attempting to send")
send("Hello world")
