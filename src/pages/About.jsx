import {
  AboutBanner,
  AboutHero,
  AboutDoctor1,
  AboutDoctor2,
  AboutDoctor3,
} from "../assets";
import Banner from "../components/Banner";
import CircleList from "../components/CircleList";
import AboutCard from "../components/CardAbout";
import Circle from "../components/Circle";
import HighlightImage from "../components/HighlightImage";
import Button from "../components/Button";
import Wrapper from "../layouts/Wrapper";
import CustomNavLink from "../components/CustomNavLink";

const About = () => {
  return (
    <Wrapper className="font-NunitoSans">
      <Banner
        heading="About"
        subheading="Hopital Prive Autel D’elie"
        img={AboutBanner}
        alt="banner photo for about us page"
      />

      {/* Hero Section */}
      <div className="grid-cols-3 gap-20 lg:grid ">
        <div className=" hidden ps-20  pt-14 lg:block">
          <HighlightImage img={AboutHero} top="true" bottom="true" />
        </div>
        <article className="text-body-text-1 col-span-2 px-6 pb-16 pt-8 ">
          <section>
            <h2 className="text-medium  font-bold text-secondary-600 md:text-header-4">
              Building a Centre of Excellence for a Healthy Lifestyle
            </h2>
            <p className="pt-6 text-body-1 font-semibold text-neutral-800 md:text-header-1 ">
              Hopital Prive Autel D’elie is a multi-disciplinary health centre
              of excellence in TOGO. We’ve been around for a long time and we
              love working with people and giving them the right support to help
              them meet their health needs.
            </p>
            <p className="pt-6 text-body-1 text-neutral-800 md:text-header-1 ">
              We’re here to listen – to hear your story – and then work with you
              in a collaborative way. We want to help you to achieve your goals,
              to maximize your lifestyle choices and to improve your overall
              health and wellbeing. We don’t just work with where you are at, we
              want to empower you to do more now and into the future!
            </p>
            <p className="pt-6 text-body-1 text-neutral-800 md:text-header-1 ">
              We’re here to help you bridge the gap between treatment, child
              care and your lifestyle. Our centre offers:
            </p>
          </section>
          <section className="text-body-text-1 grid grid-cols-2 gap-8 pb-10 pt-6 md:text-header-2">
            <div>
              <ul>
                <Circle
                  name="Stimulation Ovarienne"
                  textColor="text-neutral-800"
                />
                <Circle
                  name="Stimulation Ovarienne"
                  textColor="text-neutral-800"
                />
                <Circle
                  name="Stimulation Ovarienne"
                  textColor="text-neutral-800"
                />
              </ul>
            </div>
            <div>
              <ul>
                <Circle
                  name="Stimulation Ovarienne"
                  textColor="text-neutral-800"
                />
                <Circle
                  name="Stimulation Ovarienne"
                  textColor="text-neutral-800"
                />
              </ul>
            </div>
          </section>
          <div className="text-center lg:text-left">
            <CustomNavLink to="/booking/lab-test">
              <Button>Book an appointment</Button>
            </CustomNavLink>
          </div>
        </article>
      </div>

      {/* Services We Offer */}
      <section className="relative z-10 bg-secondary-600 text-[#fff] ">
        <div className="relative mx-auto max-w-md  py-5  text-center md:py-14">
          <h2 className="text-medium  font-semibold  md:text-header-2">
            Services We Offer{" "}
          </h2>
          <p className="text-body-text-1 mx-auto w-2/3  pb-3 pt-3 md:w-full md:py-6 md:text-header-1">
            Our team is qualified and committed to providing a high-quality
            service to help you navigate your health through different life
            stages and health challenges.
          </p>
          <span className="text-body-text-2 md:pt-6 md:text-header-1">
            This may include:
          </span>
        </div>
        <div className="circle  absolute top-0 -z-10 h-1/4 w-full bg-secondary-1300 md:h-2/6"></div>
        <CircleList />
      </section>

      {/* Doctors */}
      <section className="bg-[#f2f2f2] px-6 pb-14 md:px-28 md:pb-24">
        <div className="mx-auto   py-8 text-center md:py-20">
          <h2 className="text-medium font-semibold text-secondary-600 md:text-header-4">
            Meet Our Qualified Doctors
          </h2>
          <p className="text-body-text-1 m-auto  max-w-[327px] pt-4 md:max-w-4xl md:text-header-1">
            We are passionate about helping you achieve your goals to maximize
            your lifestyle choices and improve your health and wellbeing. We are
            committed to providing a high quality service to assist you
          </p>
        </div>
        <div className="grid gap-6 md:gap-16 lg:grid-cols-3 xl:gap-36">
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
    </Wrapper>
  );
};

export default About;
