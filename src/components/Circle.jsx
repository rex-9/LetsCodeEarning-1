/* eslint-disable react/prop-types */

import { twMerge } from "tailwind-merge";
import { CheckBoxFilledIcon } from "../assets";
const Circle = ({ name, textColor }) => {
  return (
    <div>
      <li className="flex items-center pt-6 ">
        <CheckBoxFilledIcon className="h-6 w-6" />
        <p className={twMerge("text-body-1 ps-3 md:text-header-2", textColor)}>{name}</p>
      </li>
    </div>
  );
};

export default Circle;
