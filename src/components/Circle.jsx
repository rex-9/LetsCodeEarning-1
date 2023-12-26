/* eslint-disable react/prop-types */
import { Check } from "../assets";
const Circle = ({ name }) => {
  return (
    <div>
      <li className="flex items-center pt-6 ">
        <img src={Check} alt="" className="max-w-[20px]" />
        <p className="text-body-text-1 ps-3 md:text-header-2">{name}</p>
      </li>
    </div>
  );
};

export default Circle;
