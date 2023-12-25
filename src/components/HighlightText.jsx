/* eslint-disable react/prop-types */
import { highlightList } from "../data";
import CustomNavLink from "./CustomNavLink";
import Button from "./Button";

function HighlightText({
  subheading,
  heading,
  body,
  list = highlightList,
  href,
  hrefText = "learn more",
}) {
  return (
    <section className="md:space-y-8 space-y-4 order-first md:order-1">
      <div className="space-y-3">
        {subheading && (
          <p className=" text-body-text-1 font-semibold text-primary-600 md:text-header-1 md:font-bold">
            {subheading}
          </p>
        )}
        <h2 className="text-medium font-bold text-secondary-700 md:text-header-4">
          {heading}
        </h2>
        <p className="text-neutral-400 text-body-text-1 font-normal md:text-header-2 md:font-semibold">
          {body}
        </p>
      </div>

      <ul>
        {list.map((item) => {
          return (
            <li
              key={item}
              className="text-neutral-500 text-body-text-1 font-semibold md:text-header-2"
            >
              {item}
            </li>
          );
        })}
      </ul>
      {href && (
        <CustomNavLink to={href}>
          <Button className="uppercase">{hrefText}</Button>
        </CustomNavLink>
      )}
    </section>
  );
}

export default HighlightText;
