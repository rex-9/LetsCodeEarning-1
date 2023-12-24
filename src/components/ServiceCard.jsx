/* eslint-disable react/prop-types */
import { Arrow } from "../assets";
const ServiceCard = ({ img, header, paragraph }) => {
  return (
    <div className="max-w-[327px] rounded-lg px-4 py-5 md:max-w-[394px] md:pb-6 md:pl-6 md:pr-[4.125rem] md:pt-[21px]">
      <img
        src={img}
        alt=""
        className="aspect-square h-12 w-12 rounded-full object-cover"
      />
      <div className="pb-8 pt-4 md:pb-9 md:pt-6">
        <p className="text-body-text-1 font-bold text-secondary-700 md:text-header-1">
          {header}
        </p>
        <p className="pt-2 text-body-text-1 font-semibold text-secondary-400 md:text-medium">
          {paragraph}
        </p>
      </div>
      <a
        href=""
        className="text-body-text-1 font-bold text-primary-600 md:text-medium md:font-semibold "
      >
        Read More <img src={Arrow} alt="" className="inline-block" />
      </a>
    </div>
  );
};

export default ServiceCard;
