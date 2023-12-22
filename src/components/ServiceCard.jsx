/* eslint-disable react/prop-types */
import {Arrow} from "../assets"
const ServiceCard = ({img,header,paragraph}) => {
  return (
    <div className="md:max-w-[394px] max-w-[327px] rounded-lg md:pt-[21px] md:pb-6 md:pl-6 md:pr-[4.125rem] py-5 px-4">
        <img src={img} alt="" className="rounded-full aspect-square object-cover w-12 h-12" />
        <div className="md:pt-6 md:pb-9 pt-4 pb-8">
            <p className="md:text-header-1 text-body-text-1 text-secondary-700 font-bold">{header}</p>
            <p className="md:text-medium text-body-text-1 pt-2 text-secondary-400 font-semibold">{paragraph}</p>
        </div>
        <a href="" className="md:text-medium text-body-text-1 text-primary-600 md:font-semibold font-bold ">Read More <img src={Arrow} alt="" className="inline-block" /></a>
    </div>
  )
}

export default ServiceCard