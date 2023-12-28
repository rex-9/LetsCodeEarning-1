import { PhoneIcon, ServicesBanner } from "../../assets";
import { servicesCardsData } from "../../data";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import CardsWrapper from "../../components/CardsWrapper";
import Wrapper from "../../layouts/Wrapper";
import TextOverlay from "../../components/TextOverlay";
import CustomNavLink from "../../components/CustomNavLink";
import Button from "../../components/Button";

const Services = () => {
  return (
      <Wrapper>
        <Banner
          heading="our services"
          subheading="Hopital Prive Autel D’elie"
          img={ServicesBanner}
          alt="services-banner"
        />
        <div className="flex flex-col gap-6 px-6 py-10 md:flex-row md:gap-12 md:px-16 md:py-24 lg:gap-60 lg:px-20">
          <div className="order-2  space-y-8">
            <p className="text-body-1 font-semibold text-neutral-800 opacity-90 md:text-header-1 md:font-normal">
              Each stages of life brings unique health care needs.
              <span className="font-bold text-primary-500">
                HOPITAL PRIVE AUTEL D&apos;ELIE
              </span>{" "}
              expert health care team and support staff are ready to help you stay
              healthy and even improve your health, so you feel well and stay
              active and independent.
            </p>
            <p className="text-body-1 font-semibold text-neutral-800 opacity-90 md:text-header-1 md:font-normal">
              Men, women and children all have special needs for ongoing health
              care to stay well, particularly those who have been diagnosed with a
              health condition. Our medical specialists are here for you with
              diverse specialized services, including:
            </p>
          </div>
          <div className="order-1 flex items-center justify-center gap-4 self-end border-l-2 border-secondary-400 pl-4 md:order-3 md:self-start ">
            <div className="flex h-5 w-5 basis-full items-center justify-center rounded-full bg-primary-600 md:h-10 md:w-10">
              <PhoneIcon
                className="h-4 w-4 md:h-5 md:w-5"
                stroke="none"
                fill="#fff"
              />
            </div>
            <p className="flex flex-col">
              <span className="whitespace-nowrap text-small font-semibold text-secondary-600 md:text-body-1">
                Make an Appointment
              </span>
              <span className=" text-body-2 text-primary-600 md:text-medium">
                9158394
              </span>
            </p>
          </div>
        </div>
        <CardsWrapper
          className="bg-neutral-200"
          intent="services"
          subheading="true"
        >
          {servicesCardsData.services.map(({ title, img, link, body }) => (
            <Card
              key={title}
              img={img}
              title={title}
              body={body}
              link={link}
              intent="services"
            />
          ))}
        </CardsWrapper>
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
};

export default Services;
