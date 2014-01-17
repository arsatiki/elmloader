#!/bin/bash

cat > result.js <<EOF
var document = require('./document-wrapper.js');
EOF
cat elm-runtime.js build/Main.js >> result.js
cat >> result.js <<EOF
module.exports = Elm;
EOF