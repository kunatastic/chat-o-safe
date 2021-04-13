// Configuration
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const server = require("http").createServer(app);
const socketio = require("socket.io");
const io = socketio(server, {
  cors: {
    origin: process.env.FRONTEND_URI,
  },
});

// Socket logic
io.on("connection", (socket) => {
  console.log("user connected");
});

const morgan = require("morgan");
const helmet = require("helmet");

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
