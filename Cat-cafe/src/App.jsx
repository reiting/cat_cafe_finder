/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect } from "react";
import "./App.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { LocationMarker } from "./components/LocationMarker";

function App() {
  const [permission, setPermission] = useState(false);
  const [radius, setRadius] = useState(20);
  const [value, setValue] = useState(20);

  const milesToMeters = (miles) => miles * 1609.34; // The conversion factor

  const handleClick = () => {
    setPermission(true);
  };

  useEffect(() => {
    const meters = milesToMeters(value);
    setRadius(meters);
  }, [value]);

  const handleDropDownChange = (e) => {
    setValue(e.target.value);
  };

  const defaultCenter = [39.5, -98.35];

  const distancesInMiles = [20, 30, 40, 50, 60, 70, 80, 90, 100, 900];

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
            style={{
              height: "100vh",
              width: "100vw",
              maxWidth: "100%",
              display: "block",
            }}
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
