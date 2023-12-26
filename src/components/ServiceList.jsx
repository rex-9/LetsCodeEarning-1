/* eslint-disable react/prop-types */

const ServiceList = ({
  firstHeader,
  firstParagraph,
  secHeader,
  secParagraph,
}) => {
  return (
    <div className="">
      <div className="">
        <p className="text-medium font-bold text-secondary-600 md:text-header-1">
          {firstHeader}
        </p>
        <p className="text-body-text-1 pt-6 md:pt-8 md:text-header-1">
          {firstParagraph}
        </p>
      </div>
      <div className="my-6 md:mb-8 md:mt-20">
        <p className="text-medium font-bold text-secondary-600 md:text-header-2">
          {secHeader}
        </p>
        <p className="text-body-text-1 pt-4 md:pt-8 md:text-header-1">
          {secParagraph}
        </p>
      </div>

      <hr className="opacity-40" />
    </div>
  );
};

export default ServiceList;
