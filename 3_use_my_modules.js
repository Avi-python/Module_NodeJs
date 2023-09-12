// CommonJS, every file is a module (by default)
// Modules

const names = require('./4_names.js');
const { sayHi } = require('./5_utils.js');
const data = require('./6_alternative_flavor.js');
console.log(data);
sayHi("daniel");
require('./7_mind_grenade.js'); // 我們會調用(invoke)一遍裡面的程式碼

sayHi(names.john);
sayHi(names.peter);