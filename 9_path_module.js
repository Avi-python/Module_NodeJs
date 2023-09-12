const path = require('path');


console.log(path.sep);

// 會正規劃我們所給予的參數變成一個 path
const filePath = path.join('/content//////', 'subfolder', 'test.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

// 識別 '/' 為根目錄
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test1.txt');
console.log(absolute);
// 如果沒有識別到 '/' 會返回一的帶當前目錄的絕對路徑
const another_absolute = path.resolve('content', 'subfolder', 'test1.txt');
console.log(another_absolute);