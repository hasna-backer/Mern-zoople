import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome Home\ hiiiiiii");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About Us Page ");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found ");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});