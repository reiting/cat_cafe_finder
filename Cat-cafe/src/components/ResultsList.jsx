import { useMap } from "react-leaflet";
import L from "leaflet";
import "./ResultsList.css";

export const ResultsList = ({ filteredCafes }) => {
  const map = useMap();

  const handleClick = (cafe) => {
    const cafeLocation = L.latLng(cafe.lat, cafe.lon);
    map.flyTo(cafeLocation, 13);
  };

  return (
    <div className="container">
      <ul className="results">
        {filteredCafes.length > 0 ? (
          filteredCafes.map((cafe) => {
            return (
              <li key={cafe.id} className="single-cafe">
                <span className="cafe-details">{cafe.name}</span>
                <span>
                  <button onClick={() => handleClick(cafe)} className="btn">
                    Go to cafe
                  </button>
                </span>
              </li>
            );
          })
        ) : (
          <h1 className="no-results">No results found!</h1>
        )}
      </ul>
    </div>
  );
};
