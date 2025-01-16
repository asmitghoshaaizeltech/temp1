import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

const data = [
  { name: '0-2000m', value: 30 },
  { name: '2000-5000m', value: 25 },
  { name: '5000-10000m', value: 20 },
  { name: '10000-15000m', value: 15 },
  { name: '15000m+', value: 10 },
]

const Altitude: React.FC = () => {
  return (
    <div className="w-full h-96">
      {/* <h2 className="text-2xl font-bold mb-4 text-center">Altitude Distribution</h2> */}
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Altitude

