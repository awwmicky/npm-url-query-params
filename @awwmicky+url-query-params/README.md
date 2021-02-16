## What is This?

A URL query converter, both from string to object & object to string. 

e.g. `?q1=smith&q2=123` <==> `{ q1:"smith" , q2:123 }`

## Installation

run `npm install @awwmicky/url-query-params`

## How to Use this?

```js
const { urlQueryParams } = require('@awwmicky/url-query-params');
// import { urlQueryParams } from '@awwmicky/url-query-params'

const str = '?q1=&q2=smith&q3=&q4=123';
const obj = {q1:'' , q2:'jay' , q3:'' , q4:987 };

const convertToObj = urlQueryParams(str);
const convertToStr = urlQueryParams(obj);

console.log(convertToObj) // { q2:"smith" , q4:123 }
console.log(convertToStr) // "?q2=jay&q4=987"
```

## Parameters

`urlQueryParams` accepts one parameter, str (`""`) or obj (`{}`) value. By default, it will return `false`.