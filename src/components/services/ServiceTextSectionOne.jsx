/* eslint-disable react/prop-types */

const ServiceTextSectionOne = ({
  introHeading = "Hopital Prive Autel D’elie is committed to delivering quality asthma care integrated with social supports that keep people healthy and improve the overall health of their communities.",
  introPara = "Hopital Prive Autel D’elie offers comprehensive treatment for effective asthma management. Our teams will work with you to create an asthma care plan that’s right for you. One of our priorities is to help children and teenagers manage and prevent asthma attacks so they can stay in school and out of the emergency room. We understand the negative impact that asthma has on young children and adolescents.",
  titleHeading,
  titlePara = "Hopital Prive Autel D’elie Hospital offers comprehensive treatment for effective asthma management. Our teams will work with you to create an asthma care plan that’s right for you. One of our priorities is to help children and teenagers manage and prevent asthma attacks so they can stay in school and out of the emergency room. We understand the negative impact that asthma has on young children and adolescents.",
}) => {
  return (
    <div className="space-y-6 md:space-y-16">
      <section className="space-y-4 md:space-y-8">
        <h2 className="text-medium font-bold text-secondary-600 md:text-header-1">
          {introHeading}
        </h2>
        <p className="text-body-1 md:text-header-1">{introPara}</p>
      </section>
      <section className="space-y-4 md:space-y-8">
        <h2 className="text-medium font-bold text-secondary-600 md:text-header-2">
          {titleHeading}
        </h2>
        <p className="text-body-1 md:text-header-1">{titlePara}</p>
      </section>
    </div>
  );
};

export default ServiceTextSectionOne;
