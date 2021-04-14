interface locationType {
  longitude: number;
  latitude: number;
  accuracy: number;
  altitude: number;
  altitudeAccuracy: number;
  timeStamp: number;
}

type PropsFunction = (coord: locationType) => void;

function Location({ storeLocation }: { storeLocation: PropsFunction }) {
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position: any) {
    // x.innerHTML =
    //   "Latitude: " +
    //   position.coords.latitude +
    //   "<br>Longitude: " +
    //   position.coords.longitude;
    // console.log(position);
    var loc: locationType = {
      longitude: position.coords.longitude,
      latitude: position.coords.latitude,
      accuracy: position.coords.accuracy,
      altitude: position.coords.altitude,
      altitudeAccuracy: position.coords.altitudeAccuracy,
      timeStamp: position.timestamp,
    };
    // console.log(loc);
    storeLocation(loc);
  }
  return (
    <div>
      <button onClick={() => getLocation()}> Location</button>
    </div>
  );
}

export default Location;
