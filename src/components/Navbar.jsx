import React from "react";
import CustomNavLink from "./CustomNavLink";
import Button from "./Button";
import {
  Brand,
  CloseIcon,
  FacebookIcon,
  HamburgerIcon,
  TiktokIcon,
  WhatsappIcon,
} from "../assets";

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
  const handleMobileNav = () => setMobileNavOpen((prev) => !prev);
  return (
    <nav>
      <div className="mx-auto flex h-auto max-w-screen-2xl flex-wrap items-center justify-between bg-secondary-700 py-3 md:px-8 md:py-2">
        <div className="flex flex-col text-small-text text-neutral-100 md:flex-row md:gap-4 md:text-medium">
          <p className="">Email: info@cae.com</p>
          <p>Phone Number: +228 92 50 78 22</p>
        </div>
        <ul className="flex items-center gap-6 font-medium rtl:space-x-reverse">
          <CustomNavLink to="#">
            <WhatsappIcon />
          </CustomNavLink>
          <CustomNavLink to="#">
            <FacebookIcon />
          </CustomNavLink>
          <CustomNavLink to="#">
            <TiktokIcon />
          </CustomNavLink>
        </ul>
      </div>
      <div className="relative mx-auto flex h-auto max-w-screen-2xl flex-wrap items-center justify-between px-6 py-2 md:px-8">
        <CustomNavLink>
          <img src={Brand} className="h-8 md:h-12" alt="Website Logo" />
          <p className="flex flex-col self-center whitespace-nowrap text-body-text-1 uppercase md:text-header-1">
            <span>aute d&apos;ele</span>
            <span>hopital prive </span>
          </p>
        </CustomNavLink>

        <div className="flex space-x-3 rtl:space-x-reverse md:order-2 md:space-x-0">
          <CustomNavLink to="/appointment" className="hidden md:flex">
            <Button>Appointment</Button>
          </CustomNavLink>
          <Button
            onClick={handleMobileNav}
            variant="nav"
            size="mobileNav"
            data-collapse-toggle="navbar-sticky"
            type="button"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {mobileNavOpen ? <CloseIcon /> : <HamburgerIcon />}
          </Button>
        </div>
        <div
          id="navbar-sticky"
          className={
            "fixed inset-0 w-full items-center justify-end backdrop-blur-sm md:relative md:order-1 md:mx-auto md:mt-0 md:flex md:w-auto" +
            (mobileNavOpen ? " flex" : " hidden")
          }
        >
          <ul className="fixed inset-0 left-1/4 flex flex-col space-y-4 bg-neutral-100 px-8 py-36 text-center text-header-2 shadow-xl rtl:space-x-reverse md:relative md:left-0 md:mt-0 md:w-auto md:flex-row md:space-x-8 md:space-y-0 md:border-0 md:bg-neutral-100 md:p-0 md:text-medium md:shadow-none">
            <CustomNavLink onClick={handleMobileNav} to="/">
              Home
            </CustomNavLink>
            <CustomNavLink onClick={handleMobileNav} to="/services">
              Services
            </CustomNavLink>
            <CustomNavLink onClick={handleMobileNav} to="/about">
              About
            </CustomNavLink>
            <CustomNavLink onClick={handleMobileNav} to="/contact">
              Contact
            </CustomNavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
