# URL Query Params

[GitHub](https://github.com/awwmicky/npm-url-query-params)
| 
[NPM](https://www.npmjs.com/package/@awwmicky/url-query-params)
|
[CDN](https://unpkg.com/@awwmicky/url-query-params/index.js)

---

## What is this?

A URL query converter, transfering the key value pairs, from string to object & viceversa.

e.g. `?q1=smith&q2=123` <==> `{ q1:"smith" , q2:123 }`

## Installation

run `npm install @awwmicky/url-query-params`

or

copy `<script src="https://unpkg.com/@awwmicky/url-query-params/index.js"></script>`

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
[CDN](https://unpkg.com/@awwmicky/url-query-params/index.js)