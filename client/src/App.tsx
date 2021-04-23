import React, { useState, useEffect } from "react";
import { Socket } from "./socketHooks/Socket";
// import Location from "./Components/Location";
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
  const [cord, setCord] = useState<locationType>();
  const storeLocation = (locationData: locationType) => {
    console.log(locationData);
    setCord(locationData);
  };

  // Init the config
  useEffect(() => {
    Socket.emit("msg", "HELLO THERE");
  }, []);

  return (
    <>
      {/* Hello World */}
      {/* <button onClick={() => console.log(cord)}>loc</button> */}
      <Chat />
      {/* <Location storeLocation={storeLocation} /> */}
    </>
  );
}
export default App;
