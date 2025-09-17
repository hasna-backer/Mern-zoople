import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/users") {
    if (req.method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Fetching all users 🧑‍🤝‍🧑" }));
    } 
    else if (req.method === "POST") {
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Creating a new user ✨" }));
    } 
    else if (req.method === "PUT") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Updating user (replace data) 🔄" }));
    } 
    else if (req.method === "DELETE") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Deleting user ❌" }));
    } 
    else {
      res.writeHead(405, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Method Not Allowed 🚫" }));
    }
  } 
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not Found ❌" }));
  }
});

server.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000");
});
