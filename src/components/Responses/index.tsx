import SectionTitle from "../Common/SectionTitle";
import SingleResponse from "./SingleResponse";
import responsesData from "./responsesData";

const Responses = () => {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle="Response"
          title="Main Features Of Play"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
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
