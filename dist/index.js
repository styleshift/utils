'use strict';

var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var classVarianceAuthority = require('class-variance-authority');
var tailwindVariants = require('tailwind-variants');

// src/index.ts
var tw = tailwindMerge.twMerge;
var cx = clsx.clsx;
var cv = classVarianceAuthority.cva;
var cn = (...inputs) => tw(cx(inputs));

Object.defineProperty(exports, "tv", {
  enumerable: true,
  get: function () { return tailwindVariants.tv; }
});
exports.cn = cn;
exports.cv = cv;
exports.cx = cx;
exports.tw = tw;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map