/* eslint-disable react/prop-types */
function ServicesSection({ children }) {
  return (
    <article className="space-y-12 bg-neutral-200 px-6 py-16 sm:px-12 md:space-y-16 md:px-20 lg:px-24">
      <div className="text-center">
        <h2 className="text-body-1 font-bold text-primary-600 md:text-header-3 md:font-semibold">
          Our Service
        </h2>
        <p className="text-medium font-bold text-secondary-700 md:text-header-4">
          We have the best quality service for you
        </p>
      </div>
      <section className="service-cards-container">{children}</section>
    </article>
  );
}

export default ServicesSection;
