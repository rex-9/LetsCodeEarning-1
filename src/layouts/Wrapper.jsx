/* eslint-disable react/prop-types */

import { twMerge } from "tailwind-merge";

function Wrapper({ children, className = null }) {
  return <main className={twMerge("pt-wrapper", className)}>{children}</main>;
}

export default Wrapper;
