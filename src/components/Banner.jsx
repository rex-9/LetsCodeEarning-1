/* eslint-disable react/prop-types */
import { breakAfterSpaces } from "../libs/utils";

const Banner = ({ heading, subheading, img, alt }) => {
  return (
    <div className="grid grid-cols-2 font-NunitoSans ">
      <div className="bg-secondary-600">
        <div className="flex flex-col items-start gap-1 py-8  pl-6 pr-20 md:pl-28 md:pr-96">
          <p className="text-body-text-2 capitalize text-primary-600 md:text-header-3">
            {heading}
          </p>
          <p className="text-body-text-2 whitespace-pre text-neutral-100 md:text-header-4">
            {breakAfterSpaces(subheading, 2)}
          </p>
        </div>
      </div>
      <img
        src={img}
        alt={alt}
        className="h-16 md:h-44 w-full min-h-full object-cover object-mobile-banner  md:object-desktop-banner"
      />
    </div>
  );
};

export default Banner;
