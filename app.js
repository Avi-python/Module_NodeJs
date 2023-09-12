// dependency = module = package = a shared/reusable code

// npm -> global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency 
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// npm init 逐步產生 package.json 檔
// npm init -y 直接一氣合成，但我不知道要怎麼去指定目標檔案（main）

// npm -i lodash

const _ = require('lodash'); 

const item = [1, [2, [3, [4]]]];
const newItem = _.flattenDeep(item);
console.log(newItem);