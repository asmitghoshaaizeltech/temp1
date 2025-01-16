import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import React, { FC } from 'react'
import DataTable from '../../component/analyticspage/DataTable'
import Altitude from '../../component/analyticspage/Altitude'
import SkewT from '../../component/analyticspage/SkewT'
import BallonTrack from '../../component/analyticspage/BalloonTrack'
import TephigramGraph from '../../component/analyticspage/Tephigram'
import CCL from '../../component/analyticspage/CCL'
import ProfileData from '../../component/analyticspage/ProfileData'
import LFC from '../../component/analyticspage/LFC'

const AnalyticDashboard : FC = () => {
  return (
    <div className='w-full space-y-2'>
        {/* Date input ribbon */}
        <div className="bg-white pt-4 px-6 my-2">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2">
                        <label htmlFor="fromDate" className="mr-2 text-sm font-medium text-gray-700">From:</label>
                        <input
                        type="date"
                        id="fromDate"
                        className="rounded-md border  p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300 "
                        />
                    </div>
                    <div className="flex items-center">
                        <label htmlFor="toDate" className="mr-2 text-sm font-medium text-gray-700">To:</label>
                        <input
                        type="date"
                        id="toDate"
                        className="rounded-md border  p-1.5 outline-none shadow-sm focus:ring-2 focus:ring-blue-500  border-gray-300 "
                        />
                    </div>
                </div>
                <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out"
                >
                Fetch Data
                </button>
                
        </div>
        <hr className='mt-4 max-w-7xl mx-auto' />
        </div>
        
        <div className="w-full max-w-screen mx-auto px-4 py-10 bg-white rounded-lg shadow-md">
            <TabGroup className={'w-full max-w-7xl mx-auto'}>
                <TabList className="flex space-x-1 rounded-xl bg-blue-900/20 p-1.5">
                    <Tab className="analyticTab">Ascent  Summary</Tab>
                    <Tab className="analyticTab">Profile Data diagram</Tab>
                    <Tab className="analyticTab">Altitude diagram</Tab>
                    <Tab className="analyticTab">Ballon Track</Tab>
                    <Tab className="analyticTab">Skw-t diagram</Tab>
                    <Tab className="analyticTab">Tephigram</Tab>
                    <Tab className="analyticTab">LFC</Tab>
                    <Tab className="analyticTab">CCL</Tab>
                </TabList>
                <TabPanels className="mt-2">
                    <TabPanel className="rounded-xl bg-white  py-5"> {<DataTable/>} </TabPanel>
                    <TabPanel className={"rounded-xl bg-white px-3 py-5"}>{<ProfileData/>}</TabPanel>
                    <TabPanel className={"rounded-xl bg-white px-3 py-5"}>{<Altitude/>}</TabPanel>
                    <TabPanel className={"rounded-xl bg-white px-3 py-5"}>{<BallonTrack/>}</TabPanel>
                    <TabPanel className={"rounded-xl bg-white px-3 py-5"}>{<SkewT/>} </TabPanel>
                    <TabPanel className={"rounded-xl bg-white px-3 py-5"}>{<TephigramGraph/>}</TabPanel>
                    <TabPanel className={"rounded-xl bg-white px-3 py-5"}>{<LFC/>}</TabPanel>
                    <TabPanel className={"rounded-xl bg-white px-3 py-5"}>{<CCL/>}</TabPanel>
                    
                </TabPanels>
            </TabGroup>
        </div>
    </div>
  )
}

export default AnalyticDashboard