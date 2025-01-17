import React from "react";

const Calibration: React.FC = () => {
  return (
    <div className="text-left max-w-7xl mx-auto">
      {/* Calibration Section */}
      <div className="mt-4 rounded-md">
        
        <div className="grid grid-cols-2 gap-4 ">
  {/* First Row: Radiosonde and Calibrator */}
  <div className=" mb-4 col-span-1 flex justify-center items-center border-2 border-gray-200 rounded-md shadow-md p-4 mt-4">
    <label className="mb-1 mr-5 font-semibold text-[1rem]">COM PORT</label>
    <select className="rounded-md border  p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300">
      <option>Select</option>
    </select>
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out m-2">CHECK RADIOSONDE CONNECTIVITY</button>
  </div>

  <div className="mb-4 col-span-1 flex justify-center items-center border-2 border-gray-200 rounded-md shadow-md p-4 mt-4">
    <label className="mr-5 mb-1 font-semibold text-[1rem]">COM PORT</label>
    <select className="rounded-md border  p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300">
      <option>Select</option>
    </select>
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out m-2">CHECK CALIBRATOR CONNECTIVITY</button>
  </div>
  </div>
  {/* Start new row for Sonde, Calibrator, and Offset */}
  <div className="grid grid-cols-5 gap-4 ">
    <div></div>
  
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
          <label className="block mt-2 font-semibold text-[1rem]">HUMIDITY</label>
         </div>
         <div>
         <input
              type="text"
              className="rounded-md border w-full  p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
            />
         </div>
         <div>
         <input
              type="text"
              className="rounded-md border w-full  p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
            />
         </div>
         <div>
         <input
              type="text"
              className="rounded-md border w-full  p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
            />
         </div>
         <div>
         <input
              type="text"
              className="rounded-md border w-full p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
            />
         </div>
         <div>
          <label className="block mt-2 font-semibold text-[1rem]">TEMPERATURE</label>
         </div>
         <div>
         <input
              type="text"
              className="rounded-md border w-full p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
            />
         </div>
         <div>
         <input
              type="text"
              className="rounded-md border w-full p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
            />
         </div>
         <div>
         <input
              type="text"
              className="rounded-md border w-full p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
            />
         </div>
         <div>
         <input
              type="text"
              className="rounded-md border w-full p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
            />
         </div>
         <div>
          <label className="block mt-2 font-semibold text-[1rem]">PRESSURE</label>
         </div>
         <div>
         <input
              type="text"
              className="rounded-md border w-full p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
            />
         </div>
         <div>
         <input
              type="text"
              className="rounded-md border w-full p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
            />
         </div>
         <div>
         <input
              type="text"
              className="rounded-md border w-full p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
            />
         </div>
         <div>
         <input
              type="text"
              className="rounded-md border w-full p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
            />
         </div>
         
        
        
          {/* Buttons */}
          <div></div>
          <div><button className="bg-blue-500 w-full hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out ">GET SONDE</button></div>
          <div><button className="bg-blue-500 w-full hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out ">GET CALIBRATION</button></div>
          <div><button className="bg-blue-500 w-full hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out ">GET OFFSET</button></div>
          <div><button className="bg-blue-500 w-full hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out ">CALIBRATE</button></div>
         
          </div>
          {/* Latitude, Longitude, Altitude */}
          <div className="grid grid-cols-3 gap-6 mt-10 text-center">
          <div>
          <label className="mt-2 mr-4 font-semibold text-[1rem]">LATITUDE</label>
         <input
              type="text"
              className="rounded-md border  p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
            />
         </div>
         <div>
          <label className="mt-2 mr-4 font-semibold text-[1rem]">LONGITUDE</label>
         <input
              type="text"
              className="rounded-md border p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
            />
         </div>
         <div>
          <label className="mt-2 mr-4 font-semibold text-[1rem]">ALTITUDE</label>
         <input
              type="text"
              className="rounded-md border p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300"
            />
         </div>
       </div>
       <br />
        <div className="flex justify-center items-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out m-2">SAVE</button>
        </div>
      </div>

      {/* GPS Lock and Gas Filling */}
      <div className="grid grid-cols-2 mt-4 gap-4">
        <div className="p-4 rounded-md text-center">
          <h2 className="m-2 font-semibold text-[1rem]">GPS LOCK IN STATUS</h2>
          <div className="justify-between">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out m-2">YES</button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out m-2">NO</button>
          </div>
        </div>
        <div className="p-4 rounded-md text-center">
          <h2 className="font-semibold text-[1rem] m-2">GAS FILLING STATION</h2>
          <div className="justify-between">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out m-2">YES</button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out m-2">NO</button>
          </div>
        </div>
      </div>
<div>
    {/* Proceed Button */}
     <div className="flex justify-center items-center"> 
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out m-2">
        PROCEED
      </button>
      </div>
</div>
      
      </div>
      
  );
};

export default Calibration;
