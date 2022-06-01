import express from "express";
import { Server as WebSocketServer } from "socket.io";
import Sockets from "./sockets";

const app = express();
app.use(express.static(__dirname + "/public"));

var httpServer = app.listen(3000, () => {
    console.log(`Server started on port http://localhost:3000`);
});
const io = new WebSocketServer(httpServer);

Sockets(io);
