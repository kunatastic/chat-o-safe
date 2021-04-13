import React, { useState, useEffect } from "react";
import { socket } from "./socketHooks/Socket";
function App() {
  const [data, setData] = useState(1);
  useEffect(() => {
    socket.emit("msg", "HELLO THERE");
  }, []);

  useEffect(() => {
    socket.emit("msg", "ALready connected");
  }, [data]);
  return (
    <>
      Hello World
      <button onClick={() => setData(data + 1)}>btn</button>
    </>
  );
}
export default App;
