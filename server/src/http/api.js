const express = require("express");
const app = express();
const mongoose = require("mongoose");
const server = require("http").createServer(app);
const WebSocket = require("ws");
const userController = require("./controllers/user.js");

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use("/", userController);

server.listen(8080, () => console.log("listening on port 8080"));
