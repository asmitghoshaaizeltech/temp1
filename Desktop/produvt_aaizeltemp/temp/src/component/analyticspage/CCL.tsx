import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface DataPoint {
  height: number
  temperature: number
  dewPoint: number
}

const data: DataPoint[] = [
  { height: 0, temperature: 30, dewPoint: 20 },
  { height: 500, temperature: 25, dewPoint: 18 },
  { height: 1000, temperature: 20, dewPoint: 16 },
  { height: 1500, temperature: 15, dewPoint: 14 },
  { height: 2000, temperature: 28, dewPoint: 12 },
  { height: 2500, temperature: 25, dewPoint: 10 },
  { height: 3000, temperature: 20, dewPoint: 28 },
  { height: 3500, temperature: 15, dewPoint: 26 },
  { height: 4000, temperature: 10, dewPoint: 10 },
]

const CCLGraph: React.FC = () => {
  const CustomTooltip: React.FC<any> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
          <p className="font-bold">Height: {label}m</p>
          <p>Temperature: {payload[0].value}°C</p>
          <p>Dew Point: {payload[1].value}°C</p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="w-full h-[600px] p-4">
      {/* <h2 className="text-2xl font-bold mb-4">Temperature and Dew Point Graph</h2> */}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="temperature" 
            type="number" 
            label={{ value: 'Temperature (°C)', position: 'insideBottomRight' }} 
            domain={['dataMin - 5', 'dataMax + 5']}
          />
          <YAxis 
            dataKey="dewPoint" 
            type="number"
            label={{ value: 'DewPoint (°C)', angle: -90, position: 'insideLeft' }} 
          />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="temperature" name="Temperature" stroke="#ff4444" strokeWidth={2} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="dewPoint" name="Dew Point" stroke="#44aa44" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CCLGraph

