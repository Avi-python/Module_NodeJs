// stream => 當檔案很大，我就不適合直接一次閱讀所有資料，不然記憶體會爆炸，所以使用 stream 來讀。

// 創一大檔案
// const { writeFileSync } = require('fs');
// for(let i = 0; i < 10000; i++)
// {
//     writeFileSync('./content/big.txt', `hellow world${i}\n`, { flag: 'a' } );
// }

const { createReadStream } = require('fs');
// const stream = createReadStream('./content/big.txt'); // 預設 buffer size = 64 * 1024 = 65534, 可以使用 highWaterMark 更改。
const stream = createReadStream('./content/big.txt', { "encoding": "utf-8" });

stream.on('data', (chunck) => {
    console.log(chunck);
}); // 來自 Readable 的 event，

stream.on('error', (err) => { 
    console.log(err);
});