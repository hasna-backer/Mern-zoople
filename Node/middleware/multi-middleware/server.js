import http from "http";

function logger(req, res, next) {
  console.log(`[LOG] ${req.method} - ${req.url}`);
  next();
}

function auth(req, res, next) {
  if (req.url === "/secret") {
    res.writeHead(403, { "Content-Type": "text/plain" });
    res.end("❌ Access Denied");
  } else {
    next();
  }
}

function finalHandler(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("✅ Request Passed All Middleware!");
}

const server = http.createServer((req, res) => {
  logger(req, res, () => {
    auth(req, res, () => {
      finalHandler(req, res);
    });
  });
});

server.listen(3000, () => {
  console.log("🚀 Middleware server at http://localhost:3000");
});
