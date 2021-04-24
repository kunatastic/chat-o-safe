import React, { useState } from "react";
import { Socket, SocketContext } from "./context/Socket";
// import Location from "./Components/Location";
import Chat from "./Components/Chat";
import { locationType } from "./InterfaceProvider";

function App() {
  const [cord, setCord] = useState<locationType>();
  const storeLocation = (locationData: locationType) => {
    console.log(locationData);
    setCord(locationData);
  };

  return (
    <>
      <SocketContext.Provider value={Socket}>
        {/* Hello World */}
        {/* <button onClick={() => console.log(cord)}>loc</button> */}
        <Chat />
        {/* <Location storeLocation={storeLocation} /> */}
      </SocketContext.Provider>
    </>
  );
}
export default App;
