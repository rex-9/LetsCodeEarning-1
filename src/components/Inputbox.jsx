import React from 'react'
import star from '../assets/img/star.png'

const Inputbox = ({ label, type, value }) => {
  return (
    <div className='flex flex-col'>
          <div className=' flex'>
        <h3 className=' text-body-text-1 font-normal leading-8'>{label}</h3>
               <img src={star} alt="star"  className='w-auto h-3 my-2 ms-2'/>
           </div>
          <input
            type={type}
            value={value}
            className='border rounded-lg w-80 h-12 ps-2'    
      />
    </div>
  )
}
export default Inputbox
