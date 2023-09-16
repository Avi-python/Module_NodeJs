// 1. 自己撰寫
const { readFile } = require('fs');

function getFile(path){
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, content) => {
            if(err) 
            {
                reject(err);
            }
            else
            {
                resolve(content);
            }
        });
    });
}

// getFile("./content/first.txt")
//     .then((content) => { console.log(content); return getFile("./content/second.txt"); })
//     .then((content) => console.log(content))
//     .catch((err) => console.log(err));

// 2. promiseify

const util = require('util');
const readFilePromise = util.promisify(readFile);

const start = async () => {
    try
    {
        let content = await readFilePromise("./content/first.txt", "utf-8");
        console.log(content);
    }
    catch(err)
    {
        console.log(err);
    }
}

start();

// 3. require().promises





