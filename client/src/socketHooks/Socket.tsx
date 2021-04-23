import io from "socket.io-client";
// var min = 10000000;
// var max = 99999999;
// var id = Math.floor(Math.random() * (max - min + 1)) + min;
const id: number = 9876543210;

var uri: any = process.env.REACT_APP_SERVER_URI;
export const Socket = io(uri || "http://localhost:5000", {
  query: { id: id.toString() },
});
