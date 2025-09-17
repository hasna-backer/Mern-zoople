import http from "http";

function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next(); // move to the next middleware/handler
}

function handler(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Node.js with middleware!");
}

const server = http.createServer((req, res) => {
  // simulate middleware execution
  logger(req, res, () => {
    handler(req, res);
  });
});

server.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000");
});
