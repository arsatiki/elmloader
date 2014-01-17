module Squarer where

import JavaScript as JS

foreign import jsevent "input"
        (JS.fromInt 0)
        inputs: Signal JS.JSNumber

square: JS.JSNumber -> JS.JSNumber
square n = (JS.toInt n)^2 |> JS.fromInt

squares = square <~ inputs

foreign export jsevent "reply"
        squares: Signal JS.JSNumber


