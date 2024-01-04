/* eslint-disable react/prop-types */

import { useState } from "react";

const Checkbox = ({ name, value, label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="flex cursor-pointer items-center  space-x-2">
      <input
        type="checkbox"
        name={name}
        checked={isChecked}
        className="hidden"
        onChange={handleCheckboxChange}
        value={value}
      />
      <div
        className={`border-gray-300 h-5 w-5 rounded-full  border ${
          isChecked ? "bg-blue-500" : ""
        }`}
      >
        {isChecked && (
          <span className="text-white text-xs flex h-full w-full items-center justify-center">
            &#10003;
          </span>
        )}
      </div>
      <span className="checklabel text-body-text-1 ps-1 font-NunitoSans">
        {label}
      </span>
    </label>
  );
};

export default Checkbox;
