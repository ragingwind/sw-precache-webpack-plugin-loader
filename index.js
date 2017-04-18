'use strict';

const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const SWPrecacheWebpackDevServerPlugin = require('sw-precache-webpack-plugin');
const isWebpackDevServer = require('is-webpack-dev-server');

module.exports = isWebpackDevServer ? SWPrecacheWebpackDevServerPlugin : SWPrecacheWebpackPlugin;
