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

// 刪除的方法
// npm uninstall <packageName>
// or
// 把 package-lock.json 和 node_modules 刪掉 然後在 package.json 把不想要的 dependencies delete，再使用 npm install 把要的 dependencies 載回來。

const _ = require('lodash'); 

const item = [1, [2, [3, [4]]]];
const newItem = _.flattenDeep(item);
console.log(newItem);
console.log("hi"); // 這樣我就不用每次都打 node，就變成像是互動式的了