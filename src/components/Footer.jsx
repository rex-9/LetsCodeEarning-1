import React from 'react'
import { Brand, Email, Call, Location, TiktokIcon, FacebookIcon, WhatsappIcon,Line } from '../assets'
const Footer = () => {
    return (
      <div className=' bg-secondary-600 h-full '>
      <div className='flex gap-4 content-center items-center'>
          <div className='ps-32 ms-8'>
              <img src={Brand} alt="" className=' w-16 h-16' />
              <footer className=' text-neutral-100 text-medium font-NunitoSans font-normal my-6 me-32 '>HPAE administrative support entry and all health care service administrative support entry and all health care service.</footer>
          </div>
          <div className=' w-1/3 ms-5'>
              <h1 className=' text-header-2 font-NunitoSans font-semibold text-neutral-100 pt-10'>Our Services</h1>
              <ul className='my-5'>
                  <li className=' text-neutral-100 font-NunitoSans pt-2'><a href="">Operating Unit</a></li>
                  <li className=' text-neutral-100 font-NunitoSans'><a href="">Emergencies & Resuscitations</a></li>
                  <li className=' text-neutral-100 font-NunitoSans'><a href="">Hospitalization</a></li>
                  <li className=' text-neutral-100 font-NunitoSans'><a href="">Laboratory</a></li>
                  <li  className=' text-neutral-100 font-NunitoSans'><a href="">IVF Centre</a></li>
                  <li  className=' text-neutral-100 font-NunitoSans'><a href="">Imagerie</a></li>
              </ul>
          </div>
          <div className=' w-1/3 p-10'>
              <h1 className=' text-header-2 font-NunitoSans font-semibold text-neutral-100'>Quick Links</h1>
              <ul className='my-6'>
                  <li className=' text-neutral-100 font-NunitoSans'><a href="">Blog</a></li>
                  <li className=' text-neutral-100 font-NunitoSans'><a href="">About Us</a></li>
                  <li className=' text-neutral-100 font-NunitoSans'><a href="">Privacy Policy</a></li>
                  <li className=' text-neutral-100 font-NunitoSans'><a href="">Terms & Condition</a></li>
              </ul>
          </div>
           <div className=' w-1/3 me-20'>
              <h1 className=' text-header-2 font-NunitoSans font-semibold text-neutral-100 '>Contact</h1>
              <ul className='my-6'>
                        <li className=' text-neutral-100 font-NunitoSans '><a href="" className='flex'><span className='pe-2'>{<Location/>}</span> BP 6176 Lome-TOGO</a></li>
                        <li className=' text-neutral-100 font-NunitoSans pt-2'><a href="" className='flex'> <span className='pe-2'>{<Call></Call>}</span>+228 22 22 63</a></li>
                        <li className=' text-neutral-100 font-NunitoSans pt-2'><a href="" className='flex'> <span className='pe-2'>{ <Email></Email>}</span>Customerservice@cae.com</a></li>
                    </ul>
                    <div className=' flex gap-3'>
                        <WhatsappIcon></WhatsappIcon>
                        <FacebookIcon></FacebookIcon>
                        <TiktokIcon></TiktokIcon>
                    </div>
          </div>
            </div>
            <div className='flex'>
          <div className='me-auto ms-auto'><Line></Line></div>
           </div>
            <footer className=' font-NunitoSans footer text-body-text-1q ps-32 py-3 ms-8 pb-3'>CAE Copyright 2023. All Rights Reserved By CAE</footer>
</div>
    
  )
}

export default Footer
