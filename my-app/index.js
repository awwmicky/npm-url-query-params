const print = console.log;
// import { urlQueryParams } from 'my-package'
import { urlQueryParams } from '@awwmicky/url-query-params'
// const { urlQueryParams } = require('my-package');
// const { urlQueryParams } = require('@awwmicky/url-query-params');

print('testing out npm')
// print(urlQueryParams)

const str = '?q1=&q2=smith&q3=&q4=123';
const aStr = new String(str);
const obj = { q1:'' , q2:'jay' , q3:'' ,  q4:987 };

const strItem = "";
const numItem = 123;
const booItem = true;
const arrItem = [];

print(

urlQueryParams(str)
// urlQueryParams(aStr)
// urlQueryParams(obj)
// urlQueryParams(strItem)
// urlQueryParams(numItem)
// urlQueryParams(booItem)
// urlQueryParams(arrItem)

)