/* This is an example JavaScript file, feel free to remove/edit it anytime */
const express = require("express");
const app = express();
const http = require("http");
server = http.createServer(app);
const port = 3000;

app.use(express.static("dist"));
app.use(express.static("assets"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
