import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  items: FAQItem[];
}

const FAQContent: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [activeSection, setActiveSection] = useState("PLOT VIEW");
  const navigate = useNavigate();

  const faqData: FAQSection[] = [
    {
      title: "PLOT VIEW",
      items: [
        {
          question: "What information is displayed in the measurement charts?",
          answer:
            "The Plot View includes four main measurement charts:\n\n1. Pressure vs Altitude: Shows atmospheric pressure changes with altitude in hPa\n2. Temperature vs Altitude: Displays temperature variations with height in °C\n3. Humidity vs Altitude: Shows relative humidity changes with altitude in %\n4. Wind Speed vs Altitude: Displays wind speed variations with height in km/hr\n\nEach chart provides real-time data visualization with interactive tooltips and proper axis labeling.",
        },
        {
          question: "How do I interpret the Signal Strength (DBM) chart?",
          answer:
            "The Signal Strength chart shows the Received Signal Strength Indicator (RSSI) measured in dBm over distance (km). A higher (less negative) dBm value indicates a stronger signal. The chart helps monitor:\n\n- Signal quality over distance\n- Connection stability\n- Potential interference or signal degradation\n- Maximum effective range of communication",
        },
        {
          question: "What do the gauge displays indicate?",
          answer:
            "The dashboard features five real-time gauge displays:\n\n1. Pressure: Atmospheric pressure in hPa (hectopascals)\n2. Temperature: Ambient temperature in °C\n3. Humidity: Relative humidity percentage\n4. Windspeed: Current wind speed in m/s\n5. Altitude: Current altitude in meters\n\nEach gauge updates automatically and includes both a visual indicator and numerical value.",
        },
      ],
    },
    {
      title: "TABULAR VIEW",
      items: [
        {
          question: "What information is available in the Board Data section?",
          answer:
            "The Board Data section provides essential device information including:\n\n- Device ID: Unique identifier for the equipment\n- Packet @ Time # Date: Timestamp of the latest data packet\n- Battery Voltage: Current voltage level of the device\n- Inside Temperature: Internal temperature of the equipment",
        },
        {
          question: "How do I read the GPS Data table?",
          answer:
            "The GPS Data table displays comprehensive location information:\n\n- UTC Date # Time: Universal coordinated time and date\n- Latitude/Longitude: Current geographical coordinates\n- Altitude: Height above sea level\n- Ascent Rate: Vertical speed of ascent/descent\n- Wind Speed and Direction: Current wind conditions\n- Satellites Used: Number of GPS satellites in use\n- Fix GGA/RMC: GPS fix quality indicators",
        },
        {
          question:
            "What calculations are shown in the Calculated Info section?",
          answer:
            "The Calculated Info section provides derived measurements:\n\n- MSLP: Mean Sea Level Pressure\n- P. Altitude: Pressure Altitude\n- Vertical Speed: Rate of altitude change\n- Ground/Slant Range: Distance measurements\n- Azimuth/Elevation: Directional measurements\n- Flight Info: Current flight status and conditions",
        },
      ],
    },
    {
      title: "GROUND STATION CONTROL",
      items: [
        {
          question: "How do I establish a connection with the device?",
          answer:
            "To connect to a device:\n\n1. Select the appropriate COM port from the dropdown\n2. Choose the correct baud rate (usually 9600 or 115200)\n3. Select the Device ID from the available options\n4. Click the 'Connect' button to establish communication\n\nThe connection status will be indicated in the Link Status section.",
        },
        {
          question: "What do the control buttons do?",
          answer:
            "The control panel includes several important buttons:\n\n- Connect: Establishes connection with selected device\n- Disconnect: Safely terminates the connection\n- Radio Sound: Toggles audio feedback\n- Clear All: Resets all displays and data\n- Start: Begins data collection and monitoring",
        },
        {
          question: "How does the Compass Direction feature work?",
          answer:
            "The Compass Direction display shows:\n\n- Current bearing of the balloon\n- Real-time directional updates\n- Visual compass rose indication\n- Numerical bearing in degrees\n\nThis helps track the movement and orientation of the balloon during flight.",
        },
      ],
    },
    {
      title: "LOCATION TRACKING",
      items: [
        {
          question: "How does the interactive map work?",
          answer:
            "The Location Tracking map provides real-time visualization of:\n\n- Current balloon position\n- Flight path trajectory\n- Ground station location\n- Coverage area\n- Interactive zoom and pan controls\n\nThe map updates automatically as new GPS data is received.",
        },
        {
          question: "What information is shown in the Link Status section?",
          answer:
            "The Link Status section displays:\n\n- RSSI: Current signal strength\n- Sonde ID: Active device identifier\n- Base Frequency: Operating frequency\n- Frequency Diff: Frequency deviation from baseline\n\nThis information helps monitor communication quality and system performance.",
        },
      ],
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const currentSection =
    faqData.find((section) => section.title === activeSection) || faqData[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => navigate("/")}
            className="text-gray-600 hover:text-gray-800 flex items-center gap-2"
          >
            <span className="text-xl">←</span> Back
          </button>
          <h1 className="text-4xl font-bold">FAQ</h1>
          <div className="w-16"></div>
        </div>
        <div className="flex justify-center gap-8 mb-12 flex-wrap">
          {faqData.map((section, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveSection(section.title);
                setOpenItems([]);
              }}
              className={`text-sm font-medium transition-colors ${
                section.title === activeSection
                  ? "text-blue-500"
                  : "text-gray-800 hover:text-gray-600"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        <div className="space-y-4 bg-white rounded-lg shadow-sm p-6">
          {currentSection.items.map((item, idx) => (
            <div key={idx} className="border-b border-gray-200 last:border-b-0">
              <button
                onClick={() => toggleItem(idx)}
                className="w-full text-left py-4 flex justify-between items-center group"
              >
                <span className="text-sm font-medium">{item.question}</span>
                <span className="text-xl">
                  {openItems.includes(idx) ? "-" : "+"}
                </span>
              </button>

              {openItems.includes(idx) && (
                <div className="pb-4">
                  <p className="text-gray-600 text-sm whitespace-pre-line">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQContent;
