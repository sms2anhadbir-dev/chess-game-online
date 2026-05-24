const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const rateLimit = require("express-rate-limit");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
 cors: { origin: "*" }
});

// basic abuse protection
const limiter = rateLimit({
 windowMs: 1000,
 max: 20
});

app.use(limiter);

const rooms = new Map();

io.on("connection", (socket) => {

 console.log("User:", socket.id);

 socket.on("join", (room) => {
  socket.join(room);

  if(!rooms.has(room)) rooms.set(room, []);

  rooms.get(room).push(socket.id);
 });

 socket.on("move", (data) => {
  // basic validation
  if(!data || typeof data.from !== "string") return;

  socket.broadcast.emit("move", data);
 });

 socket.on("disconnect", () => {
  console.log("Disconnected:", socket.id);
 });
});

server.listen(3000, () => {
 console.log("Server running on 3000");
});
