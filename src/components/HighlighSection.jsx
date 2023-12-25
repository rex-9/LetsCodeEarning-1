/* eslint-disable react/prop-types */
function HighlighSection({ children }) {
  return (
    <article className="flex md:flex-row flex-col md:gap-16 gap-12 bg-primary-300">
     {children}
    </article>
  );
}

export default HighlighSection;
