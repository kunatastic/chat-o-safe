import React from "react";
import socketio from "socket.io-client";
var min = 10000000;
var max = 99999999;
export const id = Math.floor(Math.random() * (max - min + 1)) + min;
// const id: number = 9876543210;

var uri: any = process.env.REACT_APP_SERVER_URI;
// export const Socket = socketio(uri, { query: { id: id.toString() } });
export const Socket = socketio(uri);

export const SocketContext = React.createContext(Socket);
