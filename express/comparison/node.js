// node-server.js
import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  if (req.url === "/" && req.method === "GET") {
    res.end("Welcome to Home Page 🏠");
  } else if (req.url === "/about" && req.method === "GET") {
    res.end("This is the About Page ℹ️");
  } else if (req.url === "/contact" && req.method === "GET") {
    res.end("Contact us at: contact@example.com 📧");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found ❌");
  }
});

server.listen(3000, () => {
  console.log("✅ Node.js Server running at http://localhost:3000");
});
