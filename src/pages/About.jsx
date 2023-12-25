import {
  AboutDoctor1,
  AboutDoctor2,
  AboutDoctor3,
  AboutBanner,
} from "../assets";
import Banner from "../components/Banner";
import CircleList from "../components/CircleList";
import AboutCard from "../components/CardAbout";
import Button from "../components/Button";

const About = () => {
  return (
    <main className="pt-main">
      <Banner
        heading="About"
        subheading="Hopital Prive Autel D’elie"
        img={AboutBanner}
        alt="banner photo for about us page"
      />
      <article className="px-6 pb-5 pt-8 text-body-text-1 ">
        <section>
          <h2 className="text-medium  font-bold text-secondary-600 md:text-header-4">
            Building a Centre of Excellence for a Healthy Lifestyle
          </h2>

          <p className="pt-6 text-body-text-1 md:text-header-1">
            Hopital Prive Autel D’elie is a multi-disciplinary health centre of
            excellence in TOGO. We’ve been around for a long time and we love
            working with people and giving them the right support to help them
            meet their health needs.
          </p>

          <p className="pt-6 text-body-text-1 md:text-header-1">
            We’re here to listen – to hear your story – and then work with you
            in a collaborative way. We want to help you to achieve your goals,
            to maximize your lifestyle choices and to improve your overall
            health and wellbeing. We don’t just work with where you are at, we
            want to empower you to do more now and into the future!
          </p>

          <p className="pt-6 text-body-text-1 md:text-header-1">
            We’re here to help you bridge the gap between treatment, child care
            and your lifestyle. Our centre offers:
          </p>
        </section>

        <section className="grid grid-cols-2 gap-8 pb-10 pt-6 text-body-text-1 md:text-header-2">
          <div className="">
            <ul>
              <li className="flex max-w-[200px]">
                <img src="" alt="" className="h-full max-w-[20px] " />
                <p className="ps-2 ">Stimulation Ovarienne</p>
              </li>
              <li className="flex max-w-[200px] pt-6 ">
                <img src="" alt="" className=" h-full max-w-[20px] " />
                <p className="ps-2 ">Insemination Intra Uterine</p>
              </li>
              <li className="flex max-w-[200px] pt-6 ">
                <img src="" alt="" className=" h-full max-w-[20px]" />
                <p className="ps-2 ">Don D’ovocytes</p>
              </li>
            </ul>
          </div>
          <div className="">
            <ul>
              <li className="flex max-w-[200px]">
                <img src="" alt="" className=" h-full max-w-[20px]" />
                <p className="ps-2 ">Don De Sperme</p>
              </li>
              <li className="flex max-w-[200px] pt-6">
                <img src="" alt="" className=" h-full max-w-[20px]" />
                <p className="ps-2">Don D’ovocytes</p>
              </li>
            </ul>
          </div>
        </section>
        <Button>Book an appointment</Button>
      </article>

      <section className="relative z-10 bg-secondary-600 text-[#fff] ">
        <div className="relative  w-full bg-cover bg-center py-6 md:py-7 ">
          <div className="mx-auto h-full max-w-xs gap-6 text-center md:max-w-md ">
            <h2 className="text-medium  font-semibold  md:text-header-2">
              Services We Offer{" "}
            </h2>
            <p className=" text-body-text-1 md:pb-6 md:pt-6 md:text-header-1">
              Our team is qualified and committed to providing a high-quality
              service to help you navigate your health through different life
              stages and health challenges.
            </p>
            <span className="text-body-text-2 md:text-header-1">
              This may include:
            </span>
          </div>
        </div>
        <div className="circle  absolute top-0 -z-10 h-1/4  w-full bg-secondary-700"></div>

        <CircleList></CircleList>
      </section>

      <section className="bg-[#f2f2f2] px-6 pb-14 md:px-28">
        <div className="w-full  px-5 pt-8 text-center md:py-20">
          <h2 className="text-medium font-semibold text-secondary-600 md:text-header-4">
            Meet Our Qualified Doctors
          </h2>
          <p className="m-auto max-w-3xl pb-8 pt-4 text-body-text-1 md:text-header-1">
            We are passionate about helping you achieve your goals to maximize
            your lifestyle choices and improve your health and wellbeing. We are
            committed to providing a high quality service to assist you
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-3">
          <AboutCard
            imgSrc={AboutDoctor1}
            imgAlt="Dr Tabitha Tan"
            name="Dr Tabitha Tan"
            job="Surgical department"
          />
          <AboutCard
            imgSrc={AboutDoctor2}
            imgAlt="Dr Tabitha Tan"
            name="Dr Tabitha Tan"
            job="Surgical department"
          />
          <AboutCard
            imgSrc={AboutDoctor3}
            imgAlt="Dr Tabitha Tan"
            name="Dr Tabitha Tan"
            job="Surgical department"
          />
        </div>
      </section>
      </main>
  );
};

export default About;
