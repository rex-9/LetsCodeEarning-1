// import React from 'react'
import { FacebookIcon, TiktokIcon, WhatsappIcon, LocationIcon, PhoneIcon, EmailIcon, ContactMap, ContactHero } from '../assets'
import Card from '../components/Card'
const Address = () => {
  return (
    <div className='grid grid-flow-col mb-3'>
      <div className='bg-white rounded-lg shadow-lg ps-2 md:w-auto'>
        <div className='w-full md:w-auto md:h:auto'>
       <h1 className='lg:ms-40 ms-4 pe-3  mt-10 font-NunitoSans text-medium md:text-header-2 text-secondary-700 font-bold'>HOPITAL PRIVE AUTE D’ELIE</h1>
      <div className='lg:ms-40 ms-4'>
            <div className='flex md:pt-6 pt-4'>
              <LocationIcon/>
          <span className='ps-1'>BP 6176 Lome-TOGO</span>
        </div>
            <div className='flex md:pt-6 pt-4'>
              <PhoneIcon stroke='#000'/>
          <span className='ps-1'>+228 22 22 63</span>
        </div>
         <div className='flex md:pt-6 pt-4'>
          <EmailIcon fill='#fff'/>
          <span className='ps-1 hidden md:block'>Customerservice@cae.com</span>
          <span className='ps-1 md:hidden'>Customerservice <br />@cae.com</span>
        </div>
          <div className=' flex gap-3 md:pt-6 pt-4 pb-10'>
              <WhatsappIcon></WhatsappIcon>
              <FacebookIcon></FacebookIcon>
              <TiktokIcon fill='#000'></TiktokIcon>
        </div>
      </div>
     </div>
       </div>
      <div className='pt-4'>
        <div className=' md:w-auto'>
         <img src={ContactMap} alt="" className=' md:w-[41.9375rem] md:h-80  h-[18.5rem]' />
       </div>
      </div>
    </div>

  )
}

export default Address;
