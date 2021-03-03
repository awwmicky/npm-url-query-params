const { urlQueryParams } = require('../index.js');
const using = require('./using.js');
const print = console.log;

describe("Test Case:", () => {
  const validList = [ '?q1=hr' , {q1:"hr"} ];
  const invalidList = [
    "", 0, 123, true, false, 
    [], {}, () => "", 
    NaN, null, undefined
  ];

  using("valid values", validList, (value) => {
    it("return truthy based datatype", () => {
      print(`🟢 valid values: ${ typeof value }`)
      
      const check = urlQueryParams(value);
      const checkSize = Object.keys(check).length;

      expect(checkSize).toBeTruthy()
    })
  })

  using("invalid values", invalidList, (value) => {
    it("return falsy based datatype", () => {
      print(`🔴 invalid values: ${ typeof value }`)      
      const checkType = urlQueryParams(value);
      expect(checkType).toBeFalsy()
    })
  })
})

describe("Test URL Query Params:", () => {
  it("query str should convert to obj with key-value pairs", () => {
    print('📦 query: str to obj')
    
    const str = '?q1=&q2=smith&q3=&q4=123';
    const convertStrToObj = urlQueryParams(str);
    const strResult = { q2:"smith" , q4:"123" };
    
    expect(convertStrToObj).toEqual(strResult)
  })

  it("the obj with key-value pairs should convert to a query str", () => {
    print('📦 query: obj to str')
    
    const obj = { q1:'' , q2:'jay' , q3:'' ,  q4:987 };   
    const convertObjToStr = urlQueryParams(obj);
    const objResult = "?q2=jay&q4=987";
    
    expect(convertObjToStr).toBe(objResult)
  })
})