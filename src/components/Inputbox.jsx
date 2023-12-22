import React from 'react'

const Inputbox = (label, type, value) => {
  return (
    <div className='flex flex-col'>
          <label>{label}</label>
          <input
            type={type}
            value={value}
            className=' border rounded-lg w-80 h-12 ps-2'
          />
    </div>
  )
}
export default Inputbox
