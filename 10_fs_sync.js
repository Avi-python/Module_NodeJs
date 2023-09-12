const { readFileSync, writeFileSync, readFile } = require('fs');

// const a = require('fs'); console.log(a);
// so long

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

writeFileSync(
    './content/result_sync.txt', // 沒有找到檔案會自動新增
    `Here is the result: ${first}, ${second}`, // 預設是 overwrite
    {
        flag: 'a'
    }
)