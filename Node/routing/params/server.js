import http from "http";
import url from "url";

const server = http.createServer((req, res) => {
  // Step 1: Parse the URL
  const parsedUrl = url.parse(req.url, true);
//   {
// 	pathname: "/greet",       // just the path
// 	query: { name: "Hasna" }, // query params as object
// 	search: "?name=Hasna",    // raw query string
// 	href: "/greet?name=Hasna" // full URL
//   }
  
  

  // Step 2: Check which route it is
  if (parsedUrl.pathname === "/greet") {
    // Step 3: Extract query param 'name'
    const name = parsedUrl.query.name || "Guest";

    // Step 4: Send response
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Hello, ${name}! `);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found ");
  }
});

server.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000");
});
