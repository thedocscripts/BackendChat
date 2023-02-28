import { Server } from "socket.io";

const io = new Server();

io.on("connection", (socket) => {
  console.log("hola")
});

io.listen(3000);