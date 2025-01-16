import React, { FC } from 'react'
import { useNavigate } from 'react-router'

enum RecordType {
    START = 'start',
    SKIP = 'skip'
}

const NavigationPage: FC = () => {
    const router = useNavigate(); 

    const buttonClickHandler = (type : RecordType) => {
        if(type === RecordType.START) {
            router("/bite")
        } else {
            router("/")
        }   
    }

  return (
    
      <div className='flex h-screen  justify-center items-center'>
        {/* Dialog box */}
        <div className='bg-white rounded-lg shadow-xl border border-gray-300 p-8 max-w-md w-full'>
          
          <div className='space-y-4 '>
            <button 
              className='w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-md transition duration-300 ease-in-out'
              onClick={() => buttonClickHandler(RecordType.START)}
            >
              Start Recording
            </button>
            <button 
              className='w-full bg-green-500 hover:bg-green-600 text-gray-800 font-semibold py-3 px-4 rounded-md transition duration-300 ease-in-out'
                onClick={() => buttonClickHandler(RecordType.SKIP)}
            >
              Skip 
            </button>
          </div>
        </div>
      </div>
    
  )
}

export default NavigationPage