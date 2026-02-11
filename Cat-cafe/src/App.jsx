import React, { useState } from "react";
import "./App.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { LocationMarker } from "./components/MapTile";

function App() {
  const [permission, setPermission] = useState(false);

  const handleClick = () => {
    setPermission(true);
  };

  const defaultCenter = [39.5, -98.35];

  return (
    <div>
      <button onClick={handleClick}>Show Stores</button>
      {permission ? (
        <MapContainer
          center={defaultCenter}
          zoom={4}
          scrollWheelZoom={false}
          style={{ height: "100vh", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a> contributers'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker />
        </MapContainer>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
