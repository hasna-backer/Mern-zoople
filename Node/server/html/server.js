import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <html>
      <head><title>Node Server</title></head>
      <body style="font-family: Arial; text-align:center;">
        <h1 style="color:green;">Hello from Node.js</h1>
        <p>Now serving HTML </p>
      </body>
    </html>
  `);
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});