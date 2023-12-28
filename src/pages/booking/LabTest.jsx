import { LabTestRequest, PhoneCallingIcon, WhatsappIcon } from "../../assets";
import Button from "../../components/Button";
import CustomNavLink from "../../components/CustomNavLink";
import Wrapper from "../../layouts/Wrapper";

const LabTest = () => {
  return (
    <Wrapper >
      <div className="flex h-auto w-screen flex-col bg-secondary-700 px-6 py-10  text-[#fff]  md:items-center md:gap-4 md:px-6 md:pb-[100px] md:pt-[80px] lg:flex-row">
        <article className="mx-auto max-w-sm md:max-w-lg">
          <div className="">
            <p className="text-header-1 lg:text-header-5">
              Request your <span className="text-primary-600">lab test</span>
              from anywhere within Lome-Togo.
            </p>
            <p className="text-body-text-1 pb-4 pt-4 text-[14px] text-primary-600 lg:text-header-1">
              Available Monday to Friday from 8:00AM to 5:00PM.
            </p>
          </div>
          <div className="pb-10  lg:py-12">
            <CustomNavLink to="/booking/lab-form">
              <Button variant="form">Book for your test now</Button>
            </CustomNavLink>
          </div>
          <div className="flex items-center">
            <div className="flex items-center">
              <PhoneCallingIcon></PhoneCallingIcon>
              <div className="flex flex-col justify-center  pr-14 ps-4 md:pr-20  lg:ps-6">
                <span className="text-body-text-1 lg:text-header-3">
                  92507822
                </span>
                <span className="text-body-text-1 lg:text-header-3">
                  92507822
                </span>
              </div>
              <Button variant="icon" size="icon">
                <p className="text-neutral-100">Chat with us</p>
                {<WhatsappIcon />}
              </Button>
            </div>
          </div>
        </article>

        <section className="mx-auto w-full  max-w-sm pt-11 md:max-w-md">
          <img
            src={LabTestRequest}
            alt=""
            className="h-full w-full object-cover"
          />
        </section>
      </div>
    </Wrapper>
  );
};

export default LabTest;
