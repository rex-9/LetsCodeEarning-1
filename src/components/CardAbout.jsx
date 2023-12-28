/* eslint-disable react/prop-types */
const CardAbout = ({ imgSrc, imgAlt, name, job }) => {
  return (
    <div>
      <section className="mx-auto max-w-[327px] px-1 shadow-md md:max-w-xs">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="aspect-square rounded-t-2xl object-cover"
        />
        <div className="px-10 py-8 text-center">
          <h3 className="text-medium font-semibold text-secondary-600 md:text-header-1 ">
            {name}
          </h3>
          <p className="text-body-text-1 md:text-body-text-1">{job}</p>
        </div>
      </section>
    </div>
  );
};

export default CardAbout;
