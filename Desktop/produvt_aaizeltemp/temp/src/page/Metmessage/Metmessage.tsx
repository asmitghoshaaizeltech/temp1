import React, { FC, useState, useRef } from "react";
import * as XLSX from "xlsx";

const Metmessage: FC = () => {
  const [filters, setFilters] = useState({
    from_date: "",
    to_date: "",
    device_id: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
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
<div className="border-2 border-gray-200 rounded-md shadow-md p-4 mt-4">
<div>
 { /* Heading */}
<nav>
    <label className="font-semibold text-[1rem] p-1">Cloud Table (only for MET TA)</label>
    </nav>

  {/* Radio Buttons */}
  <div className="space-y-4 p-4">
    {/* First Radio Button */}
    <label className="flex items-center space-x-3">
      <input
        type="radio"
        name="options"
        value="option1"
        className="form-radio font-semibold text-[1rem] text-blue-500"
      />
      <span>000 Sky obscured by fog</span>
    </label>

    {/* Second Radio Button with Dropdown */}
    <label className="flex items-center space-x-3">
      <input
        type="radio"
        name="options"
        value="option2"
        className="form-radio font-semibold text-[1rem] text-blue-500"
      />
      <span>001-160 Visual estimate of base of lowest cloud in tens of meters if below 1600m</span>
      <select className="device-dropdown rounded-md border p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300">
        <option value="">Select an Option</option>
        <option value="dropdown1">Dropdown 1</option>
        <option value="dropdown2">Dropdown 2</option>
        <option value="dropdown3">Dropdown 3</option>
      </select>
    </label>

    {/* Third Radio Button */}
    <label className="flex items-center space-x-3">
      <input
        type="radio"
        name="options"
        value="option3"
        className="form-radio font-semibold text-[1rem] text-blue-500"
      />
      <span>166 Visual estimate of base of lowest cloud in tens of meters if above 1600m</span>
    </label>
    {/* Forth Radio Button */}
    <label className="flex items-center space-x-3">
      <input
        type="radio"
        name="options"
        value="option3"
        className="form-radio font-semibold text-[1rem] text-blue-500"
      />
      <span>199 Clear sky</span>
    </label>
  </div>
</div>
</div>
<div className="border-2 border-gray-200 rounded-md shadow-md p-4 mt-4">
<nav>
    <label className="font-semibold text-[1rem] p-1"> (Only for MET TA)</label>
    </nav>
  <div  className="p-2" >
  <label className="text-[1rem]"> Enter Mean refractive index at the surface in "N" units:</label>
         <input type="text" className="rounded-md border ml-2 p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"/>
  </div>
</div>
{/* Grid for Military & Civil MET Message */}
<div className="flex gap-4 justify-center text-center ">
{/* Military Met Message */}
<div className=" border-2 border-gray-200 rounded-md shadow-md p-4 mt-4">
<nav>
    <label className="font-semibold text-[1rem] p-1">MILITARY MESSAGE - STANAG</label>
</nav>
            <div className="grid grid-cols-3 gap-4 text-center p-2">
              <div className="col-span-1 border-2 border-gray-200 rounded-md shadow-md p-4 mt-4">
                <div>
                  <label className="block m-5 font-semibold text-[1rem]">
                    MET CM
                  </label>
                </div>
                <div>
                  <p
                    id="MET CM"
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
                    MET FM
                  </label>
                </div>
                <div>
                  <p
                    id="MET FM"
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
                    MET B2
                  </label>
                </div>
                <div>
                  <p
                    id="MET B2"
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
                    /B3
                  </label>
                </div>
                <div>
                  <p
                    id="/B3"
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
                    MET SR
                  </label>
                </div>
                <div>
                  <p
                    id="MET SR"
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
                    MET TA
                  </label>
                </div>
                <div>
                  <p
                    id="MET TA"
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

export default Metmessage;
