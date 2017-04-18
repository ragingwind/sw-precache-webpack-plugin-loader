# sw-precache-webpack-plugin-loader [![Build Status](https://travis-ci.org/ragingwind/sw-precache-webpack-plugin-loader.svg?branch=master)](https://travis-ci.org/ragingwind/sw-precache-webpack-plugin-loader)

> It just another handy module to load sw-precache-webpack plugin selectively either it is working on webpack or webpack-dev-server. Please read issues[1](https://github.com/goldhand/sw-precache-webpack-plugin#webpack-dev-server-support) / [2](https://github.com/ragingwind/sw-precache-webpack-dev-server-plugin#how-it-works). if you have a question why there are two of modules for sw-precache.


## Install

```
$ yarn add sw-precache-webpack-plugin-loader
```
or
```
$ npm install --save sw-precache-webpack-plugin-loader
```


## Usage

```js
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin-loader');

...

new SWPrecacheWebpackPlugin({
	// configs for sw-precache
});
```

## Relevant Projects

- [ragingwind/sw-precache-webpack-dev-server-plugin: Webpack Plugin for using sw-precache during development with webpack-dev-server](https://goo.gl/FyXM10)
- [goldhand/sw-precache-webpack-plugin: Webpack plugin that generates a service worker using sw-precache that will cache webpack's bundles' emitted assets. You can optionally pass sw-precache configuration options to webpack through this plugin.](https://goo.gl/9ueQty)

## License

MIT © [Jimmy Moon](http://ragingwind.me)
