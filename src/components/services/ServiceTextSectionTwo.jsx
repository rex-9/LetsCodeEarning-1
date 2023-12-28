/* eslint-disable react/prop-types */

const ServiceTextSectionTwo = ({
  howHeading = "How We Care For You",
  howPara = "Our doctors develop asthma action plans to help patients manage the disease and improve their symptoms.",
  welcomeHeading = "Welcome to Hopital Prive Autel D’elie",
  welcomePara = "Our team of medical experts are here for you — a team that includes primary care physicians, nurses and social workers. It’s called a Patient- Centered Medical Home (PCMH), a highly regarded health care model practiced across the country that’s transforming primary health care by meeting everyone’s physical and mental health care needs by stressing prevention, wellness, acute care and chronic care..",
}) => {
  return (
    <div className="space-y-6 pt-8 md:space-y-16">
      <hr className="opacity-40" />

      <section className="space-y-4 md:space-y-8">
        <h2 className="text-medium font-bold text-secondary-600 md:text-header-3">
          {howHeading}
        </h2>
        <p className=" text-body-1 md:text-header-1">{howPara}</p>
      </section>
      <section className="space-y-4 md:space-y-8">
        <h2 className="text-medium font-bold text-secondary-600 md:text-header-2">
          {welcomeHeading}
        </h2>
        <p className="text-body-1 md:text-header-1">{welcomePara}</p>
      </section>
      <div className="space-y-4 text-body-1 text-neutral-700 md:space-y-8 md:text-medium">
        <p>
          Hopital Prive Autel D&apos;elie helps with all kind of operations with
          our dedicated team of experts, either for you or your family members:
        </p>
        <ul className="list-disc space-y-3 pl-5 marker:text-header-1 marker:text-primary-500 md:space-y-5 md:marker:text-header-2">
          {[
            [1, "We monitor asthma care needs."],
            [2, "We remind you about upcoming visits."],
            [3, "We deliver expert care and referrals."],
          ].map(([key, text]) => (
            <li key={key}>{text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceTextSectionTwo;
