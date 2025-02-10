const http = require('http');

const server = http.createServer((req, res) => {
  res.on('close', () => {
    console.log('Client connection closed');
  });
  res.on('error', (err) => {
    if (err.code === 'ECONNRESET') {
      console.error('Client connection reset:', err);
      // Handle the error gracefully, prevent the server from crashing
      return;
    }
    console.error('Server error:', err);
  });
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

//For more robust handling consider using a library like 'nodemon' for automatic restarts on crash and 'pm2' for production environment process management.