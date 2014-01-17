module Squarer where

import JavaScript as JS

foreign import jsevent "input"
        (JS.fromInt 0)
        inputs: Signal JS.JSNumber

foreign export jsevent "reply"
        outputs: Signal JS.JSNumber

numbers = JS.toInt <~ inputs
squares = (\n -> n^2) <~ numbers
outputs = JS.fromInt <~ squares

