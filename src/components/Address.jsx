import React from 'react'
import location from '../assets/svg/location.svg'
import call from '../assets/svg/call.svg'
import sms from '../assets/img/sms.png'
import map from '../assets/img/map.png'


const Address = () => {
  return (
    <div className='flex flex-row gap-1'>
      <div className=' p-3'>
        <div className='ms-3'>
        <h1 className=' font-NunitoSans text-secondary-700 font-bold text-medium'>HOPITAL PRIVE AUTE D’ELIE</h1>
        </div>
        <div className=' flex ms-3 py-3'>
        <div> <img src={location} alt="location" /></div>
        <span className=' font-NunitoSans text-body-text-1 ms-2 py-2'>BP 6176 Lome-TOGO</span>
        </div>
        <div className=' flex  ms-3 py-3'>
        <div> <img src={call} alt="call" /></div>
        <span className=' font-NunitoSans text-body-text-1 ms-2 py-2'>+228 22 22 63</span>
        </div>
         <div className=' flex  ms-3 py-3'>
        <div> <img src={sms} alt="sms" /></div>
        <span className=' font-NunitoSans text-body-text-1 ms-2 py-2'>Customerservice@cae.com</span>
        </div>
      </div>
      <div>
       <div> 
        <img src={map}alt="" className=' h-60' />
      </div>
     </div>
    </div>
  )
}

export default Address
