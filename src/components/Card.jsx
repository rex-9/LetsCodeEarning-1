/* eslint-disable react/prop-types */
import { cva } from "class-variance-authority";
import { cn } from "../libs/library";
import { ArrowRightIcon } from "../assets";
import CustomNavLink from "../components/CustomNavLink";

function Card({ intent, img, title, body, link, imgType = null }) {
  const cardVariants = cva(
    "flex flex-col items-start bg-neutral-100 w-80 md:w-96",
    {
      variants: {
        intent: {
          home: "gap-8 px-4 py-5 md:py-6 md:pl-8 md:pr-16",
          services: "gap-6 rounded-lg p-2 md:px-4 md:pb-9 md:pt-4",
          about: "",
        },
      },
      defaultVariants: {
        intent: "home",
      },
    },
  );
  return (
    <article className={cn(cardVariants({ img, title, body, link, intent }))}>
      <section className="space-y-4 md:space-y-6">
        {imgType === "circle" ? (
          <img
            src={img}
            alt=""
            className="h-10 w-10 rounded-full md:h-12 md:w-12 "
          />
        ) : (
          <img src={img} alt="" className="rounded-lg" />
        )}
        <h3 className="text-body-text-1 font-bold uppercase text-secondary-700 md:text-header-1">
          {title}
        </h3>
        <p className=" text-body-text-1 font-semibold text-secondary-400 md:text-medium">
          {body}
        </p>
      </section>
      <CustomNavLink
        to={link}
        className="text-body-text-1 font-bold text-primary-600 no-underline underline-offset-2 hover:text-primary-800 hover:underline md:text-medium md:font-semibold"
      >
        Read More <ArrowRightIcon />
      </CustomNavLink>
    </article>
  );
}

export default Card;
