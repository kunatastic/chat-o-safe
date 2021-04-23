// Configuration
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

// Dependencies
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const socketio = require("socket.io");
const io = socketio(server, {
  cors: {
    origin: process.env.FRONTEND_URI,
  },
});
const morgan = require("morgan");
const helmet = require("helmet");

// Socket logic
io.on("connection", (socket) => {
  const id = socket.handshake.query.id;
  socket.join(id);
  console.log("user connected", JSON.stringify(id));

  socket.on("msg", (data) => {
    console.log(data);
    socket.to(id).emit("recieve-msg", data);
  });
});

// Middlewares
app.use(helmet());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.json({ msg: "Hello" });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Runnning at http://localhost:${PORT}`);
});
