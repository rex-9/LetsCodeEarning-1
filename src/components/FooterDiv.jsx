import {
  Brand,
  Phonecalling,
  TiktokIcon,
  FacebookIcon,
  WhatsappIcon,
} from "../assets";
const FooterDiv = () => {
  return (
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
              <div className="text-body-text-1 flex flex-col pt-4 md:pt-6 md:text-medium">
                <a href="" className="">
                  Operating Unit
                </a>
                <a href="" className="pt-2">
                  Emergencies & Resuscitations
                </a>
                <a href="" className="pt-2">
                  Hospitalization
                </a>
                <a href="" className="pt-2">
                  Laboratory
                </a>
                <a href="" className="pt-2">
                  IVF Centre
                </a>
                <a href="" className="pt-2">
                  Imagerie
                </a>
              </div>
            </div>
          </div>

          <div className=" grid grid-cols-2 gap-20 lg:flex lg:flex-row-reverse lg:gap-14 xl:gap-24 2xl:gap-32">
            <div className="">
              <p className="text-medium font-bold md:text-header-2">Contact</p>
              <div className="text-body-text-1 pt-4 md:pt-6 md:text-medium">
                <div className="flex items-center gap-4 md:gap-4">
                  <Phonecalling className="w-5"></Phonecalling>
                  <p>BP 6176 Lome-TOGO</p>
                </div>
                <div className="flex items-center gap-2 pt-4 md:gap-4 md:pt-5">
                  <Phonecalling className="w-5"></Phonecalling>
                  <p>+228 22 22 63</p>
                </div>
                <div className="flex items-center gap-2 pt-4 md:gap-4 md:pt-5">
                  <Phonecalling className="w-5"></Phonecalling>
                  <p className="flex flex-col sm:flex-row">
                    Customerservice<span>@cae.com</span>
                  </p>
                </div>
                <div className="flex gap-4 pt-4 md:gap-4 md:pt-5">
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
              <div className="text-body-text-1 flex flex-col pt-4 md:pt-6 md:text-medium">
                <a href="">Blog</a>
                <a href="" className="pt-2">
                  About Us
                </a>
                <a href="" className="pt-2">
                  Privacy Policy
                </a>
                <a href="" className="pt-2">
                  Terms & Condition
                </a>
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
  );
};

export default FooterDiv;
