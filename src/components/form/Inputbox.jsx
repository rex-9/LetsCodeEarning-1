/* eslint-disable react/prop-types */
import { StarIcon } from "../../assets";

const Inputbox = ({ label, type, value, name }) => {
  return (
    <div className="flex flex-col">
      <div className=" flex">
        <label>{label}</label>
        <span className="ms-2 mt-2">
          <StarIcon />
        </span>
      </div>
      <input 
        type={type}
        value={value}
        name={name}
        className=" h-12 w-80 rounded-lg border ps-2"
        required
      />
    </div>
  );
};
export default Inputbox;
