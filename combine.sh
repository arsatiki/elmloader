#!/bin/bash

cat elm-runtime.js build/Main.js > result.js
cat >> result.js <<EOF
module.exports = Elm;
EOF