# URL Query Params

[![npm](https://img.shields.io/npm/v/@awwmicky/url-query-params?logo=npm)](https://www.npmjs.com/package/@awwmicky/url-query-params)
[![GitHub package.json version](https://img.shields.io/github/package-json/v/awwmicky/url-query-params?logo=github)](https://github.com/awwmicky/url-query-params/packages/633011)
[![🚀 Publish & Release](https://github.com/awwmicky/url-query-params/actions/workflows/publish.yml/badge.svg?branch=master)](https://github.com/awwmicky/url-query-params/actions/workflows/publish.yml)
![GitHub file size in bytes](https://img.shields.io/github/size/awwmicky/url-query-params/src/index.js?color=teal)

[GitHub](https://github.com/awwmicky/npm-url-query-params)
| 
[NPM](https://www.npmjs.com/package/@awwmicky/url-query-params)
|
[CDN](https://unpkg.com/@awwmicky/url-query-params/src/index.js)

---

## What is this?

A URL query converter, transfering the key value pairs, from string to object & viceversa.

e.g. `?q1=smith&q2=123` <==> `{ q1:"smith" , q2:123 }`

## Installation

run `npm install @awwmicky/url-query-params`

or

copy `<script src="https://unpkg.com/@awwmicky/url-query-params/src/index.js"></script>`

## How to use this?

```js
const { urlQueryParams } = require('@awwmicky/url-query-params');
/* OR */
import { urlQueryParams } from '@awwmicky/url-query-params' // ES6

const str = '?q1=&q2=smith&q3=&q4=123';
const obj = { q1:'' , q2:'jay' , q3:'' , q4:987 };

const convertToObj = urlQueryParams(str);
const convertToStr = urlQueryParams(obj);

console.log(convertToObj) // { q2:"smith" , q4:123 }
console.log(convertToStr) // "?q2=jay&q4=987"
```

## Parameters

`urlQueryParams` accepts only one parameter, str (`""`) or obj (`{}`) value. By default, it will return `false`.

---

[GitHub](https://github.com/awwmicky/npm-url-query-params)
| 
[NPM](https://www.npmjs.com/package/@awwmicky/url-query-params)
|
[CDN](https://unpkg.com/@awwmicky/url-query-params/src/index.js)

<!-- https://shields.io/ -->