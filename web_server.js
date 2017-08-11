const http = require('http');
const port = 8080;
const server = http.createServer((req, res) => {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end('Hi Everybody!\n');
});
server.listen(port, () => {
  console.log(`Server running at http://your-ip-add-ress:${port}/`);
});
