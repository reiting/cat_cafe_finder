import React, { useState } from "react";
import "./App.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { LocationMarker } from "./components/MapTile";

function App() {
  const [permission, setPermission] = useState(false);
  const [radius, setRadius] = useState(500);

  const handleClick = () => {
    setPermission(true);
  };

  const handleDropDownChange = (e) => {
    setRadius(e.target.value);
  };

  const defaultCenter = [39.5, -98.35];

  const milesToMeters = (miles) => miles * 1609.34; // The conversion factor

  const distancesInMiles = [20, 30, 40, 50, 60, 70, 80, 90, 100];

  const distancesArray = distancesInMiles.map((miles) => {
    return {
      value: miles,
      key: milesToMeters(miles),
    };
  });

  return (
    <div>
      <h1>Find your closest cat cafe!</h1>
      <div className="distance-container">
        <label className="distance-selector">
          Select Miles:
          <select
            name="distance"
            className="select-options"
            onChange={handleDropDownChange}
          >
            {distancesArray.map((option) => (
              <option key={option.key}>{option.value}</option>
            ))}
          </select>
        </label>
      </div>

      <button onClick={handleClick}>Show Cafes</button>

      {permission && (
        <>
          <MapContainer
            center={defaultCenter}
            zoom={4}
            scrollWheelZoom={false}
            style={{ height: "100vh", width: "100vw", maxWidth: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a> contributers'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker radius={radius} />
          </MapContainer>
        </>
      )}
    </div>
  );
}

export default App;
