import React from 'react'
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { temperature: 30, pressure: 1000, potentialTemperature: 30 },
  { temperature: 25, pressure: 900, potentialTemperature: 35 },
  { temperature: 20, pressure: 800, potentialTemperature: 40 },
  { temperature: 15, pressure: 700, potentialTemperature: 45 },
  { temperature: 10, pressure: 600, potentialTemperature: 50 },
  { temperature: 5, pressure: 500, potentialTemperature: 55 },
  { temperature: 0, pressure: 400, potentialTemperature: 60 },
]

const Tephigram: React.FC = () => {
  return (
    <div className="w-full h-96">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid />
          <XAxis type="number" dataKey="temperature" name="Temperature" unit="°C" />
          <YAxis type="number" dataKey="pressure" name="Pressure" unit="hPa" domain={['dataMax', 'dataMin']} />
          <ZAxis type="number" dataKey="potentialTemperature" range={[50, 1000]} name="Potential Temperature" unit="K" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="Tephigram" data={data} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Tephigram

