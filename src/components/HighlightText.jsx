/* eslint-disable react/prop-types */
import { CheckBoxFilledIcon, CheckBoxWhiteIcon } from "../assets";
import CustomNavLink from "./CustomNavLink";
import Button from "./Button";
import { twMerge } from "tailwind-merge";

function HighlightText({
  subheading,
  heading,
  body,
  list,
  href,
  hrefText = "learn more",
  isVideo = null,
  isContact = null,
}) {
  return (
    <section className="order-first basis-full space-y-4 self-center lg:order-1 lg:space-y-8">
      <div className="space-y-3">
        {subheading && (
          <p
            className={twMerge(
              "text-body-1 font-semibold capitalize lg:text-header-1 lg:font-bold",
              isVideo ? " text-neutral-100" : " text-primary-600",
            )}
          >
            {subheading}
          </p>
        )}
        <h2
          className={twMerge(
            "text-medium font-bold capitalize lg:text-header-4",
            isVideo ? " text-neutral-100" : " text-secondary-700",
          )}
        >
          {heading}
        </h2>
        <p
          className={twMerge(
            "text-body-1 font-normal lg:text-header-2 lg:font-semibold",
            isVideo
              ? " text-neutral-100"
              : isContact
                ? " text-neutral-600"
                : " text-neutral-400",
          )}
        >
          {body}
        </p>
      </div>
      <ul className="flex flex-col gap-4">
        {list.map(({ id, text }) => {
          return (
            <li
              key={id}
              className={twMerge(
                "flex items-center justify-start gap-3 text-body-1 font-semibold md:items-start lg:items-center lg:text-header-2",
                isVideo
                  ? " text-neutral-100"
                  : isContact
                    ? " text-neutral-700"
                    : " text-neutral-500",
              )}
            >
              {isVideo ? (
                <CheckBoxWhiteIcon className="h-6 w-6" />
              ) : (
                <CheckBoxFilledIcon className="h-6 w-6 " />
              )}
              {text}
            </li>
          );
        })}
      </ul>
      {href && (
        <CustomNavLink to={href}>
          <Button className="capitalize">{hrefText}</Button>
        </CustomNavLink>
      )}
    </section>
  );
}

export default HighlightText;
