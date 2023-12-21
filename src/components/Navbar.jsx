import React from "react";
import { NavLink } from "react-router-dom";
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
    <nav className="bg-white border-gray-200 fixed start-0 top-0 z-20  w-full">
      <div className="mx-auto flex h-14 max-w-screen-2xl flex-wrap items-center justify-between bg-secondary-700 py-[0.9375rem] pl-[1.5rem] pr-[1.25rem]">
        <div className="flex flex-col text-small-text text-neutral-100 md:flex-row md:gap-4 md:text-medium">
          <p className="">Email: info@cae.com</p>
          <p>Phone Number: +228 92 50 78 22</p>
        </div>
        <ul className="flex items-center gap-6 font-medium rtl:space-x-reverse">
          <li className="list-none">
            <NavLink to="/">
              <WhatsappIcon />
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink to="/services">
              <FacebookIcon />
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink to="/about">
              <TiktokIcon />
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <NavLink
          to="/"
          className="flex items-center space-x-2 rtl:space-x-reverse"
        >
          <img src={Brand} className="h-8 md:h-12" alt="Website Logo" />
          <p className="flex flex-col self-center whitespace-nowrap text-body-text-1 uppercase md:text-header-1">
            <span>aute d&apos;ele</span>
            <span>hopital prive </span>
          </p>
        </NavLink>
        <div className="flex space-x-3 rtl:space-x-reverse md:order-2 md:space-x-0">
          <NavLink
            to="/appointment"
            className={({ isActive }) =>
              [
                "md:hover:bg-transparent block rounded px-3 py-2 text-secondary-600 hover:text-secondary-400 md:p-0",
                isActive ? " underline underline-offset-2" : "",
              ].join("")
            }
          >
            <Button
              type="button"
              className="focus:ring-blue-300 text-sm hidden hover:text-opacity-80 hover:underline hover:underline-offset-2 focus:outline-none focus:ring-4 md:block "
            >
              Appointment
            </Button>
          </NavLink>
          <button
            onClick={handleMobileNav}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="text-sm text-gray-500 hover:bg-gray-100 focus:ring-gray-200  inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 focus:outline-none focus:ring-2 md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {mobileNavOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
        <div
          id="navbar-sticky"
          className={
            "ml-auto w-full items-center justify-end md:order-1 md:mx-auto md:flex md:w-auto" +
            (mobileNavOpen ? " flex" : " hidden")
          }
        >
          <ul className="md:bg-white mt-4 flex flex-col rounded-lg border p-4 font-medium rtl:space-x-reverse md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0">
            <li className="list-none">
              <NavLink
                onClick={handleMobileNav}
                to="/"
                className={({ isActive }) =>
                  [
                    "md:hover:bg-transparent block rounded px-3 py-2  md:p-0",
                    isActive
                      ? " text-primary-600 underline underline-offset-2 hover:text-primary-400"
                      : " text-secondary-600 hover:text-secondary-400",
                  ].join("")
                }
              >
                Home
              </NavLink>
            </li>
            <li className="list-none">
              <NavLink
                onClick={handleMobileNav}
                to="/services"
                className={({ isActive }) =>
                  [
                    "md:hover:bg-transparent block rounded px-3 py-2 md:p-0",
                    isActive
                      ? " text-primary-600 underline underline-offset-2 hover:text-primary-400"
                      : " text-secondary-600 hover:text-secondary-400",
                  ].join("")
                }
              >
                Services
              </NavLink>
            </li>
            <li className="list-none">
              <NavLink
                onClick={handleMobileNav}
                to="/about"
                className={({ isActive }) =>
                  [
                    "md:hover:bg-transparent block rounded px-3 py-2  md:p-0",
                    isActive
                      ? " text-primary-600 underline underline-offset-2 hover:text-primary-400"
                      : " text-secondary-600 hover:text-secondary-400",
                  ].join("")
                }
              >
                About
              </NavLink>
            </li>
            <li className="list-none">
              <NavLink
                onClick={handleMobileNav}
                to="/contact"
                className={({ isActive }) =>
                  [
                    "md:hover:bg-transparent block rounded px-3 py-2  md:p-0",
                    isActive
                      ? " text-primary-600 underline underline-offset-2 hover:text-primary-400"
                      : " text-secondary-600 hover:text-secondary-400",
                  ].join("")
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
