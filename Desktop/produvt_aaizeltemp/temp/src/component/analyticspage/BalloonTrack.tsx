import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts'

const data = [
  { parameter: 'Temperature', value: 25, fullMark: 40 },
  { parameter: 'Pressure', value: 1013, fullMark: 1100 },
  { parameter: 'Humidity', value: 60, fullMark: 100 },
  { parameter: 'Wind Speed', value: 15, fullMark: 50 },
  { parameter: 'Altitude', value: 1000, fullMark: 5000 },
]

const BalloonTrack: React.FC = () => {
  return (
    <div className="w-full h-96">
      {/* <h2 className="text-2xl font-bold mb-4 text-center">Radiosonde Data Overview</h2> */}
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="parameter" />
          <PolarRadiusAxis />
          <Radar name="Value" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BalloonTrack

