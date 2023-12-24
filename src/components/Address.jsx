// import React from 'react'
import { FacebookIcon,TiktokIconBlack, WhatsappIcon } from '../assets'
import map from '../assets/img/map.png'
import sms from '../assets/img/sms.png'
import call from '../assets/img/call.png'
import location from '../assets/img/location.png'


const Address = () => {
  return (
    <div className='grid grid-flow-col mb-3'>
      <div className='bg-white rounded-lg shadow-lg p-4 w-[13rem] md:w-auto'>
        <div className='w-[8.375rem] h-[15rem] md:w-auto md:h:auto'>
       <h1 className='md:ms-40  mt-10 font-NunitoSans text-medium md:text-header-2 text-secondary-700 font-bold'>HOPITAL PRIVE AUTE D’ELIE</h1>
      <div className='md:ms-40'>
       <div className='flex md:pt-6 pt-4'>
          <img src={location} alt="" className='w-5 h-5'/>
          <span className='ps-1'>BP 6176 Lome-TOGO</span>
        </div>
         <div className='flex md:pt-6 pt-4'>
          <img src={call} alt="" className='w-5 h-5'/>
          <span className='ps-1'>+228 22 22 63</span>
        </div>
         <div className='flex md:pt-6 pt-4'>
          <img src={sms} alt="" className='w-5 h-5'/>
          <span className='ps-1 hidden md:block'>Customerservice@cae.com</span>
          <span className='ps-1 md:hidden'>Customerservice <br />@cae.com</span>
        </div>
          <div className=' flex gap-3 md:pt-6 pt-4 pb-10'>
              <WhatsappIcon></WhatsappIcon>
              <FacebookIcon></FacebookIcon>
            <TiktokIconBlack></TiktokIconBlack>
        </div>
      </div>
     </div>
       </div>
      <div className='pt-4'>
        <div>
         <img src={map} alt="" className=' md:w-[41.9375rem] md:h-80 w-[14.75rem] h-[18.5rem]' />
       </div>
      </div>
    </div>

  )
}

export default Address
