import { NavLink } from "react-router-dom";
import {
  Brand,
  TiktokIcon,
  FacebookIcon,
  WhatsappIcon,
  LocationIcon,
  PhoneIcon,
  EmailIcon,
} from "../assets";

const Footer = () => {
  return (
    <footer>
      <div className="bg-secondary-1200 text-neutral-100">
        <div className="w-full  px-4 pb-14 pt-10 sm:px-10 md:ps-20   md:pt-16 lg:mx-auto xl:max-w-fit">
          <div className="xl:gap-30 flex w-full flex-col gap-8 lg:flex-row  lg:gap-10 2xl:gap-36">
            <div className=" grid grid-cols-2 gap-20 lg:flex lg:gap-10 xl:gap-24 2xl:gap-32">
              <div className="text-body-text-1 md:text-medium">
                <img src={Brand} className="w-14 md:w-20" alt="" />
                <p className="max-w-[150px] pt-4 sm:max-w-[342px] md:pt-6 ">
                  HPAE administrative support entry and all health care service
                  administrative support entry and all health care service.
                </p>
              </div>
              <div className="">
                <p className="text-medium font-bold md:text-header-2">
                  Our Service
                </p>
                <div className="text-body-text-1 flex flex-col gap-2 pt-4 md:pt-6 md:text-medium">
                  <NavLink to="/services/bloc-operate">Operating Unit</NavLink>
                  <NavLink href="/services/ugencies">
                    Emergencies & Resuscitations
                  </NavLink>
                  <NavLink href="/services/hospitalization">
                    Hospitalization
                  </NavLink>
                  <NavLink href="/services/laboratoire">Laboratory</NavLink>
                  <NavLink href="/services/centre-fiv">IVF Centre</NavLink>
                  <NavLink to="/services/imagrie">Imagerie</NavLink>
                </div>
              </div>
            </div>

            <div className=" grid grid-cols-2 gap-20 lg:flex lg:flex-row-reverse lg:gap-14 xl:gap-24 2xl:gap-32">
              <div className="flex flex-col gap-4 md:gap-6 ">
                <p className="text-medium font-bold md:text-header-2">
                  Contact
                </p>
                <div className="text-body-text-1 flex flex-col items-start justify-center gap-4 md:text-medium">
                  <div className="flex items-center justify-center gap-2 md:gap-4">
                    <LocationIcon stroke="#fff" className=" shrink-0" />
                    <p>BP 6176 Lome-TOGO</p>
                  </div>
                  <div className="flex items-center justify-center gap-2 md:gap-4">
                    <PhoneIcon stroke="#fff" className=" shrink-0" />
                    <p>+228 22 22 63</p>
                  </div>
                  <div className="flex items-center justify-center gap-2 md:gap-4">
                    <EmailIcon stroke="#fff" className=" shrink-0" />
                    <p className="flex flex-col sm:flex-row">
                      Customerservice@cae.com
                    </p>
                  </div>
                  <div className="flex gap-4 md:gap-4">
                    <a href="#">
                      <WhatsappIcon></WhatsappIcon>
                    </a>
                    <a href="#">
                      <FacebookIcon></FacebookIcon>
                    </a>
                    <a href="#">
                      <TiktokIcon></TiktokIcon>
                    </a>
                  </div>
                </div>
              </div>
              <div className="">
                <p className="text-medium font-bold md:text-header-2">
                  Quick Links
                </p>
                <div className="text-body-text-1 flex flex-col gap-2 pt-4 md:pt-6 md:text-medium">
                  <NavLink to="#">Blog</NavLink>
                  <NavLink to="#">About Us</NavLink>
                  <NavLink to="#">Privacy Policy</NavLink>
                  <NavLink to="#">Terms & Condition</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full pb-10 text-center lg:px-20 lg:text-left">
          <hr className=" pb-5 opacity-50" />
          <small className="text-small-text md:text-body-text-1 opacity-50">
            CAE Copyright 2023. All Rights Reserved By CAE
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
