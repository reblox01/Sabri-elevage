import SectionTitle from "../Common/SectionTitle";
import SingleResponse from "./SingleResponse";
import responsesData from "./responsesData";

const Responses = () => {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle="Pourquoi Nous ?"
          title="Ce qui nous distingue ?"
          paragraph="Découvrez ce qui nous rend uniques : notre engagement inébranlable envers la qualité, le bien-être animal et une approche durable de l'élevage. Nous sommes le choix préféré pour ceux qui recherchent une volaille de qualité supérieure, produite de manière responsable et respectueuse de l'environnement."
        />

        <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
          {responsesData.map((response, i) => (
            <SingleResponse key={i} response={response} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Responses;
