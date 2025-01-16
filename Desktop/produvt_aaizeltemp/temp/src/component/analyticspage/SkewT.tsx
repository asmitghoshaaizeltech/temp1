import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'

interface DataPoint {
  pressure: number
  temperature: number
  dewPoint: number
  windSpeed: number
  windDirection: number
  height: number
}

const data: DataPoint[] = [
  { pressure: 100, temperature: -40, dewPoint: -45, windSpeed: 50, windDirection: 270, height: 16000 },
  { pressure: 200, temperature: -30, dewPoint: -35, windSpeed: 45, windDirection: 265, height: 12000 },
  { pressure: 300, temperature: -45, dewPoint: -44, windSpeed: 58, windDirection: 260, height: 9293 },
  { pressure: 500, temperature: -15, dewPoint: -20, windSpeed: 35, windDirection: 255, height: 5500 },
  { pressure: 700, temperature: 0, dewPoint: -5, windSpeed: 25, windDirection: 250, height: 3000 },
  { pressure: 850, temperature: 10, dewPoint: 5, windSpeed: 15, windDirection: 245, height: 1500 },
  { pressure: 1000, temperature: 20, dewPoint: 15, windSpeed: 5, windDirection: 240, height: 0 },
]

const CustomTooltip: React.FC<any> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
        <p className="font-bold">Height: {data.height}m</p>
        <p>Pressure: {data.pressure}mb</p>
        <p>Temperature: {data.temperature}°C</p>
        <p>Dew Point: {data.dewPoint}°C</p>
        <p>Wind: {data.windSpeed}kt @ {data.windDirection}°</p>
      </div>
    )
  }
  return null
}

const SkewTDiagram: React.FC = () => {
  // Create diagonal reference lines for the skewed temperature grid
  const referenceLines: JSX.Element[] = []
  for (let temp = -40; temp <= 40; temp += 10) {
    referenceLines.push(
      <ReferenceLine
        key={`ref-${temp}`}
        stroke="#e5e5e5"
        strokeDasharray="3 3"
        segment={[
          { x: temp, y: 100 },
          { x: temp + 30, y: 1000 }
        ]}
      />
    )
  }

  return (
    <div className="flex">
      <div className="flex-grow h-[600px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            layout="vertical"
            data={data}
            margin={{ top: 20, right: 80, bottom: 20, left: 50 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            {referenceLines}
            <XAxis 
              type="number" 
              domain={[-40, 50]}
              label={{ value: 'Temperature (°C)', position: 'bottom' }}
            />
            <YAxis
              dataKey="pressure"
              type="number"
              domain={[100, 1000]}
              reversed
              label={{ value: 'Pressure (mb)', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              dataKey="temperature"
              stroke="#ff4444"
              strokeWidth={2}
              dot={{ r: 4 }}
              layout="vertical"
            />
            <Line
              dataKey="dewPoint"
              stroke="#44aa44"
              strokeWidth={2}
              dot={{ r: 4 }}
              layout="vertical"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
    </div>
  )
}

export default SkewTDiagram

