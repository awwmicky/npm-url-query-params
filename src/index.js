// const print = console.log;

function urlQueryParams (item) {
  const type = (check,val) => Object
    .prototype.toString.call(check) === `[object ${val}]`;
  const len = (size) => Object.keys(size).length;

  if (!item) return false;
  if (!len(item)) return false;

  if (typeof item === 'string' || item instanceof String) {
    return (
      item.split(/[?&]/).slice(1).reduce((acc,curr) => {
        const [key,prop] = curr.split('=');
        if (!prop) return acc;
        return { ...acc , [key]:prop };
      } , {})
    );
  }

  if ( type(item,'Object') ) return (
    Object.entries(item).reduce((acc,[key,prop]) => {
      if (!prop) return acc;
      acc += (!acc ? '?' : '&');
      return acc += `${ key }=${ prop }`;
    } , "")
  );

  return false;
};

if (
  typeof exports !== "undefined" || 
  typeof module !== "undefined"
) module.exports = { urlQueryParams }