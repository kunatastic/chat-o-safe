function Location() {
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
    console.log(position);
  }
  return (
    <div>
      <button onClick={() => getLocation()}> Location</button>
    </div>
  );
}

export default Location;
