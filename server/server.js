const express = require("express");
const server = express();
const path = require("path");
const socket = require("socket.io");

server.get("/app", (req, res) => {
  res.json({ msg: "api is running " });
});

server.get("/", (req, res) => {
  res.redirect("http://localhost:3000");
});
const realServer = server.listen(4000, () => {
  console.log("===== server is running on port 4000 =====  ");
});
let count = 0;
const socketServer = socket(realServer);
socketServer.on("connection", socket => {
  socket.on("msg", message => {
    count++;
    console.log("message ===> ", message);

    socket.emit(
      "msgBack",
      ` sending the === ${message} == back to you ${count}`
    );
  });
});
