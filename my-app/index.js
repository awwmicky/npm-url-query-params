console.clear()
// const { urlQueryParams } = require('../my-package/index.js')
import { urlQueryParams } from '../my-package/index.js'
// import { urlQueryParams } from 'my-package'
// import { urlQueryParams } from '@awwmicky/url-query-params'
// const { urlQueryParams } = require('my-package');
// const { urlQueryParams } = require('@awwmicky/url-query-params');
const print = console.log;

print('testing out npm module 📦')
// print(urlQueryParams)

const str = '?q1=&q2=smith&q3=&q4=123';
const obj = { q1:'' , q2:'jay' , q3:'' ,  q4:987 };

const strItem = "";
const numItem = 123;
const booItem = true;
const arrItem = [];
const objItem = {};
const fnItem = () => "";
const nanItem = NaN;
const nullItem = null;
const undefinedItem = undefined;

print(str, urlQueryParams(str))
print(obj, urlQueryParams(obj))

print(
// urlQueryParams(strItem),
// urlQueryParams(numItem),
// urlQueryParams(booItem),
// urlQueryParams(arrItem),
// urlQueryParams(objItem),
// urlQueryParams(fnItem),
// urlQueryParams(nanItem),
// urlQueryParams(nullItem),
// urlQueryParams(undefinedItem),
)