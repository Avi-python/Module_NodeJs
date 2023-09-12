const { readFile, writeFile } = require('fs');

const f = (file_path) => {
    return new Promise((resolve, reject) => readFile(file_path, 'utf-8', (err, content) => 
    {
        if(err)
            reject(err);
        else
            resolve(content);
    }));
};

f('./content/subfolder/test1.txt')
    .then((content) => { console.log(content); return f('./content/first.tx'); })
    .then((content) => { console.log(content); })
    .catch((err) => console.log(err));