/* eslint-disable react/prop-types */
import { breakAfterSpaces } from "../libs/utils";

const Banner = ({ heading, subheading, img, alt }) => {
  return (
    <div className="mt-28 md:mt-32 grid h-16 round grid-cols-2 font-NunitoSans md:h-44">
      <div className="bg-secondary-600">
        <div className="flex flex-col items-start gap-1 py-[0.5625rem] pl-[1.5rem] pr-[5.6875rem] md:py-[1.25rem] md:pl-[7.4rem] md:pr-[26rem]">
          <p className="text-body-text-2 capitalize text-primary-600 md:text-header-3">
            {heading}
          </p>
          <p className="whitespace-pre -t text-body-text-2 text-neutral-100 md:text-header-4">
            {breakAfterSpaces(subheading, 2)}
          </p>
        </div>
      </div>
      <img
        src={img}
        alt={alt}
        className="h-16 md:h-44 w-full object-cover object-mobile-banner md:object-desktop-banner"
      />
    </div>
  );
};

export default Banner;
