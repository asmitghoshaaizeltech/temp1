import React, { FC, useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import Compass from "./Compass";
import IndiaMap from "./InteractiveMap";
import MeasurementChart from "./MeasurementChart";
import useBearingStore from "./bearingStore";

interface DataPoint {
  value: number;
  unit: string;
  icon: string;
}

interface Props {
  title: string;
  dataPoints: DataPoint[];
}

const Modal: FC<{
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        {/* Overlay */}
        <div className="fixed inset-0 bg-black opacity-30" onClick={onClose} />

        {/* Modal content */}
        <div className="relative bg-white rounded-lg w-full max-w-4xl">
          <div className="absolute right-0 top-0 p-4">
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

// Card components
const Card: FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <div className={`bg-white rounded-lg shadow ${className}`}>{children}</div>
);

const CardHeader: FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="px-6 py-4 border-b border-gray-200">{children}</div>
);

const CardTitle: FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-lg font-semibold text-gray-900">{children}</h3>
);

const CardContent: FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="p-6">{children}</div>
);

const Button: FC<{
  children: React.ReactNode;
  variant?: "default" | "destructive";
  className?: string;
  onClick?: () => void;
}> = ({ children, variant = "default", className = "", onClick }) => {
  const baseStyles =
    "px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantStyles = {
    default: "bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-300",
    destructive: "bg-red-500 hover:bg-red-600 text-white focus:ring-red-500",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Gauge: FC<Props> = ({ title, dataPoints }) => {
  const [currentDataPoint, setCurrentDataPoint] = useState<DataPoint | null>(
    null
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * dataPoints.length);
      setCurrentDataPoint(dataPoints[randomIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, [dataPoints]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {currentDataPoint && (
          <div className="flex flex-col items-center">
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 rounded-full border-4 border-gray-100">
                <div
                  className="absolute top-0 left-1/2 w-1 h-1/2 bg-blue-300 rounded-full transform -translate-x-1/2 origin-bottom transition-transform duration-500"
                  style={{
                    transform: `rotate(${
                      (currentDataPoint.value / 100) * 180
                    }deg)`,
                  }}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl">{currentDataPoint.icon}</span>
              </div>
            </div>
            <div className="mt-2 text-lg font-medium">
              {currentDataPoint.value} {currentDataPoint.unit}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const DataTable: FC<{ title: string; fields: string[] }> = ({
  title,
  fields,
}) => (
  <Card className="h-full">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-2">
        {fields.map((field) => (
          <div key={field} className="grid grid-cols-2 gap-2">
            <label className="text-sm font-medium text-gray-600">{field}</label>
            <input
              className="w-full px-2 py-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              readOnly
            />
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const Dashboard: FC = () => {
  const [mockDbmData] = useState(() =>
    Array.from({ length: 20 }, (_, i) => ({
      time: i,
      value: Math.floor(Math.random() * 50) - 100,
    }))
  );

  const dataPoints = [
    { value: 1013, unit: "hPa", icon: "🌬️" },
    { value: 22, unit: "°C", icon: "🌡️" },
    { value: 60, unit: "%", icon: "💧" },
    { value: 12, unit: "m/s", icon: "💨" },
    { value: 3200, unit: "m", icon: "🏔️" },
  ];

  const [measurementData] = useState(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      altitude: i * 100,
      pressure: 1013 - i * 10 + Math.random() * 5,
      temperature: 25 - i * 0.6 + Math.random() * 2,
      humidity: 60 + i * 0.5 + Math.random() * 5,
      windspeed: 5 + i * 0.3 + Math.random() * 3,
    }));
  });

  const chartConfigs = [
    {
      title: "Pressure vs Altitude",
      dataKey: "pressure",
      unit: "hPa",
      color: "#2563eb",
    },
    {
      title: "Temperature vs Altitude",
      dataKey: "temperature",
      unit: "°C",
      color: "#dc2626",
    },
    {
      title: "Humidity vs Altitude",
      dataKey: "humidity",
      unit: "%",
      color: "#2dd4bf",
    },
    {
      title: "Wind Speed vs Altitude",
      dataKey: "windspeed",
      unit: "km/hr",
      color: "#8b5cf6",
    },
  ];

  const [dbmData] = useState(() =>
    Array.from({ length: 20 }, (_, i) => ({
      time: i,
      value: Math.floor(Math.random() * 50) - 100,
    }))
  );

  const { bearing } = useBearingStore();
  const [showChecklist, setShowChecklist] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Ground Station Control</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="flex gap-3 items-center w-full">
                <select className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300">
                  {["COM1", "COM2", "COM3", "COM4"].map((port) => (
                    <option key={port}>{port}</option>
                  ))}
                </select>
                <Button className="w-32 bg-green-500 hover:bg-green-600">
                  Connect
                </Button>
              </div>
              <div className="flex gap-3 items-center w-full">
                <select className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300">
                  {[2400, 4800, 9600, 19200, 38400, 57600, 115200].map(
                    (rate) => (
                      <option key={rate}>{rate}</option>
                    )
                  )}
                </select>
                <Button className="w-32 bg-red-500 hover:bg-red-600">
                  Disconnect
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-3 items-center w-full">
                <label className="self-center font-medium">Device ID</label>
                <select className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  {["delhi-1", "delhi-2", "delhi-3"].map((device) => (
                    <option key={device}>{device}</option>
                  ))}
                </select>
              </div>
              <Button className="w-full bg-blue-300 ">Radio Sound</Button>
            </div>

            <div className="space-y-4">
              <Button className="w-full bg-blue-300">Clear All</Button>
              <Button className="w-full bg-blue-300">Start</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        {[
          { title: "Pressure", data: [dataPoints[0]] },
          { title: "Temperature", data: [dataPoints[1]] },
          { title: "Humidity", data: [dataPoints[2]] },
          { title: "Windspeed", data: [dataPoints[3]] },
          { title: "Altitude", data: [dataPoints[4]] },
        ].map((gauge) => (
          <Gauge
            key={gauge.title}
            title={gauge.title}
            dataPoints={gauge.data}
          />
        ))}
      </div>

      <div
        className=" bg-gray-50 mb-6
      "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {chartConfigs.map((config) => (
            <MeasurementChart
              key={config.dataKey}
              title={config.title}
              data={measurementData}
              dataKey={config.dataKey}
              unit={config.unit}
              color={config.color}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <DataTable
          title="Board Data"
          fields={[
            "Device ID",
            "Packet @ Time # Date",
            "Battery Voltage",
            "Inside Temperature",
          ]}
        />
        <DataTable
          title="Link Status"
          fields={["RSSI", "Sonde ID", "Base Frequency", "Frequency Diff"]}
        />
        <DataTable
          title="Sensor Data"
          fields={[
            "Temperature",
            "Temperature(REF)",
            "RH(REF)",
            "RH(GHS13)",
            "Pressure",
            "Dew Point",
          ]}
        />
        <DataTable
          title="Ground Station"
          fields={[
            "Temperature",
            "Pressure",
            "Wind Speed",
            "Altitude",
            "Battery Status",
          ]}
        />
        <DataTable
          title="GPS Data"
          fields={[
            "UTC Date # Time",
            "Latitude",
            "Longitude",
            "Altitude",
            "Ascent Rate",
            "Wind Speed",
            "Wind Direction",
            "Satellites Used",
            "Fix GGA/RMC",
          ]}
        />
        <DataTable
          title="Calculated Info of Balloon"
          fields={[
            "MSLP",
            "P. Altitude",
            "Vertical Speed",
            "Ground Range",
            "Slant Range",
            "Azimuth",
            "Elevation",
            "Flight Info",
          ]}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 space-y-4">
          {/* Signal Strength Card - Reduced height */}
          <Card className="h-[450px]">
            <CardHeader>
              <CardTitle>Signal Strength (DBM)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[320px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={dbmData}
                    margin={{ top: 5, right: 20, bottom: 25, left: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />

                    {/* X-axis with label "Km" */}
                    <XAxis
                      dataKey="time"
                      label={{ value: "(km)", position: "bottom", offset: -3 }}
                    />

                    {/* Y-axis with label "RSSI [dBm]" */}
                    <YAxis
                      label={{
                        value: "RSSI [dBm]",
                        angle: -90,
                        position: "left",
                        offset: -7, // Adjust offset to avoid overlap
                      }}
                    />

                    <Tooltip />

                    <Line type="monotone" dataKey="value" stroke="#2563eb" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Compass Direction Card */}
          <Card className="h-[300px]">
            <CardHeader>
              <CardTitle>Compass Direction</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center items-center h-[140px]">
                <div className="relative">
                  {bearing !== null && (
                    <Compass direction={bearing} size={150} />
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Location Tracking Card */}
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle>Location Tracking</CardTitle>
          </CardHeader>
          <CardContent>
            <IndiaMap />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
