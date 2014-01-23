var vm = require("vm");
var fs = require("fs");

var sandbox = { document: require('./document-wrapper.js'),
                window: {},
 		setTimeout: function(f, n) {f()},
	};

module.exports = function(runtimepath, modulepath) {
  var runtime = fs.readFileSync(runtimepath);
  var elmmodule = fs.readFileSync(modulepath);
  vm.runInNewContext(runtime, sandbox, runtimepath);
  vm.runInNewContext(elmmodule, sandbox, modulepath);

  return sandbox.Elm;
}
