import React, { useState } from "react";

const ChecklistTabs = () => {
  const [activeTab, setActiveTab] = useState("site");
  const [checklist, setChecklist] = useState({
    site: {
      "Verify launch site location": {
        status: "",
        details: "Use GPS or map tools for precise coordinates.",
      },
      "Measure surface altitude": {
        status: "",
        details: "Use altimeter or known geographical data.",
      },
      "Record surface pressure": {
        status: "",
        details: "Use a calibrated barometer (millibars or hPa).",
      },
      "Record surface temperature": {
        status: "",
        details: "Use a thermometer (Celsius or Kelvin).",
      },
      "Record surface humidity": {
        status: "",
        details: "Use a hygrometer or calculate from dew point.",
      },
      "Note wind speed and direction": {
        status: "",
        details: "Use an anemometer and compass.",
      },
      "Confirm weather conditions": {
        status: "",
        details:
          "Note cloud cover and visibility (clear, scattered, overcast).",
      },
      "Verify no obstructions": {
        status: "",
        details: "Ensure clear surroundings for at least 100 m radius.",
      },
    },
    radio: {
      "Assign radiosonde ID": {
        status: "",
        details: "For distinguishing in telemetry logs.",
      },
      "Set telemetry frequency": {
        status: "",
        details:
          "Verify assigned frequency to avoid interference (e.g., in MHz).",
      },
      "Check sensor calibration": {
        status: "",
        details:
          "Verify factory-calibrated or pre-set values for temperature, humidity, pressure.",
      },
      "Confirm battery charge": {
        status: "",
        details: "Ensure full charge for the radiosonde's battery.",
      },
      "Configure data transmission": {
        status: "",
        details: "Specify data intervals and packet structure.",
      },
      "Conduct telemetry test": {
        status: "",
        details: "Verify radiosonde communication with ground station.",
      },
      "Conduct GPS lock test": {
        status: "",
        details: "Confirm stable GPS signal acquisition.",
      },
    },
    ground: {
      "Connect and align antenna": {
        status: "",
        details:
          "Use directional/omnidirectional antenna for telemetry reception.",
      },
      "Verify receiver frequency": {
        status: "",
        details: "Match radiosonde frequency with receiver settings.",
      },
      "Test receiver sensitivity": {
        status: "",
        details: "Ensure gain settings are appropriate for telemetry strength.",
      },
      "Configure data logging": {
        status: "",
        details: "Specify file format (e.g., CSV, BUFR) and logging intervals.",
      },
      "Test data processing software": {
        status: "",
        details: "Ensure software compatibility and functionality.",
      },
      "Enable backup storage": {
        status: "",
        details: "Configure secondary storage or cloud backup.",
      },
    },
    payload: {
      "Inspect radiosonde": {
        status: "",
        details: "Check casing, sensors, and telemetry module for defects.",
      },
      "Attach balloon securely": {
        status: "",
        details: "Ensure knot and string are tight and stable.",
      },
      "Fill balloon with gas": {
        status: "",
        details:
          "Use helium or hydrogen; verify pressure matches desired ascent rate.",
      },
      "Attach parachute": {
        status: "",
        details: "Ensure parachute deployment mechanism is functional.",
      },
      "Conduct weight balance test": {
        status: "",
        details:
          "Verify payload does not exceed recommended weight for ascent.",
      },
    },
  });

  const tabs = {
    site: "Site and Launch Preparation",
    radio: "Radiosonde Configuration",
    ground: "Ground Station Setup",
    payload: "Radiosonde Payload Checks",
  };

  const handleSelect = (
    tab: string,
    task: string,
    option: "tick" | "cross"
  ) => {
    setChecklist((prev) => ({
      ...prev,
      [tab]: {
        ...prev[tab],
        [task]: { ...prev[tab][task], status: option },
      },
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Tabs */}
      <div className="flex space-x-1 mb-4 border-b">
        {Object.entries(tabs).map(([key, value]) => (
          <button
            key={key}
            className={`px-4 py-2 rounded-t-lg ${
              activeTab === key
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab(key)}
          >
            {value}
          </button>
        ))}
      </div>

      {/* Checklist */}
      <div className="bg-white rounded-lg shadow">
        {Object.entries(checklist[activeTab]).map(
          ([task, { status, details }]) => (
            <div
              key={task}
              className="flex items-center p-4 border-b hover:bg-gray-50"
            >
              {/* Task Title and Details */}
              <div className="flex-1">
                <div className="font-medium">{task}</div>
                <div className="text-sm text-gray-500 mt-1">{details}</div>
              </div>

              {/* Buttons on the right */}
              <div className="flex gap-4 ml-auto">
                <button
                  className={`px-4 py-2 rounded ${
                    status === "tick"
                      ? "bg-green-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => handleSelect(activeTab, task, "tick")}
                >
                  ✓
                </button>
                <button
                  className={`px-4 py-2 rounded ${
                    status === "cross" ? "bg-red-500 text-white" : "bg-gray-200"
                  }`}
                  onClick={() => handleSelect(activeTab, task, "cross")}
                >
                  ✗
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ChecklistTabs;
