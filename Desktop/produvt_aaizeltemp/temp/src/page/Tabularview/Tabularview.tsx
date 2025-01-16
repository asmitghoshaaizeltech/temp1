import React, { FC, useState } from "react";
import { Table } from "reactstrap"

const Tabularview: FC = () => {
    const [filters, setFilters] = useState({
        from_date: '',
        to_date: '',
        device_id: ''
    });

    return (
        <div className="max-w-7xl mx-auto">
            <div className="filter-row  flex justify-between gap-x-2 pt-4 px-6 my-2">

                <div className="flex gap-x-3">
                        <label className="self-center">From Date:</label>
                        <input 
                            type="date" 
                            className="rounded-md border  p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
                            value={filters.from_date} 
                            onChange={(e) => setFilters({ ...filters, from_date: e.target.value })} 
                        />
                </div>

                <div className="flex gap-x-3">
                        <label className="self-center">To Date:</label>
                        <input 
                            type="date" 
                            className="rounded-md border  p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
                            value={filters.to_date} 
                            onChange={(e) => setFilters({ ...filters, to_date: e.target.value })}
                        />
                </div>

                <div className="flex gap-x-3">
                    <label className="self-center">Device ID:</label>
                    <select 
                        // value={filters.device_id} 
                        // onChange={(e) => setFilters({ ...filters, device_id: e.target.value })} 
                        className="rounded-md border  p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
                    >
                        <option value="">Select</option>
                        <option value="1">Device 1</option>
                        <option value="2">Device 2</option>
                    </select>
                </div>

                {/* <div className="flex gap-x-3">
                    <input type="checkbox" id="plotPath" />
                    <label htmlFor="plotPath" className="self-center">Plot Sonde Path</label>
                </div> */}

                
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out">Fetch</button>
 
            </div>

            <div className="overflow-x-auto mt-3">

                <hr className="mb-4" />

  <table className="min-w-full bg-white">
    <thead className="bg-gray-100">
      <tr>
        <th className="py-2 px-4 border-b text-left">Device Id</th>
        <th className="py-2 px-4 border-b text-left">Packet No.</th>
        <th className="py-2 px-4 border-b text-left">Date & Time</th>
        <th className="py-2 px-4 border-b text-left">Temperature</th>
        <th className="py-2 px-4 border-b text-left">Humidity</th>
        <th className="py-2 px-4 border-b text-left">Dew Point</th>
        <th className="py-2 px-4 border-b text-left">Pressure</th>
        <th className="py-2 px-4 border-b text-left">Latitude</th>
        <th className="py-2 px-4 border-b text-left">Longitude</th>
        <th className="py-2 px-4 border-b text-left">Altitude</th>
        <th className="py-2 px-4 border-b text-left">Ascent Rate</th>
        <th className="py-2 px-4 border-b text-left">Wind Speed</th>
        <th className="py-2 px-4 border-b text-left">Wind Direction</th>
      </tr>
    </thead>
    <tbody>
      <tr className="hover:bg-gray-50">
        <td className="py-2 px-4 border-b">1</td>
        <td className="py-2 px-4 border-b text-center">Table cell</td>
        <td className="py-2 px-4 border-b text-center">Table cell</td>
        <td className="py-2 px-4 border-b text-center">Table cell</td>
        <td className="py-2 px-4 border-b text-center">Table cell</td>
        <td className="py-2 px-4 border-b text-center">Table cell</td>
        <td className="py-2 px-4 border-b text-center">Table cell</td>
        <td className="py-2 px-4 border-b text-center">Table cell</td>
        <td className="py-2 px-4 border-b text-center">Table cell</td>
        <td className="py-2 px-4 border-b text-center">Table cell</td>
        <td className="py-2 px-4 border-b text-center">Table cell</td>
        <td className="py-2 px-4 border-b text-center">Table cell</td>
        <td className="py-2 px-4 border-b text-center">Table cell</td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="py-2 px-4 border-b">2</td>
        <td className="py-2 px-4 border-b text-center">Table cell</td>
        <td className="py-2 px-4 border-b text-center">Table cell</td>
        <td className="py-2 px-4 border-b text-center">Table cell</td>
        <td className="py-2 px-4 border-b text-center">Table cell</td>
        <td className="py-2 px-4 border-b text-center">Table cell</td>
        <td className="py-2 px-4 border-b text-center">Table cell</td>
        <td className="py-2 px-4 border-b text-center">Table cell</td>
        <td className="py-2 px-4 border-b text-center">Table cell</td>
        <td className="py-2 px-4 border-b text-center">Table cell</td>
        <td className="py-2 px-4 border-b text-center">Table cell</td>
        <td className="py-2 px-4 border-b text-center">Table cell</td>
        <td className="py-2 px-4 border-b text-center">Table cell</td>
      </tr>
    </tbody>
  </table>
</div>

           
            <div className="absolute bottom-20 inset-x-0 flex flex-col items-center gap-4 px-4">
  {/* Export to File Checkbox */}
  <div className="flex items-center gap-3">
    <input
      type="checkbox"
      id="exportFile"
      className="w-4 h-4 accent-black"
      onChange={(e) => {
        const exportOptions = document.getElementById('exportOptions');
        if (exportOptions) {
          exportOptions.style.display = e.target.checked ? 'flex' : 'none';
        }
      }}
    />
    <label
      htmlFor="exportFile"
      className="font-semibold text-[1rem]"
    >
      Export to file
    </label>
  </div>

  {/* Export Options (Initially Hidden) */}
  <div
    id="exportOptions"
    className="flex items-center gap-4"
    style={{ display: 'none' }}
  >
    <select
      className="rounded-md border  p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
    >
      <option value="excel">Excel</option>
      <option value="word">Word</option>
      <option value="csv">CSV</option>
    </select>

    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out"
    >
      Download
    </button>
  </div>
</div>


        </div>
    );
};

export default Tabularview;
