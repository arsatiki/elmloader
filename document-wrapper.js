var events = require('events');
var emitter = new events.EventEmitter();

function EventShim() {}

// String -> Boolean -> Boolean -> ()
EventShim.prototype.initEvent = function(t, bubbles, cancellable) {
	this.name = t;
	// Set by Elm.
	this.value = undefined;
}

module.exports = {
	// String -> Event
	createEvent: function(eventtype) {
		// eventtype should be "event", not enforced
		return new EventShim();
	}, 

	// Event -> ()
	dispatchEvent: function(e) {
		emitter.emit(e.name, e.value)
	},
	
	// String -> (Event -> ()) -> ()
	addEventListener: function(event, callback) {
		var wrapped = function(value) {
			callback({value: value});
		}
		emitter.on(event, wrapped);
	}
	
}