#!/usr/bin/env bash

STAT_FILE_PATH="stats.json"

rimraf "$STAT_FILE_PATH"
webpack --json --config scripts/webpack/analyze.js >"$STAT_FILE_PATH"
webpack-bundle-analyzer "$STAT_FILE_PATH"
