/* eslint-disable react/prop-types */
import { Pseudo } from "../assets"
const ServiceList2 = ({firstHeader,firstParagraph,secHeader,secParagraph,listHeader,listone,listtwo,listthree}) => {
  return (
    <div>
        <div className="mt-6 md:mt-16">
            <p className="text-secondary-600 text-medium md:text-header-3 font-bold">{firstHeader}</p>
            <p className="pt-3 md:pt-8 text-body-text-1 md:text-header-1">{firstParagraph}</p>
        </div>
        <div className="mt-6 md:mt-12">
            <p className="text-secondary-600 text-medium md:text-header-2 font-bold">{secHeader}</p>
            <p className="pt-4 md:pt-6 text-body-text-1 md:text-header-1">{secParagraph}</p>
        </div>
        <div className="mt-4 md:mt-11 text-body-text-1 md:text-medium align-middle">
             <p>{listHeader}</p>
            <div className="md:mt-10 mt-6">
                <div className="flex md:gap-5 gap-3 items-center">
                    <img src={Pseudo} className="w-3" alt="" />
                    <p>{listone}</p>
                </div>
                <div className="md:mt-7 mt-4 flex md:gap-5 gap-3 items-center">
                    <img src={Pseudo} className="w-3" alt="" />
                    <p>{listtwo}</p>
                </div>
                <div className="md:mt-7 mt-4 flex md:gap-5 gap-3 items-center">
                    <img src={Pseudo} className="w-3" alt="" />
                    <p>{listthree}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceList2