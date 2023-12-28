/* eslint-disable react/prop-types */

import { twMerge } from "tailwind-merge";

function CardsWrapper({
  children,
  className = null,
  intent = null,
  heading = "Our Services",
  subheading,
}) {
  const headingClasses =
    intent === "home"
      ? "text-body-1 font-bold text-center capitalize text-primary-600 md:text-header-3 md:font-semibold"
      : intent === "centre-fiv"
        ? "hidden md:block text-header-2 text-left capitalize font-bold text-secondary-600"
        : "text-medium font-bold text-secondary-600 text-center capitalize md:text-header-4";
  const subheadingClasses =
    intent === "home"
      ? "text-medium font-bold text-secondary-700 text-center md:text-header-4"
      : "text-body-1 font-semibold text-neutral-500 text-center md:text-header-1";
  return (
    <article
      className={twMerge(
        intent !== "centre-fiv"
          ? "space-y-12 px-6 py-16 sm:px-12 md:space-y-16 md:px-20 lg:px-24"
          : "space-y-8 ",
        className,
      )}
    >
      <div className="">
        <h2 className={headingClasses}>{heading}</h2>
        {subheading && (
          <p className={subheadingClasses}>
            We have the best quality service for you
          </p>
        )}
      </div>
      <section className="service-cards-container">{children}</section>
    </article>
  );
}

export default CardsWrapper;
