// Checkbox.js
import React, { useState } from 'react';

const Checkbox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="flex items-center space-x-2  cursor-pointer">
      <input
        type="checkbox"
        className="hidden"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <div className={`w-5 h-5 border rounded-full  border-gray-300 ${isChecked ? 'bg-blue-500' : ''}`}>
        {isChecked && <span className="text-white text-xs flex justify-center items-center w-full h-full">&#10003;</span>}
      </div>
      <span className="checklabel text-body-text-1 ps-1 font-NunitoSans">{label}</span>
    </label>
  );
};

export default Checkbox;
