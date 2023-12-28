import { ContactBanner, ContactHero } from "../assets";
import Address from "../components/Address";
import Inputform from "../components/form/Inputform";
import Banner from "../components/Banner";
import Schedule from "../components/form/Schedule";
import HighlightImage from "../components/HighlightImage";
import Wrapper from "../layouts/Wrapper";
import HighlighSection from "../components/HighlighSection";
import HighlightText from "../components/HighlightText";
import { hightLightData } from "../data";

const Contact = () => {
  return (
    <Wrapper className="bg-neutral-200">
      <Banner
        heading={"Let's talk"}
        subheading={"Contact  "}
        img={ContactBanner}
      />
      <HighlighSection className="bg-neutral-200">
        <HighlightImage
          img={ContactHero}
          alt="home-whatWeDo"
          top="true"
          className=" order-last md:order-first"
        />
        <HighlightText
          heading="Medical Laboratory Test"
          body="Unlock the Miracle of Life: Discover Our Leading IVF Services for Your Journey to Parenthood"
          list={hightLightData.variantTwo}
          href="/booking/lab-form"
          isContact="true"
        />
      </HighlighSection>

      <Schedule></Schedule>
      {/* form section */}
      <div className="mt-10 flex flex-col  gap-1 bg-neutral-100 font-NunitoSans md:flex-row">
        <div className="md:w-1/2">
          <div className="pe-8 ps-8 pt-20 lg:ps-60">
            <h1 className=" text-header-3 font-bold text-secondary-600 md:text-header-4">
              Get in touch with us
            </h1>
            <p className="pt-8 font-medium md:text-header-1">
              We are always happy to hear from you. Please feel free to use this
              form to contact us with any questions or concerns you may have.
            </p>
            <p className="pt-8 font-medium md:text-header-1">
              Our team is ready and available to help answer your questions and
              address your needs as quickly as possible. If we can’t handle it,
              we will find someone who can!
            </p>
          </div>
        </div>

        <div className="mt-3 flex md:w-1/2">
          <Inputform></Inputform>
        </div>
      </div>
      <Address></Address>
    </Wrapper>
  );
};

export default Contact;
