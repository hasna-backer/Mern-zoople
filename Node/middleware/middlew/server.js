import http from "http";

// ✅ Simple logger middleware
function logger(req, res) {
  const now = new Date().toISOString();
  console.log(`[${now}] ${req.method} ${req.url}`);
}

const server = http.createServer((req, res) => {
  // 🔥 Run middleware first
  logger(req, res);

  // 🎯 Route handling
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("🏡 Home Page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("👩‍💻 About Page");
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("📧 Contact us at support@example.com");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("❌ 404 Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000");
});
