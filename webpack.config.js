'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, "script.js"),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  watch: true,

  devtool: "source-map",

  module: {},
  resolve: {
    fallback: {
      child_process: false, // Исключить child_process
    }
  }
};