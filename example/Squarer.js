Elm.Squarer = Elm.Squarer || {};
Elm.Squarer.make = function (_elm) {
   _elm.Squarer = _elm.Squarer || {};
   if (_elm.Squarer.values)
   return _elm.Squarer.values;
   var _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _E = _N.Error.make(_elm),
   _J = _N.JavaScript.make(_elm),
   $moduleName = "Squarer";
   var Basics = Elm.Basics.make(_elm);
   var Color = Elm.Color.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Collage = Elm.Graphics.Collage.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Element = Elm.Graphics.Element.make(_elm);
   var List = Elm.List.make(_elm);
   var Maybe = Elm.Maybe.make(_elm);
   var Native = Native || {};
   Native.Ports = Elm.Native.Ports.make(_elm);
   var Prelude = Elm.Prelude.make(_elm);
   var Signal = Elm.Signal.make(_elm);
   var String = Elm.String.make(_elm);
   var Text = Elm.Text.make(_elm);
   var Time = Elm.Time.make(_elm);
   var _op = {};
   var inputs = Native.Ports.portIn("inputs",
   Native.Ports.incomingSignal(function (v) {
      return typeof v === "number" ? _J.toInt(v) : _E.raise("invalid input, expecting JSNumber but got " + v);
   }));
   var outputs = Native.Ports.portOut("outputs",
   Native.Ports.outgoingSignal(function (v) {
      return _J.fromInt(v);
   }),
   A2(Signal._op["<~"],
   function (n) {
      return Math.pow(n,2);
   },
   inputs));
   _elm.Squarer.values = {_op: _op};
   return _elm.Squarer.values;
};