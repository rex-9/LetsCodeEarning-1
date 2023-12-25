import { Check } from "../assets"
const ServiceList2 = () => {
  return (
    <div>
        <div className="mt-6 md:mt-16">
            <p className="text-secondary-600 text-medium md:text-header-3 font-bold"></p>
            <p className="pt-3 md:pt-8 text-body-text-1 md:text-header-1"></p>
        </div>
        <div className="mt-6 md:mt-12">
            <p className="text-secondary-600 text-medium md:text-header-2 font-bold"></p>
            <p className="pt-4 md:pt-6 text-body-text-1 md:text-header-1"></p>
        </div>
        <div className="mt-4 md:mt-11 text-body-text-1 md:text-medium p-10 align-middle">
             <p></p>
            <div className="md:mt-10">
                <div className="flex md:gap-5 items-center">
                    <img src={Check} className="md:w-2" alt="" />
                    <p>Srr thrr twyy</p>
                </div>
                <div className="mt-7 flex md:gap-5 items-center">
                    <img src={Check} className="md:w-2" alt="" />
                    <p>Srr thrr twyy</p>
                </div>
                <div className="mt-7 flex md:gap-5 items-center">
                    <img src={Check} className="md:w-2" alt="" />
                    <p>Srr thrr twyy</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceList2