import io from "socket.io-client";

var min = 10000000;
var max = 99999999;
// var id = Math.floor(Math.random() * (max - min + 1)) + min;
var id = "9876543210";

// export const socket = io(process.env.REACT_SERVER_URI, { query: { id } });
export const socket = io("http://localhost:5050", { query: { id } });
