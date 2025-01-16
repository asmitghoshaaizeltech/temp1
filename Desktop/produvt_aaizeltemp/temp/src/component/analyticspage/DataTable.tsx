import React from 'react'

interface RadiosondeData {
  time: string
  pressure: number
  temperature: number
  humidity: number
  windSpeed: number
  windDirection: number
  geopotential: number
  dewPoint: number
  riGri: number
  mri: number
  cl: number
  d: number
  vp: number
  potTe: number
  viTe: number
  specU: number
  utcTime: number
  wcpVertical: number
  wdirVertical: number
  nsWind: number
  ewWind: number
  wcpHorizontal: number
  wdirHorizontal: number
  vertWind: number
  windMs: number
  winMs: number
  geometricHeight: number
  longitude: number
  latitude: number
}

const DataTable: React.FC = () => {
  const data: RadiosondeData[] = [
    {
      time: '12:00',
      pressure: 1013.25,
      temperature: 25.0,
      humidity: 60,
      windSpeed: 10,
      windDirection: 180,
      geopotential: 0,
      dewPoint: 16.7,
      riGri: 0.5,
      mri: 0.6,
      cl: 2.5,
      d: 15.3,
      vp: 19.2,
      potTe: 27.5,
      viTe: 26.8,
      specU: 12.5,
      utcTime: 43200,
      wcpVertical: 0.1,
      wdirVertical: 90,
      nsWind: 0,
      ewWind: -10,
      wcpHorizontal: 10,
      wdirHorizontal: 180,
      vertWind: 0.1,
      windMs: 5.14,
      winMs: 5.14,
      geometricHeight: 10,
      longitude: -73.935242,
      latitude: 40.730610,
    },
    { time: '12:05', pressure: 950.0, temperature: 20.5, humidity: 65, windSpeed: 12, windDirection: 185, geopotential: 540, dewPoint: 13.9, riGri: 0.5, mri: 0.6, cl: 2.5, d: 15.3, vp: 19.2, potTe: 27.5, viTe: 26.8, specU: 12.5, utcTime: 43200, wcpVertical: 0.1, wdirVertical: 90, nsWind: 0, ewWind: -10, wcpHorizontal: 10, wdirHorizontal: 180, vertWind: 0.1, windMs: 5.14, winMs: 5.14, geometricHeight: 10, longitude: -73.935242, latitude: 40.730610 },
    { time: '12:10', pressure: 900.0, temperature: 17.2, humidity: 70, windSpeed: 15, windDirection: 190, geopotential: 1000, dewPoint: 11.8, riGri: 0.5, mri: 0.6, cl: 2.5, d: 15.3, vp: 19.2, potTe: 27.5, viTe: 26.8, specU: 12.5, utcTime: 43200, wcpVertical: 0.1, wdirVertical: 90, nsWind: 0, ewWind: -10, wcpHorizontal: 10, wdirHorizontal: 180, vertWind: 0.1, windMs: 5.14, winMs: 5.14, geometricHeight: 10, longitude: -73.935242, latitude: 40.730610 },
    { time: '12:15', pressure: 850.0, temperature: 13.5, humidity: 75, windSpeed: 18, windDirection: 195, geopotential: 1500, dewPoint: 9.1, riGri: 0.5, mri: 0.6, cl: 2.5, d: 15.3, vp: 19.2, potTe: 27.5, viTe: 26.8, specU: 12.5, utcTime: 43200, wcpVertical: 0.1, wdirVertical: 90, nsWind: 0, ewWind: -10, wcpHorizontal: 10, wdirHorizontal: 180, vertWind: 0.1, windMs: 5.14, winMs: 5.14, geometricHeight: 10, longitude: -73.935242, latitude: 40.730610 },
    { time: '12:20', pressure: 800.0, temperature: 9.8, humidity: 80, windSpeed: 20, windDirection: 200, geopotential: 2000, dewPoint: 6.5, riGri: 0.5, mri: 0.6, cl: 2.5, d: 15.3, vp: 19.2, potTe: 27.5, viTe: 26.8, specU: 12.5, utcTime: 43200, wcpVertical: 0.1, wdirVertical: 90, nsWind: 0, ewWind: -10, wcpHorizontal: 10, wdirHorizontal: 180, vertWind: 0.1, windMs: 5.14, winMs: 5.14, geometricHeight: 10, longitude: -73.935242, latitude: 40.730610 },
  ]

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b text-left">Time</th>
            <th className="py-2 px-4 border-b text-left">P[hPa]</th>
            <th className="py-2 px-4 border-b text-left">T[°C]</th>
            <th className="py-2 px-4 border-b text-left">Hu[%]</th>
            <th className="py-2 px-4 border-b text-left">Ws[kn]</th>
            <th className="py-2 px-4 border-b text-left">Wd[°]</th>
            <th className="py-2 px-4 border-b text-left">Geopot[m]</th>
            <th className="py-2 px-4 border-b text-left">Dew[°C]</th>
            <th className="py-2 px-4 border-b text-left">RI GRI</th>
            <th className="py-2 px-4 border-b text-left">MRI</th>
            <th className="py-2 px-4 border-b text-left">CL[m/s]</th>
            <th className="py-2 px-4 border-b text-left">D[g/m3]</th>
            <th className="py-2 px-4 border-b text-left">VP</th>
            <th className="py-2 px-4 border-b text-left">POT Te[°C]</th>
            <th className="py-2 px-4 border-b text-left">Vi Te[°C]</th>
            <th className="py-2 px-4 border-b text-left">Spec U[g/ms]</th>
            <th className="py-2 px-4 border-b text-left">UTC Time[sec]</th>
            <th className="py-2 px-4 border-b text-left">Wcp[m/s] Vert</th>
            <th className="py-2 px-4 border-b text-left">Wdir[°] Vert</th>
            <th className="py-2 px-4 border-b text-left">N/S Wind</th>
            <th className="py-2 px-4 border-b text-left">E/W Wind</th>
            <th className="py-2 px-4 border-b text-left">Wcp[m/s] Horiz</th>
            <th className="py-2 px-4 border-b text-left">Wdir[°] Horiz</th>
            <th className="py-2 px-4 border-b text-left">Vert Wind</th>
            <th className="py-2 px-4 border-b text-left">Wind[m/s]</th>
            <th className="py-2 px-4 border-b text-left">Win[m/s]</th>
            <th className="py-2 px-4 border-b text-left">Geometric Height[m]</th>
            <th className="py-2 px-4 border-b text-left">Lon[°]</th>
            <th className="py-2 px-4 border-b text-left">Lat[°]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{row.time}</td>
              <td className="py-2 px-4 border-b">{row.pressure.toFixed(2)}</td>
              <td className="py-2 px-4 border-b">{row.temperature.toFixed(1)}</td>
              <td className="py-2 px-4 border-b">{row.humidity}</td>
              <td className="py-2 px-4 border-b">{row.windSpeed}</td>
              <td className="py-2 px-4 border-b">{row.windDirection}</td>
              <td className="py-2 px-4 border-b">{row.geopotential}</td>
              <td className="py-2 px-4 border-b">{row.dewPoint.toFixed(1)}</td>
              <td className="py-2 px-4 border-b">{row.riGri.toFixed(2)}</td>
              <td className="py-2 px-4 border-b">{row.mri.toFixed(2)}</td>
              <td className="py-2 px-4 border-b">{row.cl.toFixed(1)}</td>
              <td className="py-2 px-4 border-b">{row.d.toFixed(1)}</td>
              <td className="py-2 px-4 border-b">{row.vp.toFixed(1)}</td>
              <td className="py-2 px-4 border-b">{row.potTe.toFixed(1)}</td>
              <td className="py-2 px-4 border-b">{row.viTe.toFixed(1)}</td>
              <td className="py-2 px-4 border-b">{row.specU.toFixed(1)}</td>
              <td className="py-2 px-4 border-b">{row.utcTime}</td>
              <td className="py-2 px-4 border-b">{row.wcpVertical.toFixed(2)}</td>
              <td className="py-2 px-4 border-b">{row.wdirVertical}</td>
              <td className="py-2 px-4 border-b">{row.nsWind.toFixed(1)}</td>
              <td className="py-2 px-4 border-b">{row.ewWind.toFixed(1)}</td>
              <td className="py-2 px-4 border-b">{row.wcpHorizontal.toFixed(1)}</td>
              <td className="py-2 px-4 border-b">{row.wdirHorizontal}</td>
              <td className="py-2 px-4 border-b">{row.vertWind.toFixed(2)}</td>
              <td className="py-2 px-4 border-b">{row.windMs.toFixed(2)}</td>
              <td className="py-2 px-4 border-b">{row.winMs.toFixed(2)}</td>
              <td className="py-2 px-4 border-b">{row.geometricHeight}</td>
              <td className="py-2 px-4 border-b">{row.longitude.toFixed(6)}</td>
              <td className="py-2 px-4 border-b">{row.latitude.toFixed(6)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable

