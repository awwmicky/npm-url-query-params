const print = console.log;

const urlQueryParams = (item) => {
  if (!item) return false;

  if (typeof item === 'string' || item instanceof String) {
    return (
      item.split(/[?&]/).slice(1).reduce((acc,curr) => {
        const [key,prop] = curr.split('=');
        if (!prop) return acc;
        return { ...acc , [key]:prop };
      } , {})
    );
  }

  if (typeof item === 'object' && !Array.isArray(item)) {
    return (
      Object.entries(item).reduce((acc,[key,prop]) => {
        if (!prop) return acc;
        acc += (!acc ? '?' : '&');
        return acc += `${ key }=${ prop }`;
      } , "")
    );
  }

  return false;
};

if (
  typeof exports !== "undefined" || 
  typeof module !== "undefined"
) module.exports = { urlQueryParams }