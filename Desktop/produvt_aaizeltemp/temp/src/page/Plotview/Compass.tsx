import React from "react";

interface CompassProps {
  direction: number;
  size?: number;
}

const Compass: React.FC<CompassProps> = ({ direction = 0, size = 150 }) => {
  const needleStyle = {
    transform: `rotate(${direction}deg)`,
    transformOrigin: "50% 50%",
    transition: "transform 0.5s ease-out",
  };

  // Convert direction to cardinal points
  const getCardinalDirection = (deg: number) => {
    const directions = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];
    const index = Math.round((deg % 360) / 22.5);
    return directions[index % 16];
  };

  return (
    <div
      className="relative"
      style={{ width: size, height: 200, marginTop: 60 }}
    >
      <svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        className="absolute top-0 left-0"
      >
        {/* Outer Ring */}
        <circle
          cx="100"
          cy="100"
          r="98"
          fill="none"
          stroke="#2B4156"
          strokeWidth="4"
        />
        <circle
          cx="100"
          cy="100"
          r="95"
          fill="#f8fafc"
          stroke="#64748b"
          strokeWidth="1"
        />

        {/* Degree markings */}
        {[...Array(72)].map((_, i) => {
          const angle = (i * 5 * Math.PI) / 180;
          const isMajor = i % 18 === 0;
          const isMinor = i % 9 === 0;
          const length = isMajor ? 15 : isMinor ? 10 : 5;
          const strokeWidth = isMajor ? 2 : 1;
          const x1 = 100 + 85 * Math.sin(angle);
          const y1 = 100 - 85 * Math.cos(angle);
          const x2 = 100 + (85 - length) * Math.sin(angle);
          const y2 = 100 - (85 - length) * Math.cos(angle);

          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#334155"
              strokeWidth={strokeWidth}
            />
          );
        })}

        {/* Cardinal Directions */}
        {["N", "E", "S", "W"].map((dir, i) => {
          const angle = i * 90;
          const x = 100 + 65 * Math.sin((angle * Math.PI) / 180);
          const y = 100 - 62 * Math.cos((angle * Math.PI) / 180);

          return (
            <text
              key={dir}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="14"
              fontWeight="bold"
              fill="#1e293b"
              className="font-mono"
            >
              {dir}
            </text>
          );
        })}

        {/* Inner Circles */}
        <circle
          cx="100"
          cy="100"
          r="65"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="1"
        />
        <circle
          cx="100"
          cy="100"
          r="45"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="1"
        />

        {/* Compass Needle */}
        <g style={needleStyle}>
          {/* North Pointer */}
          <path
            d="M100,20 L90,100 L100,95 L110,100 Z"
            fill="#dc2626"
            stroke="#991b1b"
            strokeWidth="1"
          />
          {/* South Pointer */}
          <path
            d="M100,180 L90,100 L100,105 L110,100 Z"
            fill="#1e293b"
            stroke="#0f172a"
            strokeWidth="1"
          />
          {/* Center Circle */}
          <circle
            cx="100"
            cy="100"
            r="8"
            fill="#e2e8f0"
            stroke="#64748b"
            strokeWidth="2"
          />
        </g>
      </svg>

      {/* Direction Display */}
      <div className="absolute bottom-2 left-0 w-full text-center mt-2">
        <div className="inline-flex items-center justify-center bg-slate-800 rounded-full px-4 py-1 space-x-2">
          <span className="text-slate-200 font-mono text-sm">
            {Number(direction).toPrecision(3)}°
          </span>
          <span className="text-slate-400 font-mono text-sm">
            {getCardinalDirection(direction)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Compass;
