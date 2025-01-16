import React, { createContext, useState, useContext } from "react";
import { LatLngTuple } from "leaflet";

interface LocationContextType {
  currentLocation: LatLngTuple | null;
  flightPath: LatLngTuple[];
  bearing: number | null;
  setCurrentLocation: React.Dispatch<React.SetStateAction<LatLngTuple | null>>;
  setFlightPath: React.Dispatch<React.SetStateAction<LatLngTuple[]>>;
  setBearing: React.Dispatch<React.SetStateAction<number | null>>;
}

const LocationContext = createContext<LocationContextType | undefined>(
  undefined
);

export const LocationProvider: React.FC = ({ children }) => {
  const [currentLocation, setCurrentLocation] = useState<LatLngTuple | null>(
    null
  );
  const [flightPath, setFlightPath] = useState<LatLngTuple[]>([]);
  const [bearing, setBearing] = useState<number | null>(null);

  return (
    <LocationContext.Provider
      value={{
        currentLocation,
        flightPath,
        bearing,
        setCurrentLocation,
        setFlightPath,
        setBearing,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error("useLocation must be used within a LocationProvider");
  }
  return context;
};
