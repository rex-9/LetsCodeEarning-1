import React from 'react';

const GenderDropdown = ({ selectedGender, onGenderChange }) => {
    
  return (
    <div className='flex flex-col'>
      <label>Gender</label>
      <select
        value={selectedGender}
        onChange={(e) => onGenderChange(e.target.value)}
        className='border rounded-lg w-80 h-12 ps-2'
      >
        <option value='male'>Male</option>
        <option value='female'>Female</option>
        <option value='other'>Other</option>
      </select>
    </div>
  );
};

const DateDropdown = ({ selectedDate, onDateChange }) => {
  return (
    <div className='flex flex-col'>
      <label>Date</label>
      <input
        type='date'
        value={selectedDate}
        onChange={(e) => onDateChange(e.target.value)}
        className='border rounded-lg w-80 h-12 ps-2'
      />
    </div>
  );
};

export { GenderDropdown, DateDropdown };
