import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { height: 0, temperature: 30, parcelTemperature: 30 },
  { height: 500, temperature: 25, parcelTemperature: 27 },
  { height: 1000, temperature: 20, parcelTemperature: 24 },
  { height: 1500, temperature: 15, parcelTemperature: 21 },
  { height: 2000, temperature: 10, parcelTemperature: 18 },
  { height: 2500, temperature: 5, parcelTemperature: 15 },
  { height: 3000, temperature: 0, parcelTemperature: 12 },
]

const LFC: React.FC = () => {
  return (
    <div className="w-full h-96">
      {/* <h2 className="text-2xl font-bold mb-4 text-center">LFC Graph</h2> */}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="temperature" type="number" label={{ value: 'Temperature (°C)', position: 'insideBottomRight'}} />
          <YAxis dataKey="parcelTemperature" type="number" label={{ value: 'parcelTemperature (°C)', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Line type="monotone" dataKey="temperature" name="Environmental Temperature" stroke="#8884d8" />
          <Line type="monotone" dataKey="parcelTemperature" name="Parcel Temperature" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LFC

