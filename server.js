/* This is an example JavaScript file, feel free to remove/edit it anytime */
const express = require("express");
const app = express();
const http = require("http");
server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = 3000;

const connectedUsers = [];
const chatMessages = [];

app.use(express.static("dist"));
app.use(express.static("assets"));
app.use(express.static("scripts"));
app.use(
  "/socket.io",
  express.static(__dirname + "/node_modules/socket.io/client-dist/")
);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/enter", (req, res) => {
  res.sendFile(__dirname + "/enter.html");
});

app.get("/login", (req, res) => {
  const nickname = req.query.nickname;
  console.log("login nickname ", nickname);
  connectedUsers.push(nickname);
  res.status(200).json({ user: nickname });
});

app.get("/chat", (req, res) => {
  res.sendFile(__dirname + "/chat.html");
});

app.get("/connectedUsers", (req, res) => {
  res.send({ connectedUsers });
});

app.get("/chatMessages", (req, res) => {
  res.send({ chatMessages });
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("chat message", ({ user, msg }) => {
    console.log("chat message: " + user + ": " + msg);
    const timestamp = Date.now();
    chatMessages.push({ user, msg, timestamp });
    socket.emit("new message", { user, msg, timestamp });
  });
});

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
