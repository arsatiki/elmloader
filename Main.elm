module Squarer where

port inputs: Signal Int
port outputs: Signal Int

port outputs = (\n -> n^2) <~ inputs
