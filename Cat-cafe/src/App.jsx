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

  const options = [500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000];

  return (
    <div>
      <button onClick={handleClick}>Show Stores</button>
      {permission ? (
        <>
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
          <select>
            {options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
