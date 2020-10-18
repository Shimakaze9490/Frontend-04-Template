const http = require('http');
console.log(http);

http.createServer((request, response) => {
  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', () => {
    body.push(chunk.toString);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    console.log('body::', body);
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('Hello World!\n');
  });
}).listen(8080);

console.log('server started!');
// 