import React, { useState, useEffect } from 'react';
import './App.css'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer } from 'react-leaflet';
import { LocationMarker } from './components/MapTile';

function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getLocation = () => {
    if (!navigator.geolocation) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setError('Geolocation is not supported by your browser');
      setIsLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        setIsLoading(false);
      },
      (err) => {
        setError(err.message);
        setIsLoading(false);
      }
    );
  };

  const defaultCenter = [39.50, -98.35];

  return (
    <div>
      <button onClick={getLocation()}>
        Show Stores
      </button>
      {isLoading && <p>Loading location...</p>}
      {error && <p>Error: {error}</p>}
      {latitude && longitude && (
        <MapContainer
          center={defaultCenter}
          zoom={4}
          scrollWheelZoom={false}
          style={{ height: '100vh', width: '100%'}}
        >
         <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a> contributers'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
         <LocationMarker />
        </MapContainer>
      )}
    </div>
  );
};

export default App
