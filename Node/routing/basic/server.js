import http from "http";

const server = http.createServer((req, res) => {
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

server.listen(7000, () => {
  console.log("✅ Server running at http://localhost:7000");
});
