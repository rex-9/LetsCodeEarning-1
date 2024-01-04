/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

function ServiceTextOverlay({ img, href, heading }) {
  const [title, url] = href;
  return (
    <div className="relative grid h-[28rem] md:h-96">
      <div className="-z-1 absolute inset-0 col-span-full row-span-full h-full w-full bg-neutral-900 opacity-25"></div>
      <img
        src={img}
        alt=""
        className="-z-2 col-span-full row-span-full h-[28rem] w-full object-cover md:h-96"
      />
      <div className="-z-0 col-span-full row-span-full flex flex-col px-6 pb-16 pt-8 font-NunitoSans md:px-12 md:pb-12 md:pt-6">
        <ul className="-z-0 flex gap-3">
          {[
            ["Home", "/"],
            ["Services", "/services"],
            [title, url],
          ].map(([title, url]) => (
            <NavLink
              end
              key={title}
              to={url}
              className={({ isActive }) =>
                [
                  "font-bold capitalize underline-offset-2 hover:underline md:text-medium",
                  isActive ? "text-secondary-200" : "text-neutral-100",
                ].join(" ")
              }
            >
              {title}
            </NavLink>
          ))}
        </ul>
        <h1 className="mt-auto block self-center font-bold uppercase text-neutral-100 md:text-header-6">
          {heading}
        </h1>
      </div>
    </div>
  );
}

export default ServiceTextOverlay;
