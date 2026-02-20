/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import { Marker, Popup, useMap, Circle } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import data from "../data/data.json";
import { ResultsList } from "./ResultsList";

export function LocationMarker({ radius }) {
  const [center, setCenter] = useState(null);
  const [error, setError] = useState(null);
  const [filteredCafes, setFilteredCafes] = useState();
  const map = useMap();

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    //get user's current location
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const newCenter = L.latLng(latitude, longitude);
        setCenter(newCenter);
        map.flyTo(newCenter, 13);
        L.marker([latitude, longitude]).addTo(map);
      },
      (err) => {
        setError(err.message);
      },
    );
  }, [map, radius]);

  useEffect(() => {
    const validLocations = data.filter((item) => {
      return item.lat && item.lon;
    });
    if (center) {
      const filteredCafes = validLocations
        .filter((cafe) => {
          const cafeLatLon = L.latLng(cafe.lat, cafe.lon);
          const distance = center.distanceTo(cafeLatLon);
          if (distance <= radius) {
            return cafe;
          }
        })
        .map((item, index) => ({ ...item, id: index }));
      setFilteredCafes(filteredCafes);
    }
  }, [center, radius]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return center === null ? null : (
    <>
      <Marker position={center}>
        <Popup>You are here</Popup>
      </Marker>
      <Circle center={center} radius={radius} color="blue" fillColor="blue" />
      {filteredCafes &&
        filteredCafes.map((item) => (
          <Marker key={item.id} position={[item.lat, item.lon]}>
            <Popup>
              {item.name} {item.formatted_address}
            </Popup>
          </Marker>
        ))}
      {filteredCafes && <ResultsList filteredCafes={filteredCafes} />}
    </>
  );
}
