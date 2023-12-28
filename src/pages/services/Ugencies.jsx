import { ServicesUgencies } from "../../assets";
import Wrapper from "../../layouts/Wrapper";
import ServiceTextOverlay from "../../components/services/ServiceTextOverlay";
import ServiceTextSectionOne from "../../components/services/ServiceTextSectionOne";
import ServiceTextSectionTwo from "../../components/services/ServiceTextSectionTwo";
import TextOverlay from "../../components/TextOverlay";
import CustomNavLink from "../../components/CustomNavLink";
import Button from "../../components/Button";

function Ugencies() {
  return (
    <Wrapper>
      <ServiceTextOverlay
        img={ServicesUgencies}
        href={["URGENCIES & REAMINATION", "/services/ugencies"]}
        heading='URGENCIES & REAMINATION'
      />
      <section className="px-4 py-10 md:px-24 md:py-20">
        <ServiceTextSectionOne titleHeading="URGENCIES & REAMINATION" />
        <ServiceTextSectionTwo />
      </section>
      <TextOverlay pattern="footer" size="footer">
        <section className="mx-auto space-y-4">
          <h2 className="text-medium font-bold md:text-header-4">
            How can we help you?
          </h2>
          <p className="text-body-1 font-semibold md:text-header-2">
            We take the time to listen, as we want to know your story, to help
            you get the tools you need for where you are now in your life, and
            to empower you to do more.
          </p>
          <CustomNavLink>
            <Button variant="transparent">
              Get in touch for some guidance
            </Button>
          </CustomNavLink>
        </section>
      </TextOverlay>
    </Wrapper>
  );
}

export default Ugencies;
