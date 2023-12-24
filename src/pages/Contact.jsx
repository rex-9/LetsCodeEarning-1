import { ContactBanner } from "../assets";
import Banner from "../components/Banner";
import Button from "../components/Button";

const Contact = () => {
  return (
    <main className="pt-main">
      <Banner
        heading="let's talk"
        subheading="contact us"
        img={ContactBanner}
        alt="contact-banner"
      />
      <div className="">
        <h1 className="ps-5 font-NunitoSans text-medium font-bold text-secondary-700">
          Medical Laboratory Test
        </h1>
        <p className="py-2 pe-5 ps-5 font-NunitoSans text-body-text-1">
          Unlock the Miracle of Life: Discover Our Leading IVF Services for Your
          Journey to Parenthood
        </p>
      </div>
      <div>
        <ul>
          <li className="flex max-w-[200px] ">
            <img src="" alt="" className="h-full max-w-[20px] " />
            <p className="ps-2 ">Stimulation Ovarienne</p>
          </li>
          <li className="flex max-w-[200px] pt-6 ">
            <img src="" alt="" className="h-full max-w-[20px] " />
            <p className="ps-2 ">Insemination Intra Uterine</p>
          </li>
          <li className="flex max-w-[200px] pt-6 ">
            <img src="" alt="" className=" h-full max-w-[20px]" />
            <p className="ps-2 ">Don D’ovocytes</p>
          </li>
        </ul>
      </div>

      <div className="flex">
        <p className="me-auto ms-auto font-NunitoSans text-medium font-bold text-secondary-600">
          Opening Hours For Our Laboratory Test
        </p>
      </div>
      <div className="flex">
        <div className="me-auto ms-auto flex flex-row py-4">
          <span>Monday - Wednesday</span>
          <span className="p-3">
            <img src="" alt="" />
          </span>
          <span>7:30am to 6:00pm</span>
        </div>
      </div>
      <div className="flex">
        <div className="me-auto ms-auto flex flex-row py-4">
          <span>Thursday</span>
          <span className="p-3">
            <img src="" alt="" />
          </span>
          <span>8:00am to 6:00pm</span>
        </div>
      </div>
      <div className="flex">
        <div className="me-auto ms-auto flex flex-row py-4">
          <span>Friday</span>
          <span className="p-3">
            <img src="" alt="" />
          </span>
          <span>7:30am to 4:30pm</span>
        </div>
      </div>
      <div className="flex">
        <div className="me-auto ms-auto flex flex-row py-4">
          <span>Saturday - Sunday</span>
          <span className="p-3">
            <img src="" alt="" />
          </span>
          <span>CLOSED</span>
        </div>
      </div>
      <div className=" flex">
        <div className=" me-auto ms-auto">
          <Button> Book a lab test appointment</Button>
        </div>
      </div>
      {/* form section */}
      <div className="">
        <div className=" flex">
          <h1 className=" me-auto ms-auto py-5 font-NunitoSans text-header-1 font-semibold text-secondary-600">
            Get in touch with us
          </h1>
        </div>
        <div className=" flex ">
          <p className=" me-auto ms-auto font-NunitoSans">
            We are always happy to hear from you. Please feel free to use this
            form to contact us with any questions or concerns you may have.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Contact;
