#!/usr/bin/env bash

rimraf dist
webpack --config scripts/webpack/prod.js
