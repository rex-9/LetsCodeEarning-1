/* eslint-disable react/prop-types */
import { StarIcon } from "../../assets";

const Inputbox = ({ label, type, value }) => {
  return (
    <div className='flex flex-col'>
      <div className=" flex">
        <label>{label}</label>
        <span className="ms-2 mt-2"><StarIcon /></span>
      </div>
      <input
        type={type}
        value={value}
        className=' border rounded-lg w-80 h-12 ps-2'
      />
    </div>
  );
};
export default Inputbox;
