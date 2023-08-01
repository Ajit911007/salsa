const http = require('http');

const server = http.createServer((req, res) => {
  // Set the response headers
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Write the response content (a simple HTML page)
  res.end('<html><body><h1>Hello, World!</h1></body></html>');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
