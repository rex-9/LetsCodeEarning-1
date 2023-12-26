/* eslint-disable react/prop-types */
const CardAbout = ({ imgSrc, imgAlt, name, job }) => {
  return (
        <div>
           <section  className="max-w-[327px] md:max-w-xs mx-auto px-1 shadow-md">
                <img src={imgSrc} alt={imgAlt} className="aspect-square object-cover rounded-t-2xl"/>
                <div className="text-center px-10 py-8">
                    <h3 className="text-secondary-600 font-semibold text-medium md:text-header-1 ">{name}</h3>
                    <p className="text-body-text-1 md:text-body-text-1">{job}</p>
                </div>
           </section>
        </div>
  )
}

export default CardAbout;
