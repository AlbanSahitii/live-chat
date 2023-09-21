const express = require("express");
const app = express();
const mongoose = require("mongoose");
const server = require("http").createServer(app);
const WebSocket = require("ws");

const wss = new WebSocket.Server({ server: server });

wss.on("connection", function connection(ws) {
  console.log("connected");
  ws.send("hello");
  ws.on("message", function incomming(message) {
    console.log(`message incomming ${message}`);
    ws.send("got ur message " + message);
  });
});

require("dotenv").config({ path: "../.env" });

const uri = "mongodb://localhost:27017/live-chat";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log(`Database connected succesfully`);
});

server.listen(8080, () => console.log("listening on port 8080"));
