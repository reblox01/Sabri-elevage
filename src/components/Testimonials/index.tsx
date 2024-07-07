import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    "id": 1,
    "name": "Khalid Benjelloun",
    "designation": "Client @ Casablanca",
    "content": "Je suis extrêmement satisfait des services de Sabri Elevage. Le personnel est très professionnel et les produits sont de haute qualité.",
    "image": "/images/testimonials/author-01.png",
    "star": 5
  },
  {
    "id": 2,
    "name": "Amina El Amrani",
    "designation": "Client @ Rabat",
    "content": "L'expérience avec Sabri Elevage a été exceptionnelle. Leur site web est facile à naviguer et les délais de livraison sont respectés.",
    "image": "/images/testimonials/author-02.png",
    "star": 4
  },
  {
    "id": 3,
    "name": "Youssef Aït Ben Haddou",
    "designation": "Seller @ Marrakech",
    "content": "En tant que vendeur, collaborer avec Sabri Elevage a été une excellente décision. Leur plateforme est conviviale et ils offrent un excellent support.",
    "image": "/images/testimonials/author-03.png",
    "star": 5
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          // subtitle="Testimonials"
          title="Ce que Disent nos Clients"
          
          paragraph="Découvrez les témoignages de nos clients satisfaits. 
            Leur satisfaction est notre priorité et nous sommes fiers de partager 
            leurs expériences positives avec Sabri Elevage."
           width="640px"
          center
          
        />

        <div className="mt-[60px] flex flex-wrap lg:mt-20 gap-y-8">
          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
