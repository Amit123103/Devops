const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Amit! Your production-ready Node.js container is live and operational!\n');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server executing successfully on port ${PORT}`);
});
