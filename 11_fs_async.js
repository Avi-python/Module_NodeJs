const { readFile, writeFile } = require('fs');
const path = require('path');

// 就需要 callback fn

console.log("start readFile");

readFile('./content/first.txt', 'utf-8', (err, first) => {
    if(err)
    {
        console.log(err);
        return;
    }
    else
    {
        readFile('./content/second.txt', 'utf-8', (err, second) => {
            if(err)
            {
                console.log(err);
                return;
            }
            else
            {
                writeFile('./content/result_async.txt', 
                          `This is async write: ${first}, ${second}`, 
                          {flag: 'a'}, (err, result) => {
                    if(err)
                    {
                        console.log(err);
                        return;
                    }
                    else
                    {
                        console.log("finish writing!");
                    }   
                });
            }
        });
    }
});

console.log("Do another thing.");