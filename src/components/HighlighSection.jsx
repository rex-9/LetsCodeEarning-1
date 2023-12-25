/* eslint-disable react/prop-types */
function HighlighSection({ children, className }) {
  return (
    <article
      className={
        "flex flex-col px-8 md:gap-20 gap-12 md:py-24 py-6 md:flex-row md:px-12 lg:px-16" +
        " " +
        className
      }
    >
      {children}
    </article>
  );
}

export default HighlighSection;
