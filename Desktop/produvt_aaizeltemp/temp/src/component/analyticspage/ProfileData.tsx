import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { altitude: 0, temperature: 25, pressure: 1013, humidity: 60 },
  { altitude: 1000, temperature: 20, pressure: 900, humidity: 55 },
  { altitude: 2000, temperature: 15, pressure: 800, humidity: 50 },
  { altitude: 3000, temperature: 10, pressure: 700, humidity: 45 },
  { altitude: 4000, temperature: 5, pressure: 600, humidity: 40 },
  { altitude: 5000, temperature: 0, pressure: 500, humidity: 35 },
]

const ProfileData: React.FC = () => {
  return (
    <div className="w-full h-96">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="altitude" label={{ value: 'Altitude (m)', position: 'insideBottomRight', offset: -10 }} />
          <YAxis yAxisId="left" label={{ value: 'Temperature (°C)', angle: -90, position: 'insideLeft' }} />
          <YAxis yAxisId="right" orientation="right" label={{ value: 'Pressure (hPa)', angle: 90, position: 'insideRight' }} />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="temperature" stroke="#8884d8" />
          <Line yAxisId="right" type="monotone" dataKey="pressure" stroke="#82ca9d" />
          <Line yAxisId="left" type="monotone" dataKey="humidity" stroke="#ffc658" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ProfileData

