// node-server-query.js
import http from "http";
import url from "url";

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // parse query params
  res.writeHead(200, { "Content-Type": "text/plain" });

  if (parsedUrl.pathname === "/" && req.method === "GET") {
    res.end("Welcome to Home Page 🏠");
  } 
  else if (parsedUrl.pathname === "/about" && req.method === "GET") {
    const name = parsedUrl.query.name || "Guest";
    res.end(`Hello ${name}, this is the About Page ℹ️`);
  } 
  else if (parsedUrl.pathname === "/contact" && req.method === "GET") {
    res.end("Contact us at: contact@example.com 📧");
  } 
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found ❌");
  }
});

server.listen(3000, () => {
  console.log("✅ Node.js Server running at http://localhost:3000");
});
