module Logger where

import JavaScript as JS

foreign import jsevent "message"
        (JS.fromString "")
        messages: Signal JS.JSString


