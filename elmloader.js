var vm = require("vm");
var fs = require("fs");
var jsdom = require("jsdom").jsdom;
var doc = jsdom();
var window = doc.parentWindow;


var sandbox = { document: doc,
                window: window,
 		setTimeout: window.setTimeout
	};

module.exports = function(runtimepath, modulepath) {
  var runtime = fs.readFileSync(runtimepath);
  var elmmodule = fs.readFileSync(modulepath);
  vm.runInNewContext(runtime, sandbox, runtimepath);
  vm.runInNewContext(elmmodule, sandbox, modulepath);

  return sandbox.Elm;
}
