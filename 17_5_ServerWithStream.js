const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {

    const file = fs.readFileSync('./content/big.txt', 'utf-8');
    response.end(file); // 會是直接一個大檔案送過去

    // const fileStream = fs.createReadStream('./content/big.txt', 'utf-8');
    // fileStream.on('open', () => {
    //     fileStream.pipe(response);  // 會是一個個 chunck 發送，而不是一整個。
    //     // 用來將輸入流流向輸出流，但因為輸入輸出流可能流量不一，萬一輸出流量小於輸入，會出事，而 pipe 已經避掉這樣的問題了。
    // });

    // fileStream.on('error', (err) => {
    //     response.end(err);
    // });
});
server.listen(5000);