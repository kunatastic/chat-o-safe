import React, { useState, useEffect } from "react";
import { socket } from "./socketHooks/Socket";
import Location from "./Components/Location";
import Chat from "./Components/Chat";

interface locationType {
  longitude: number;
  latitude: number;
  accuracy: number;
  altitude: number;
  altitudeAccuracy: number;
  timeStamp: number;
}

function App() {
  const [data, setData] = useState(1);
  // const [cord, setCord] = useState<locationType[]>([]);
  const [cord, setCord] = useState({
    longitude: 0,
    latitude: 0,
    accuracy: 0,
    altitude: 0,
    altitudeAccuracy: 0,
    timeStamp: 0,
  });

  const storeLocation = (loactionData: locationType) => {
    console.log(loactionData);
    setCord(loactionData);
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
      <button onClick={() => console.log(cord)}>loc</button>
      <Location storeLocation={storeLocation} />
      <Chat />
      {console.log(process.env)}
    </>
  );
}
export default App;
