import React, { useState, useEffect } from "react";
import { socket } from "./socketHooks/Socket";
import Location from "./Components/Location";

function App() {
  const [data, setData] = useState(1);
  const [cord, setCord] = useState({ empty: true });

  const dummy = (cord: any) => {
    setCord(cord);
  };
  useEffect(() => {
    socket.emit("msg", "HELLO THERE");
  }, []);

  useEffect(() => {
    socket.emit("msg", "Already connected");
  }, [data]);
  return (
    <>
      Hello World
      <button onClick={() => setData(data + 1)}>btn</button>
      <Location />
      {cord}
    </>
  );
}
export default App;
