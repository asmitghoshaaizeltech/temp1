import React, { useEffect, useState, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Polyline,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import { LatLngTuple, LatLngBounds, DivIcon } from "leaflet";
import "leaflet/dist/leaflet.css";
import useBearingStore from "./bearingStore";

// Separate control component that uses useMap hook
const FocusControl = ({
  currentLocation,
}: {
  currentLocation: LatLngTuple | null;
}) => {
  const map = useMap();

  const handleFocus = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (currentLocation) {
      map.flyTo(currentLocation, 8, {
        duration: 1.5,
      });
    }
  };

  return (
    <div className="leaflet-top leaflet-right" style={{ zIndex: 1000 }}>
      <div className="leaflet-control leaflet-bar">
        <button
          onClick={handleFocus}
          className="leaflet-control-button"
          style={{
            width: "100px",
            height: "30px",
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Center Map
        </button>
      </div>
    </div>
  );
};

interface DeliveryPoint {
  id: string;
  point: {
    lng: number;
    lat: number;
  };
  size: number;
}

interface RouteData {
  name: string;
  region: string;
  origin: {
    lng: number;
    lat: number;
  };
  vehicle_capacity: number;
  deliveries: DeliveryPoint[];
}

const IndiaMap: React.FC = () => {
  const [geoData, setGeoData] = useState<any>(null);
  const [routeData, setRouteData] = useState<RouteData | null>(null);
  const [currentPath, setCurrentPath] = useState<LatLngTuple[]>([]);
  const [visitedPath, setVisitedPath] = useState<LatLngTuple[]>([]);
  const [currentLocation, setCurrentLocation] = useState<LatLngTuple | null>(
    null
  );
  const [geoBounds, setGeoBounds]: any = useState<LatLngBounds | null>(null);
  const [currentPointIndex, setCurrentPointIndex] = useState(-1);
  const { setBearing } = useBearingStore();

  // Create a plane icon that rotates based on bearing
  const createCurrentLocationIcon = () => {
    return new DivIcon({
      className: "custom-location-pointer",
      html: `<div style="
        width: 20px;
        height: 20px;
        background-color: blue;
        border: 2px solid white;
        border-radius: 50%;
        position: relative;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
      ">
        
      </div>`,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });
  };

  const calculateBearing = (start: LatLngTuple, end: LatLngTuple): number => {
    const [lat1, lon1] = start.map((coord) => {
      if (coord === undefined) {
        throw new Error("Undefined coordinate");
      }
      return (Math.PI * coord) / 180;
    });

    const [lat2, lon2] = end.map((coord) => (Math.PI * coord) / 180);
    const dLon = lon2 - lon1;

    const y = Math.sin(dLon) * Math.cos(lat2);
    const x =
      Math.cos(lat1) * Math.sin(lat2) -
      Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
    const angle = Math.atan2(y, x);

    return ((angle * 180) / Math.PI + 360) % 360;
  };

  const interpolate = (
    start: LatLngTuple,
    end: LatLngTuple,
    fraction: number
  ): LatLngTuple => {
    return [
      start[0] + (end[0] - start[0]) * fraction,
      start[1] + (end[1] - start[1]) * fraction,
    ];
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [geoResponse, routeResponse] = await Promise.all([
          fetch("/india_state_geo.json"),
          fetch("/deliveries.json"),
        ]);

        const geoJson = await geoResponse.json();
        const routeJson = await routeResponse.json();

        setGeoData(geoJson);
        setRouteData(routeJson[0]);

        const origin: LatLngTuple = [
          routeJson[0].origin.lat,
          routeJson[0].origin.lng,
        ];
        setCurrentLocation(origin);
        setCurrentPath([origin]);
        setVisitedPath([origin]);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!routeData || currentPointIndex >= routeData.deliveries.length) return;

    const STEPS_PER_SEGMENT = 50;
    const INTERVAL_MS = 100;
    let step = 0;

    const start: LatLngTuple =
      currentPointIndex === -1
        ? [routeData.origin.lat, routeData.origin.lng]
        : [
            routeData.deliveries[currentPointIndex].point.lat,
            routeData.deliveries[currentPointIndex].point.lng,
          ];

    const end: LatLngTuple =
      currentPointIndex === -1
        ? [routeData.deliveries[0].point.lat, routeData.deliveries[0].point.lng]
        : currentPointIndex + 1 < routeData.deliveries.length
        ? [
            routeData.deliveries[currentPointIndex + 1].point.lat,
            routeData.deliveries[currentPointIndex + 1].point.lng,
          ]
        : start;

    const bearing = calculateBearing(start, end);
    setBearing(bearing);

    const interval = setInterval(() => {
      if (step >= STEPS_PER_SEGMENT) {
        clearInterval(interval);
        setCurrentPointIndex((prev) => prev + 1);
        setVisitedPath((prev) => [...prev, end]);
        return;
      }

      const fraction = step / STEPS_PER_SEGMENT;
      const newPoint = interpolate(start, end, fraction);
      setCurrentLocation(newPoint);
      setCurrentPath([start, newPoint]);
      step++;
    }, INTERVAL_MS);

    return () => clearInterval(interval);
  }, [routeData, currentPointIndex, setBearing]);

  if (!geoData || !routeData) return <div>Loading map...</div>;

  const bearing =
    currentPath.length >= 2
      ? calculateBearing(currentPath[0], currentPath[1])
      : 0;

  return (
    <div style={{ height: "54vh", width: "100%" }}>
      <MapContainer
        center={[routeData.origin.lat, routeData.origin.lng]}
        zoom={5}
        scrollWheelZoom={true}
        style={{ height: "65vh", width: "100%" }}
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png" />
        <GeoJSON data={geoData.features} />

        {visitedPath.length > 1 && (
          <Polyline
            positions={visitedPath}
            color="blue"
            weight={2}
            opacity={0.6}
          />
        )}

        {currentPath.length > 1 && (
          <Polyline positions={currentPath} color="red" weight={3} />
        )}

        {currentLocation && (
          <Marker
            position={currentLocation}
            icon={createCurrentLocationIcon(bearing)}
          >
            <Popup>
              <div>
                <strong>Current Location</strong>
                <br />
                Latitude: {currentLocation[0].toFixed(6)}
                <br />
                Longitude: {currentLocation[1].toFixed(6)}
              </div>
            </Popup>
          </Marker>
        )}

        <FocusControl currentLocation={currentLocation} />
      </MapContainer>
    </div>
  );
};

export default IndiaMap;
