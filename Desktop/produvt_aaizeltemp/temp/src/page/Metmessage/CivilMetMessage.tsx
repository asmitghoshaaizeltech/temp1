import React, { FC, useState, useRef } from "react";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";



const CivilMetmessage: FC = () => {
  const [filters, setFilters] = useState({
    from_date: '',
    to_date: '',
    device_id: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value
    });
  };

  const contentRef = useRef<HTMLParagraphElement>(null);

 // Function to handle download in different formats
   const handleDownload = (format: string) => {
     if (contentRef.current) {
       const content = contentRef.current.textContent || "";
 
       if (format === "csv") {
         const csvContent = content
           .split("\n")
           .map((line) => line.trim())
           .join("\n");
         const blob = new Blob([csvContent], { type: "text/csv" });
         const url = URL.createObjectURL(blob);
         const a = document.createElement("a");
         a.href = url;
         a.download = "content.csv";
         a.click();
         URL.revokeObjectURL(url);
       } else if (format === "excel") {
         const worksheet = XLSX.utils.aoa_to_sheet([[content]]);
         const workbook = XLSX.utils.book_new();
         XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
         const excelFile = XLSX.write(workbook, {
           bookType: "xlsx",
           type: "array",
         });
         const blob = new Blob([excelFile], { type: "application/octet-stream" });
         const url = URL.createObjectURL(blob);
         const a = document.createElement("a");
         a.href = url;
         a.download = "content.xlsx";
         a.click();
         URL.revokeObjectURL(url);
       } else if (format === "word") {
         const doc = new Blob([content], { type: "application/msword" });
         const url = URL.createObjectURL(doc);
         const a = document.createElement("a");
         a.href = url;
         a.download = "content.doc";
         a.click();
         URL.revokeObjectURL(url);
       }
     }
   };
 
   const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
     const selectElement = (
       event.currentTarget.parentElement?.querySelector(
         "#fileFormatSelect"
       ) as HTMLSelectElement
     );
     const selectedFormat = selectElement?.value;
     if (selectedFormat) {
       handleDownload(selectedFormat);
     }
   };
 
  return (
    <>
    <div className="text-left max-w-7xl mx-auto">
     <div className="border-2 border-gray-200 rounded-md shadow-md p-4 mt-4">
    <nav>
    <label className="font-semibold text-[1rem] p-1">DEVICE AND TIME SELECTION</label>
    </nav>
   
    <div className="filter-row p-4 flex justify-between gap-x-2">

    <div className="flex items-center gap-x-3">
            <label className="self-center">From Date:</label>
            <input 
                type="date" 
                className="rounded-md border w-full p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
                value={filters.from_date} 
                onChange={(e) => setFilters({ ...filters, from_date: e.target.value })} 
            />
    </div>

    <div className="flex items-center gap-x-3">
            <label className="self-center">To Date:</label>
            <input 
                type="date" 
                className="rounded-md border w-full p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
                value={filters.to_date} 
                onChange={(e) => setFilters({ ...filters, to_date: e.target.value })}
            />
    </div>

    <div className="flex items-center gap-x-3">
        <label className="self-center">Device ID:</label>
        <select 
            className="device-dropdown rounded-md border w-full p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
        >
            <option value="">Select</option>
            <option value="1">Device 1</option>
            <option value="2">Device 2</option>
        </select>
    </div>


    
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out m-2">Fetch</button>

</div>
</div>



<div className="flex justify-center gap-4 text-center ">

{/*Civil Met Message*/}
<div className=" border-2 border-gray-200 rounded-md shadow-md p-4 mt-4">
<nav>
    <label className="font-semibold text-[1rem] p-1">CIVIL WMO</label>
</nav>
<div className="grid grid-cols-3 gap-4 text-center p-2">
<div className="col-span-1 border-2 border-gray-200 rounded-md shadow-md p-4 mt-4">
                <div>
                  <label className="block m-5 font-semibold text-[1rem]">
                    PILOT
                  </label>
                </div>
                <div>
                  <p
                    id="PILOT"
                    ref={contentRef}
                    className="rounded-md border p-4 h-60 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
                  >
                    1223 4524 5245 54 436 24744 140370 47 130 4524 5245 54 436
                    4524 5245 54 436
                  </p>
                </div>
                <div
                  id="exportOptions"
                  className="flex items-center justify-center gap-2 m-2"
                >
                  <select
                    id="fileFormatSelect"
                    className="rounded-md border mt-2 p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
                  >
                    <option value="excel">Excel</option>
                    <option value="word">Word</option>
                    <option value="csv">CSV</option>
                  </select>

                  <button
                    onClick={handleButtonClick}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-2 mt-2 rounded-md transition duration-300 ease-in-out"
                  >
                    Download
                  </button>
                </div>
              </div>
         <div className="col-span-1 border-2 border-gray-200 rounded-md shadow-md p-4 mt-4">
                <div>
                  <label className="block m-5 font-semibold text-[1rem]">
                    TEMP
                  </label>
                </div>
                <div>
                  <p
                    id="TEMP"
                    ref={contentRef}
                    className="rounded-md border p-4 h-60 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
                  >
                    1223 4524 5245 54 436 24744 140370 47 130 4524 5245 54 436
                    4524 5245 54 436
                  </p>
                </div>
                <div
                  id="exportOptions"
                  className="flex items-center justify-center gap-2 m-2"
                >
                  <select
                    id="fileFormatSelect"
                    className="rounded-md border mt-2 p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
                  >
                    <option value="excel">Excel</option>
                    <option value="word">Word</option>
                    <option value="csv">CSV</option>
                  </select>

                  <button
                    onClick={handleButtonClick}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-2 mt-2 rounded-md transition duration-300 ease-in-out"
                  >
                    Download
                  </button>
                </div>
              </div>
         <div className="col-span-1 border-2 border-gray-200 rounded-md shadow-md p-4 mt-4">
                <div>
                  <label className="block m-5 font-semibold text-[1rem]">
                    BUFR
                  </label>
                </div>
                <div>
                  <p
                    id="BUFR"
                    ref={contentRef}
                    className="rounded-md border p-4 h-60 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
                  >
                    1223 4524 5245 54 436 24744 140370 47 130 4524 5245 54 436
                    4524 5245 54 436
                  </p>
                </div>
                <div
                  id="exportOptions"
                  className="flex items-center justify-center gap-2 m-2"
                >
                  <select
                    id="fileFormatSelect"
                    className="rounded-md border mt-2 p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
                  >
                    <option value="excel">Excel</option>
                    <option value="word">Word</option>
                    <option value="csv">CSV</option>
                  </select>

                  <button
                    onClick={handleButtonClick}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-2 mt-2 rounded-md transition duration-300 ease-in-out"
                  >
                    Download
                  </button>
                </div>
              </div>
         <div className="col-span-1 border-2 border-gray-200 rounded-md shadow-md p-4 mt-4">
                <div>
                  <label className="block m-5 font-semibold text-[1rem]">
                    GRIB
                  </label>
                </div>
                <div>
                  <p
                    id="GRIB"
                    ref={contentRef}
                    className="rounded-md border p-4 h-60 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
                  >
                    1223 4524 5245 54 436 24744 140370 47 130 4524 5245 54 436
                    4524 5245 54 436
                  </p>
                </div>
                <div
                  id="exportOptions"
                  className="flex items-center justify-center gap-2 m-2"
                >
                  <select
                    id="fileFormatSelect"
                    className="rounded-md border mt-2 p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
                  >
                    <option value="excel">Excel</option>
                    <option value="word">Word</option>
                    <option value="csv">CSV</option>
                  </select>

                  <button
                    onClick={handleButtonClick}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-2 mt-2 rounded-md transition duration-300 ease-in-out"
                  >
                    Download
                  </button>
                </div>
              </div>
         <div className="col-span-1 border-2 border-gray-200 rounded-md shadow-md p-4 mt-4">
                <div>
                  <label className="block m-5 font-semibold text-[1rem]">
                    METAR
                  </label>
                </div>
                <div>
                  <p
                    id="METAR"
                    ref={contentRef}
                    className="rounded-md border p-4 h-60 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
                  >
                    1223 4524 5245 54 436 24744 140370 47 130 4524 5245 54 436
                    4524 5245 54 436
                  </p>
                </div>
                <div
                  id="exportOptions"
                  className="flex items-center justify-center gap-2 m-2"
                >
                  <select
                    id="fileFormatSelect"
                    className="rounded-md border mt-2 p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
                  >
                    <option value="excel">Excel</option>
                    <option value="word">Word</option>
                    <option value="csv">CSV</option>
                  </select>

                  <button
                    onClick={handleButtonClick}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-2 mt-2 rounded-md transition duration-300 ease-in-out"
                  >
                    Download
                  </button>
                </div>
              </div>
         <div className="col-span-1 border-2 border-gray-200 rounded-md shadow-md p-4 mt-4">
                <div>
                  <label className="block m-5 font-semibold text-[1rem]">
                    SYNOP
                  </label>
                </div>
                <div>
                  <p
                    id="SYNOP"
                    ref={contentRef}
                    className="rounded-md border p-4 h-60 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
                  >
                    1223 4524 5245 54 436 24744 140370 47 130 4524 5245 54 436
                    4524 5245 54 436
                  </p>
                </div>
                <div
                  id="exportOptions"
                  className="flex items-center justify-center gap-2 m-2"
                >
                  <select
                    id="fileFormatSelect"
                    className="rounded-md border mt-2 p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
                  >
                    <option value="excel">Excel</option>
                    <option value="word">Word</option>
                    <option value="csv">CSV</option>
                  </select>

                  <button
                    onClick={handleButtonClick}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-2 mt-2 rounded-md transition duration-300 ease-in-out"
                  >
                    Download
                  </button>
                </div>
              </div>
         <div className="col-span-1 border-2 border-gray-200 rounded-md shadow-md p-4 mt-4">
                <div>
                  <label className="block m-5 font-semibold text-[1rem]">
                    CLIMAT TEMP
                  </label>
                </div>
                <div>
                  <p
                    id="CLIMAT TEMP"
                    ref={contentRef}
                    className="rounded-md border p-4 h-60 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
                  >
                    1223 4524 5245 54 436 24744 140370 47 130 4524 5245 54 436
                    4524 5245 54 436
                  </p>
                </div>
                <div
                  id="exportOptions"
                  className="flex items-center justify-center gap-2 m-2"
                >
                  <select
                    id="fileFormatSelect"
                    className="rounded-md border mt-2 p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
                  >
                    <option value="excel">Excel</option>
                    <option value="word">Word</option>
                    <option value="csv">CSV</option>
                  </select>

                  <button
                    onClick={handleButtonClick}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-2 mt-2 rounded-md transition duration-300 ease-in-out"
                  >
                    Download
                  </button>
                </div>
              </div>
         <div className="col-span-1 border-2 border-gray-200 rounded-md shadow-md p-4 mt-4">
                <div>
                  <label className="block m-5 font-semibold text-[1rem]">
                    INDICES
                  </label>
                </div>
                <div>
                  <p
                    id="INDICES"
                    ref={contentRef}
                    className="rounded-md border p-4 h-60 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
                  >
                    1223 4524 5245 54 436 24744 140370 47 130 4524 5245 54 436
                    4524 5245 54 436
                  </p>
                </div>
                <div
                  id="exportOptions"
                  className="flex items-center justify-center gap-2 m-2"
                >
                  <select
                    id="fileFormatSelect"
                    className="rounded-md border mt-2 p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
                  >
                    <option value="excel">Excel</option>
                    <option value="word">Word</option>
                    <option value="csv">CSV</option>
                  </select>

                  <button
                    onClick={handleButtonClick}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-2 mt-2 rounded-md transition duration-300 ease-in-out"
                  >
                    Download
                  </button>
                </div>
              </div>
         <div className="col-span-1 border-2 border-gray-200 rounded-md shadow-md p-4 mt-4">
                <div>
                  <label className="block m-5 font-semibold text-[1rem]">
                    AMDAR
                  </label>
                </div>
                <div>
                  <p
                    id="AMDAR"
                    ref={contentRef}
                    className="rounded-md border p-4 h-60 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
                  >
                    1223 4524 5245 54 436 24744 140370 47 130 4524 5245 54 436
                    4524 5245 54 436
                  </p>
                </div>
                <div
                  id="exportOptions"
                  className="flex items-center justify-center gap-2 m-2"
                >
                  <select
                    id="fileFormatSelect"
                    className="rounded-md border mt-2 p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
                  >
                    <option value="excel">Excel</option>
                    <option value="word">Word</option>
                    <option value="csv">CSV</option>
                  </select>

                  <button
                    onClick={handleButtonClick}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-2 mt-2 rounded-md transition duration-300 ease-in-out"
                  >
                    Download
                  </button>
                </div>
              </div>
         <div className="col-span-1 border-2 border-gray-200 rounded-md shadow-md p-4 mt-4">
                <div>
                  <label className="block m-5 font-semibold text-[1rem]">
                    SIGMET/AIRMET
                  </label>
                </div>
                <div>
                  <p
                    id="SIGMET/AIRMET"
                    ref={contentRef}
                    className="rounded-md border p-4 h-60 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
                  >
                    1223 4524 5245 54 436 24744 140370 47 130 4524 5245 54 436
                    4524 5245 54 436
                  </p>
                </div>
                <div
                  id="exportOptions"
                  className="flex items-center justify-center gap-2 m-2"
                >
                  <select
                    id="fileFormatSelect"
                    className="rounded-md border mt-2 p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
                  >
                    <option value="excel">Excel</option>
                    <option value="word">Word</option>
                    <option value="csv">CSV</option>
                  </select>

                  <button
                    onClick={handleButtonClick}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-2 mt-2 rounded-md transition duration-300 ease-in-out"
                  >
                    Download
                  </button>
                </div>
              </div>
         <div className="col-span-1 border-2 border-gray-200 rounded-md shadow-md p-4 mt-4">
                <div>
                  <label className="block m-5 font-semibold text-[1rem]">
                    TAF
                  </label>
                </div>
                <div>
                  <p
                    id="TAF"
                    ref={contentRef}
                    className="rounded-md border p-4 h-60 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
                  >
                    1223 4524 5245 54 436 24744 140370 47 130 4524 5245 54 436
                    4524 5245 54 436
                  </p>
                </div>
                <div
                  id="exportOptions"
                  className="flex items-center justify-center gap-2 m-2"
                >
                  <select
                    id="fileFormatSelect"
                    className="rounded-md border mt-2 p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
                  >
                    <option value="excel">Excel</option>
                    <option value="word">Word</option>
                    <option value="csv">CSV</option>
                  </select>

                  <button
                    onClick={handleButtonClick}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-2 mt-2 rounded-md transition duration-300 ease-in-out"
                  >
                    Download
                  </button>
                </div>
              </div>

</div>
</div>
</div>   
    </div>
</>
  );
};

export default CivilMetmessage;