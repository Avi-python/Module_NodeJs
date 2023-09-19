const http = require('http');

const server = http.createServer((request, response) => // request 是一個可讀流，response 是一個可寫流。
{
    if(request.url === '/')
    {
        response.end("Welcome to home page");
        return;
    }
    if(request.url === '/about')
    {
        // response.write("googoo");
        response.end("Something about Me !");
        return;
    }
    
    response.end(`
    <h1>Ooops</h1>
    <p>nononoooooooooooooooooooo</p>
    <a href='/'>back home</a>
    `);
    
    
});

server.listen(3000);