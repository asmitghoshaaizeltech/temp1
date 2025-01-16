import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface ChartProps {
  title: string;
  data: any[];
  dataKey: string;
  unit: string;
  color: string;
}

// Custom Card components
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <div className={`bg-white rounded-lg shadow ${className}`}>{children}</div>
);

const CardHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="px-6 py-4 border-b border-gray-200">{children}</div>
);

const CardTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-lg font-semibold text-gray-900">{children}</h3>
);

const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="p-6">{children}</div>
);

const MeasurementChart: React.FC<ChartProps> = ({
  title,
  data,
  dataKey,
  unit,
  color,
}) => (
  <Card className="w-full">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 20, bottom: 25, left: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="altitude"
              label={{ value: "Altitude (km)", position: "bottom", offset: 5 }}
            />
            <YAxis
              label={{
                value: unit,
                angle: -90,
                position: "insideLeft",
                offset: 10,
              }}
            />
            <Tooltip
              formatter={(value: number) => [`${value} ${unit}`, title]}
              labelFormatter={(label) => `Altitude: ${label}m`}
            />
            <Legend
              verticalAlign="top"
              height={36}
              formatter={(value) => `${title} (${unit})`}
            />
            <Line
              name={title}
              type="monotone"
              dataKey={dataKey}
              stroke={color}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
);

export default MeasurementChart;
