import React, { useState, useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export function LocationMarker() {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);
  const map = useMap();

  useEffect(() => {
    if (!navigator.geolocation) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setError("Geolocation is not supported by your browser");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const newPosition = [latitude, longitude];
        setPosition(newPosition);
        map.flyTo(newPosition, 13);
        // L.marker([latitude + 5, longitude + 5]).addTo(map);
      },
      (err) => {
        setError(err.message);
      },
    );
  }, [map]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}
