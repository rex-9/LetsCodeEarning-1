/* eslint-disable react/prop-types */
import { Pseudo } from "../assets";
const ServiceList2 = ({
  firstHeader,
  firstParagraph,
  secHeader,
  secParagraph,
  listHeader,
  listone,
  listtwo,
  listthree,
}) => {
  return (
    <div>
      <div className="mt-6 md:mt-16">
        <p className="text-medium font-bold text-secondary-600 md:text-header-3">
          {firstHeader}
        </p>
        <p className="text-body-text-1 pt-3 md:pt-8 md:text-header-1">
          {firstParagraph}
        </p>
      </div>
      <div className="mt-6 md:mt-12">
        <p className="text-medium font-bold text-secondary-600 md:text-header-2">
          {secHeader}
        </p>
        <p className="text-body-text-1 pt-4 md:pt-6 md:text-header-1">
          {secParagraph}
        </p>
      </div>
      <div className="text-body-text-1 mt-4 align-middle md:mt-11 md:text-medium">
        <p>{listHeader}</p>
        <div className="mt-6 md:mt-10">
          <div className="flex items-center gap-3 md:gap-5">
            <img src={Pseudo} className="w-3" alt="" />
            <p>{listone}</p>
          </div>
          <div className="mt-4 flex items-center gap-3 md:mt-7 md:gap-5">
            <img src={Pseudo} className="w-3" alt="" />
            <p>{listtwo}</p>
          </div>
          <div className="mt-4 flex items-center gap-3 md:mt-7 md:gap-5">
            <img src={Pseudo} className="w-3" alt="" />
            <p>{listthree}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceList2;
