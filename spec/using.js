// only w/ jasmine-node
const print = console.log;
function using (name, values, func) {
  for (let i = 0; i < values.length; i++) {
    const type = (check) => Object.prototype.toString.call(check) !== `[object Array]`;
    if ( type(values[i]) ) values[i] = [values[i]];
    func.apply(this, values[i])
    const val = JSON.stringify(...values[i]);
    const desc = ` (with "${ name }" using ${ val })`
    jasmine.currentEnv_.currentSpec.description += desc;
  }
}

module.exports = using;