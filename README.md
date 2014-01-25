Elmloader
=========

This module loads compiled Elm javascript files.

It probably does not work very well yet. The included example does work.

How to use it
-------------

    var elmloader = require('elmloader')
    var Elm = elmloader(<path to Elm runtime.js>, <path to your module>)

Supported Elm versions
----------------------

- Elm 0.11: elmloader 0.1.x

A pre-0.1.0 commit works with Elm 0.10.1 and possibly earlier versions as well.
