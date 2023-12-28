import { twMerge } from "tailwind-merge";

/* eslint-disable react/prop-types */
function HighlighSection({ children, className }) {
  return (
    <article
      className={twMerge(
        "flex flex-col gap-12 px-8 py-6 md:flex-row md:gap-20 md:px-12 md:py-24 lg:px-16",
        className,
      )}
    >
      {children}
    </article>
  );
}

export default HighlighSection;
