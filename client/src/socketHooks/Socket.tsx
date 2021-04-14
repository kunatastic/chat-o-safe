import io from "socket.io-client";
// var min = 10000000;
// var max = 99999999;
// var id = Math.floor(Math.random() * (max - min + 1)) + min;
var id = "9876543210";

var uri: any = process.env.REACT_APP_SERVER_URI;
export const socket = io(uri, { query: { id } });
// export const socket = io("http://localhost:5000", { query: { id } });
