import React from "react";

const Calibration: React.FC = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-between text-black p-2 text-center">
      {/* Calibration Section */}
      <div className="p-4 rounded-md">
        
        <div className="grid grid-cols-2 gap-4">
  {/* First Row: Radiosonde and Calibrator */}
  <div className=" mb-4 col-span-1 ">
    <label className="mb-1 mr-5 font-semibold text-[1rem]">RADIOSONDE</label>
    <select className="device-dropdown border rounded-[1.5rem] p-3">
      <option>Select</option>
    </select>
    <button className="rounded-md m-4 bg-black px-4 py-2 font-semibold text-[1rem] text-white shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1">CHECK</button>
  </div>

  <div className="mb-4 col-span-1">
    <label className="mr-5 mb-1 font-semibold text-[1rem]">CALIBRATOR</label>
    <select className="device-dropdown border rounded-[1.5rem] p-3">
      <option>Select</option>
    </select>
    <button className="rounded-md m-4 bg-black px-4 py-2 font-semibold text-[1rem] text-white shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1">CHECK</button>
  </div>
  </div>
  {/* Start new row for Sonde, Calibrator, and Offset */}
  <div className="grid grid-cols-5 gap-4 m-4">
    <div>
      <label className="block m-2 font-semibold text-[1rem]"> SONDE</label>
      
    </div>
  
          <div>
            <label className="block m-2 font-semibold text-[1rem] ">SONDE</label>
          </div>
          <div>
            <label className="block m-2 font-semibold text-[1rem]">CALIBRATOR</label>
          </div>
          <div>
            <label className="block m-2 font-semibold text-[1rem]">OFFSET</label>
          </div>
          <div>
            <label className="block m-2 font-semibold text-[1rem]">MANUAL OFFSET</label>
          </div>

          <div>
          <label className="block m-2 font-semibold text-[1rem]">HUMIDITY</label>
         </div>
         <div>
         <input
              type="text"
              className="w-full p-2 rounded-md border text-black m-1"
            />
         </div>
         <div>
         <input
              type="text"
              className="w-full p-2 rounded-md border text-black m-1"
            />
         </div>
         <div>
         <input
              type="text"
              className="w-full p-2 rounded-md border text-black m-1"
            />
         </div>
         <div>
         <input
              type="text"
              className="w-full p-2 rounded-md border text-black m-1"
            />
         </div>
         <div>
          <label className="block m-2 font-semibold text-[1rem]">TEMPERATURE</label>
         </div>
         <div>
         <input
              type="text"
              className="w-full p-2 rounded-md border text-black m-1"
            />
         </div>
         <div>
         <input
              type="text"
              className="w-full p-2 rounded-md border text-black m-1"
            />
         </div>
         <div>
         <input
              type="text"
              className="w-full p-2 rounded-md border text-black m-1"
            />
         </div>
         <div>
         <input
              type="text"
              className="w-full p-2 rounded-md border text-black m-1"
            />
         </div>
         <div>
          <label className="block m-2 font-semibold text-[1rem]">PRESSURE</label>
         </div>
         <div>
         <input
              type="text"
              className="w-full p-2 rounded-md border text-black m-1"
            />
         </div>
         <div>
         <input
              type="text"
              className="w-full p-2 rounded-md border text-black m-1"
            />
         </div>
         <div>
         <input
              type="text"
              className="w-full p-2 rounded-md border text-black m-1"
            />
         </div>
         <div>
         <input
              type="text"
              className="w-full p-2 rounded-md border text-black -1"
            />
         </div>
         <div>
          <label className="block m-4 font-semibold text-[1rem]">TEMPERATURE</label>
         </div>
        
        
          {/* Buttons */}
          <button className="rounded-md m-4 bg-black px-4 py-2 font-semibold text-[1rem] text-white shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1">GET SONDE</button>
          <button className="rounded-md m-4 bg-black px-4 py-2 font-semibold text-[1rem] text-white shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1">GET CALIBRATION</button>
          <button className="rounded-md m-4 bg-black px-4 py-2 font-semibold text-[1rem] text-white shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1">GET OFFSET</button>
          <button className="rounded-md m-4 bg-black px-4 py-2 font-semibold text-[1rem] text-white shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1">CALIBRATE</button>
         
          </div>
          {/* Latitude, Longitude, Altitude */}
          <div className="grid grid-cols-6 gap-4 m-4">
          <div>
          <label className="block m-5 font-semibold text-[1rem]">LATITUDE</label>
         </div>
         <div>
         <input
              type="text"
              className="w-full p-2 rounded-md border text-black m-4"
            />
         </div>
         <div>
          <label className="block m-5 font-semibold text-[1rem]">LONGITUDE</label>
         </div>
         <div>
         <input
              type="text"
              className="w-full p-2 rounded-md border text-black m-4"
            />
         </div>
         <div>
          <label className="block m-5 font-semibold text-[1rem]">ALTITUDE</label>
         </div>
         <div>
         <input
              type="text"
              className="w-full p-2 rounded-md border text-black m-4"
            />
         </div>
       </div>
        <br />
        <button className="rounded-md m-1 bg-black px-4 py-2 font-semibold text-[1rem]
         text-white shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 
         focus:ring-blue-500 focus:ring-offset-1">SAVE</button>
      </div>

      {/* GPS Lock and Gas Filling */}
      <div className="grid grid-cols-2 mt-4 gap-4">
        <div className="p-4 rounded-md text-center">
          <h2 className="m-2 font-semibold text-[1rem]">GPS LOCK IN STATUS</h2>
          <div className="justify-between">
            <button className="rounded-md m-2 bg-black px-4 py-2 font-semibold text-[1rem] text-white shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1">YES</button>
            <button className="rounded-md m-2 bg-black px-4 py-2 font-semibold text-[1rem] text-white shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1">NO</button>
          </div>
        </div>
        <div className="p-4 rounded-md text-center">
          <h2 className="font-semibold text-[1rem] m-2">GAS FILLING STATION</h2>
          <div className="justify-between">
            <button className="rounded-md m-2 bg-black px-4 py-2 font-semibold text-[1rem] text-white shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1">YES</button>
            <button className="rounded-md m-2 bg-black px-4 py-2 font-semibold text-[1rem] text-white shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1">NO</button>
          </div>
        </div>
      </div>
<div>
    {/* Proceed Button */}
     <div > 
        <button className="rounded-md m-4 bg-black px-4 py-2 font-semibold text-[1rem] text-white shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1">
        PROCEED
      </button>
      </div>
</div>
      
      </div>
      
  );
};

export default Calibration;
