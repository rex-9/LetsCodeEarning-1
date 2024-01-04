/* eslint-disable react/prop-types */
import { useState } from "react";

const GenderDropdown = ({ name }) => {
  const [selectedGender, setSelectedGender] = useState("");
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>Gender</label>
      <select
        onChange={(e) => setSelectedGender(e.target.value)}
        className="h-12 w-80 rounded-lg border ps-2"
        required
      >
        <option value="" className="pb-3">Please Choose an option</option>
        <hr />
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Prefer not to say">Prefer not to say</option>
      </select>
      <input type="hidden" name={name} value={selectedGender} />
    </div>
  );
};

const DateDropdown = ({ name }) => {
  const currentDate = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(currentDate);
  console.log(selectedDate);
  return (
    <div className="flex flex-col">
      <label>Date</label>
      <input
        type="date"
        onChange={(e) => setSelectedDate(e.target.value)}
        className="h-12 w-80 rounded-lg border ps-2"
        value={selectedDate}
      />
      <input type="hidden" name={name} value={selectedDate} />
    </div>
  );
};

export { GenderDropdown, DateDropdown };
