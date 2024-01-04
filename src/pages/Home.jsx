import { HashLink } from "react-router-hash-link";
import { HomeCenterFiv, HomeAboutUs, HomeWhatWeDo } from "../assets";
import { hightLightData, servicesCardsData } from "../data";
import Wrapper from "../layouts/Wrapper";
import CustomNavLink from "../components/CustomNavLink";
import HighlighSection from "../components/HighlighSection";
import HighlightImage from "../components/HighlightImage";
import HighlightText from "../components/HighlightText";
import TextOverlay from "../components/TextOverlay";
import CardsWrapper from "../components/CardsWrapper";
import Card from "../components/Card";
import Button from "../components/Button";

const Home = () => {
  return (
    <Wrapper>
      {/* Hero Text Overlay */}
      <TextOverlay>
        <section className="mx-auto space-y-4">
          <h1 className=" text-header-5 font-bold">BIENVENUE</h1>
          <p className="text-header-5 font-bold">
            HOPITAL PRIVE AUTEL D&apos;ELIE
          </p>
          <p className=" text-header-1 font-semibold">
            Nous sommes là pour votre prise en charge médicale, votre santé est
            notre priorité absolue. Nous sommes prêts à vous aider dans vos
            consultations médicales.
          </p>
          <CustomNavLink>
            <HashLink
              to="/contact#contactForm"
              scroll={(el) => {
                const yOffset = -100;
                const y =
                  el.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }}
            >
              <Button>Get In Touch</Button>
            </HashLink>
          </CustomNavLink>
        </section>
      </TextOverlay>
      {/* First Highlight Section */}
      <HighlighSection>
        <HighlightImage
          img={HomeAboutUs}
          alt="home-aboutUs"
          style="top"
          order="last"
          right="true"
          className=" order-last"
        />
        <HighlightText
          subheading="about us"
          heading="why choose us?"
          body="We value our all clients and employees, treating them with utmost pride and esteem, recognizing."
          list={hightLightData.variantOne}
        />
      </HighlighSection>
      {/* Second Highlight Section Video */}
      <HighlighSection className="bg-secondary-700">
        <HighlightImage
          img={HomeWhatWeDo}
          alt="home-whatWeDo"
          top="true"
          className="order-last md:order-none"
        />
        <HighlightText
          subheading="what we do"
          heading="we are about to give holistic care"
          body="We value our all clients and employees, treating them with utmost pride and esteem, recognizing."
          list={hightLightData.variantOne}
          isVideo="true"
        />
      </HighlighSection>
      {/* Services Section */}
      <CardsWrapper className="bg-neutral-300" subheading="true">
        {servicesCardsData.home.map(({ title, img, body, link }) => (
          <Card
            key={title}
            img={img}
            title={title}
            body={body}
            link={link}
            intent="home"
            imgType="circle"
          />
        ))}
      </CardsWrapper>
      {/* Third Highlight Section */}
      <HighlighSection>
        <HighlightImage
          img={HomeCenterFiv}
          alt="home-services1"
          style="both"
          top="true"
          className="order-last md:order-none"
        />
        <HighlightText
          subheading="New Service"
          heading="Centre Fiv"
          body="Unlock the Miracle of Life: Discover Our Leading IVF Services for Your Journey to Parenthood"
          href="/appointment"
          list={hightLightData.variantTwo}
        />
      </HighlighSection>
      {/* Footer Text Overlay */}
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

export default Home;
