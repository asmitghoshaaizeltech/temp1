import React, { FC, useState, useRef } from "react";
import { Table } from "reactstrap"
import * as XLSX from "xlsx"; // For Excel file generation
import jsPDF from "jspdf"; // For PDF generation
import "jspdf-autotable";


const Tabularview: FC = () => {
    const [filters, setFilters] = useState({
        from_date: '',
        to_date: '',
        device_id: ''
    });

    const tableRef = useRef<HTMLTableElement>(null);

 // Function to handle download in different formats
 const handleDownload = (format: string) => {
  if (tableRef.current) {
    const table = tableRef.current;

    // Extract table rows and cells
    const rows = Array.from(table.rows);
    const tableData = rows.map(row => {
      return Array.from(row.cells).map(cell => cell.textContent || "");
    });

    if (format === "csv") {
      const csvContent = tableData.map(row => row.join(",")).join("\n");
      const blob = new Blob([csvContent], { type: "text/csv" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "table_data.csv";
      a.click();
      URL.revokeObjectURL(url);
    } else if (format === "excel") {
      const worksheet = XLSX.utils.aoa_to_sheet(tableData); // Convert table data to worksheet
      const workbook = XLSX.utils.book_new(); // Create a new workbook
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1"); // Append the worksheet
    
      // Generate Excel file and trigger download
      const excelFile = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
      const blob = new Blob([excelFile], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "table_data.xlsx";
      a.click();
      URL.revokeObjectURL(url);
    }
     else if (format === "word") {
      const doc = new Blob([tableData.map(row => row.join("\t")).join("\n")], { type: "application/msword" });
      const url = URL.createObjectURL(doc);
      const a = document.createElement("a");
      a.href = url;
      a.download = "table_data.doc";
      a.click();
      URL.revokeObjectURL(url);
    } 
  }
};

const handleButtonClick = () => {
  const selectElement = document.getElementById("fileFormatSelect") as HTMLSelectElement;
  const selectedFormat = selectElement.value;
  handleDownload(selectedFormat);
};

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

  <table ref={tableRef}
   className="min-w-full bg-white">
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

  {/* Export Options*/}
  <div
    id="exportOptions"
    className="flex items-center gap-4"
    style={{ display: 'none' }}
  >
    <select id="fileFormatSelect"
      className="rounded-md border  p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
    >
      <option value="excel">Excel</option>
      <option value="word">Word</option>
      <option value="csv">CSV</option>
    </select>

    <button onClick={handleButtonClick}
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
