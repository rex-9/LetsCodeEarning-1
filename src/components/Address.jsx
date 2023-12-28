// import React from 'react'
import {
  FacebookIcon,
  TiktokIcon,
  WhatsappIcon,
  LocationIcon,
  PhoneIcon,
  EmailIcon,
  ContactMap,
} from "../assets";

const Address = () => {
  return (
    <div className="flex py-12  md:mr-12">
      <div className="basis-full rounded-lg bg-neutral-100 ps-2  md:w-auto">
        <div className="md:h:auto w-full md:w-auto">
          <h1 className="ms-4 mt-10 pe-3  font-NunitoSans text-medium font-bold text-secondary-700 md:text-header-2 lg:ms-40">
            HOPITAL PRIVE AUTE D’ELIE
          </h1>
          <div className="ms-4 lg:ms-40">
            <div className="flex pt-4 md:pt-6">
              <LocationIcon />
              <span className="ps-1">BP 6176 Lome-TOGO</span>
            </div>
            <div className="flex pt-4 md:pt-6">
              <PhoneIcon />
              <span className="ps-1">+228 22 22 63</span>
            </div>
            <div className="flex pt-4 md:pt-6">
              <EmailIcon fill="#fff" />
              <span className="hidden ps-1 md:block">
                Customerservice@cae.com
              </span>
              <span className="ps-1 md:hidden">
                Customerservice <br />
                @cae.com
              </span>
            </div>
            <div className=" flex gap-3 pb-10 pt-4 md:pt-6">
              <WhatsappIcon className="h-6 w-6"></WhatsappIcon>
              <FacebookIcon className="h-6 w-6"></FacebookIcon>
              <TiktokIcon fill="#033971" className="h-6 w-6"></TiktokIcon>
            </div>
          </div>
        </div>
      </div>
      <div className="m basis-full">
        <img
          src={ContactMap}
          alt=""
          className=" h-[18.5rem] object-cover md:h-80  md:w-[41.9375rem]"
        />
      </div>
    </div>
  );
};

export default Address;
