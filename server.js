const http = require("http");
const App = require("./app");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.write(App);
//   res.end(`${App}`);
  res.end();
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});