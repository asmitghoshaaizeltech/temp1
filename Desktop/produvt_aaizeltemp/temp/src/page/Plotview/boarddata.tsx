import React, { FC, useState, useEffect } from "react";

interface DataPoint {
  value: number;
  unit: string;
  icon: string;
}

interface Props {
  title: string;
  dataPoints: DataPoint[];
}


const Gauge: FC<Props> = ({ title, dataPoints }) => {
  const [currentDataPoint, setCurrentDataPoint] = useState<DataPoint | null>(null);

  useEffect(() => {
    // Simulate data updates
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * dataPoints.length);
      setCurrentDataPoint(dataPoints[randomIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, [dataPoints]);

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      {currentDataPoint && (
        <div className="flex flex-col items-center mt-4">
          <div className="w-24 h-24 rounded-full border-2 border-gray-300 flex items-center justify-center relative">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gray-200"
              style={{ transformOrigin: "50% 50%" }}
            >
              <div
                className="h-16 w-16 rounded-full bg-red-500"
                style={{
                  transformOrigin: "50% 100%",
                  transform: `rotate(${
                    (currentDataPoint.value / 100) * 360
                  }deg)`,
                }}
              ></div>
            </div>
            <div className="absolute text-gray-600 font-bold text-sm">{currentDataPoint.icon}</div>
          </div>
          <p className="text-xl text-gray-500 mt-2">
            {currentDataPoint .value} {currentDataPoint.unit}
          </p>
        </div>
      )}
    </div>
  );
};

const Dashboard: FC = function () {
  const dataPoints = [
    { value: 1013, unit: 'hPa', icon: '🌬️' }, // Pressure
    { value: 22, unit: '°C', icon: '🌡️' },   // Temperature
    { value: 60, unit: '%', icon: '💧' },     // Humidity
    { value: 12, unit: 'm/s', icon: '💨' },   // Windspeed
    { value: 3200, unit: 'm', icon: '🏔️' },   // Altitude

    
  ];
    const [boarddata, boardsetData] = useState({
      DeviceID: "",
      Packet_Date_Time: "",
      BatteryVoltage: "",
      Inside_Temp: "",
    });

    const [sensordata, sensorsetData] = useState({
      Temperature: "",
      TemperatureREF: "",
      RH_REF: "",
      RHGUS13: "",
      Pressure: "",
      DewPoint: "",
    });

    const [GPSdata, GPSsetData] = useState({
      UTC_Date_Time: "",
      Latitude: "",
      Longitude: "",
      Altitude: "",
      AscentRate: "",
      WindSpeed: "",
      WindDirection: "",
      SatelliteUsed:"",
      Fix_GGA_RMC : "",
    });

  return (
    <>
      <div className="border border-gray-300 rounded-md max-w-[75rem] mx-auto my-3 shadow-md">
        <div className="flex justify-center -mt-3">
          <div className="bg-white px-4 text-sm font-semibold text-gray-700">
            Ground Station Control
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
            {/* COM Connection Section */}
            <div className="flex flex-col gap-y-3">
              <div className="flex gap-x-3">
                <select className="flex-1 border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="COM1">COM1</option>
                  <option value="COM2">COM2</option>
                  <option value="COM3">COM3</option>
                  <option value="COM4">COM4</option>
                </select>

                <button className="bg-green-500 text-white px-4 py-1 rounded-md shadow hover:bg-green-600 transition">
                  Connect
                </button>
              </div>

              <div className="flex gap-x-3">
                <select className="flex-1 border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="2400">2400</option>
                  <option value="2400">2400</option>
                  <option value="2400">2400</option>
                </select>

                <button className="bg-red-500 text-white px-2 py-1 rounded-md shadow hover:bg-red-600 transition">
                  Disconnect
                </button>
              </div>
            </div>

            {/* Device Control Section */}
            <div className="flex flex-col gap-y-3">
              <div className="flex gap-x-3 justify-between">
                <label className="font-semibold flex-1 text-gray-700">Select Device ID</label>
                <select className="flex-1 border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </div>

              <div className="flex gap-x-3">
                <button className="bg-gray-500 text-white px-3 py-1 min-w-auto flex-1 rounded-md shadow hover:bg-gray-600 transition">
                  Radio Sound
                </button>
              </div>
            </div>

            {/* Expected Device ID and Clear Section */}
            <div className="flex flex-col gap-y-3">
              <div className="flex gap-x-3">
                <div className="flex-1 rounded-md shadow-md">
                  <div className="flex justify-center -mt-3">
                    <label className="font-semibold text-gray-700 md:text-[0.8rem] lg:md:text-[1rem]">
                      Expected Device ID
                    </label>
                  </div>
                  <div className="px-2">
                    <div className="px-2 py-1 text-sm text-center text-gray-600">ALL</div>
                  </div>
                </div>

                <button className="flex-1 bg-gray-500 text-white px-3 py-1 rounded-md shadow hover:bg-gray-600 transition h-auto self-center">
                  Clear All
                </button>
              </div>

              <div className="flex gap-x-3">
                <button className="bg-gray-500 text-white px-3 py-1 min-w-auto flex-1 rounded-md shadow hover:bg-gray-600 transition">
                 Ground Check
                </button>
                <button className="bg-gray-500 text-white px-3 py-1 min-w-auto flex-1 rounded-md shadow hover:bg-gray-600 transition">
                  Start
                </button>
              </div>
            </div>
          </div>
        </div>

       

      {/* Data Display Boxes in a single row */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 mt-6">
        <Gauge title="Pressure" dataPoints={[dataPoints[0]]} />
        <Gauge title="Temperature" dataPoints={[dataPoints[1]]} />
        <Gauge title="Humidity" dataPoints={[dataPoints[2]]} />
        <Gauge title="Windspeed" dataPoints={[dataPoints[3]]} />
        <Gauge title="Altitude" dataPoints={[dataPoints[4]]} />
      </div>

      <div style={{ maxWidth: "300px", padding: "20px" }}>
        <div className="border border-gray-300 rounded-md max-w-[75rem] mx-auto my-3 shadow-md">
         <div className="flex justify-center -mt-3">
            <div className="bg-white px-4 text-sm font-semibold text-gray-700">
            Board Data
            </div>
          </div>
              {Object.keys(boarddata).map((key, index) => (
              <div
                  key={index}
                  style={{
                    display: "flex",
                    marginBottom: "15px",
                    alignItems: "center",
                    justifyContent: "flex-start", // Align entire row to the left
                  }}
                >
                <label
                  style={{
                    marginRight: "10px",
                    fontWeight: "bold",
                    minWidth: "10px", // Ensures labels have consistent width
                    textAlign: "left", // Align text within the label to the left
                  }}
                >
                {key.replace("label", "Label ")}:
                </label>
                <div
                  style={{
                    flex: "1", // Allows the text box to expand as needed
                    padding: "15px",
                    border: "1px solid #ccc",
                    backgroundColor: "#f9f9f9",
                    borderRadius: "4px",
                    textAlign: "left", // Align text inside the display box
                  }}
                >
                {boarddata[key]}
              </div>
            </div>
            ))}
          </div>
        

          <div className="border border-gray-300 rounded-md max-w-[75rem] mx-auto my-3 shadow-md">
              <div className="flex justify-center -mt-3">
                <div className="bg-white px-4 text-sm font-semibold text-gray-700">
                Sensor Data
                </div>
              </div>
              {Object.keys(sensordata).map((key, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  marginBottom: "15px",
                  alignItems: "center",
                  justifyContent: "flex-start", // Align entire row to the left
                }}
                >
                <label
                  style={{
                    marginRight: "10px",
                    fontWeight: "bold",
                    minWidth: "10px", // Ensures labels have consistent width
                    textAlign: "left", // Align text within the label to the left
                  }}
                >
                  {key.replace("label", "Label ")}:
                </label>
                <div
                  style={{
                    flex: "1", // Allows the text box to expand as needed
                    padding: "15px",
                    border: "1px solid #ccc",
                    backgroundColor: "#f9f9f9",
                    borderRadius: "4px",
                    textAlign: "left", // Align text inside the display box
                  }}
                >
                  {sensordata[key]}
                </div>
              </div>
              ))}
          </div>  
        
          <div className="border border-gray-300 rounded-md max-w-[75rem] mx-auto my-3 shadow-md">
        
          <div className="flex justify-center -mt-3">
            <div className="bg-white px-4 text-sm font-semibold text-gray-700">
            GPS Data
            </div>
          </div>
            {Object.keys(GPSdata).map((key, index) => (
              <div
              key={index}
              style={{
                display: "flex",
                marginBottom: "15px",
                alignItems: "center",
                justifyContent: "flex-start", // Align entire row to the left
              }}
              >
              <label
                style={{
                  marginRight: "10px",
                  fontWeight: "bold",
                  minWidth: "10px", // Ensures labels have consistent width
                  textAlign: "left", // Align text within the label to the left
                }}
              >
                {key.replace("label", "Label ")}:
              </label>
              <div
                style={{
                  flex: "1", // Allows the text box to expand as needed
                  padding: "15px",
                  border: "1px solid #ccc",
                  backgroundColor: "#f9f9f9",
                  borderRadius: "4px",
                  textAlign: "left", // Align text inside the display box
                }}
              >
                {GPSdata[key]}
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;