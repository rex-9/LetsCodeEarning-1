/* eslint-disable react/prop-types */


const ServiceList = ({firstHeader,firstParagraph,secHeader,secParagraph}) => {
  return (
    <div className="">
        <div className="">
            <p className="text-medium md:text-header-1 text-secondary-600 font-bold">{firstHeader}</p>
            <p className="pt-6 md:pt-8 text-body-text-1 md:text-header-1">{firstParagraph}</p>
        </div>
        <div className="my-6 md:mt-20 md:mb-8">
            <p className="text-medium md:text-header-2 text-secondary-600 font-bold">{secHeader}</p>
            <p className="pt-4 md:pt-8 text-body-text-1 md:text-header-1">{secParagraph}</p>
        </div>

        <hr className="opacity-40" />

    </div>
  )
}

export default ServiceList