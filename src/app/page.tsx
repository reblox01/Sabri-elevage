import About from "@/components/About";
// import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Responses from "@/components/Responses";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
import { Metadata } from "next";

// import CallToAction from "@/components/CallToAction";
// import Faq from "@/components/Faq";
// import Features from "@/components/Features";
// import Pricing from "@/components/Pricing";
// import Team from "@/components/Team";
// import { getAllPosts } from "@/utils/markdown";
// import HomeBlogSection from "@/components/Blog/HomeBlogSection";

export const metadata: Metadata = {
  title: "Sabri Élevage | Achat de Poulets Vivants",
  description: "Découvrez Sabri Élevage, spécialiste en élevage de poulets vivants de qualité. Nous sommes fiers de notre engagement envers le bien-être animal et la durabilité. Contactez-nous dès aujourd'hui pour en savoir plus!",
  keywords: "Sabri Élevage, poulets vivants, élevage de poulets, bien-être animal, qualité, durabilité, agriculture, Sabri, Dinde, Dindes, Sell Dinde, Elevage, Sabri Elevage",
  robots: "index, follow",
};

export default function Home() {
  // const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <ScrollUp />
      <Hero />
      {/* <Features /> */}
      <About />
      {/* <CallToAction /> */}
      <Responses />
      <WhyUs />
      {/* <Pricing /> */}
      <Testimonials />
      {/* <Faq /> */}
      
      {/* <HomeBlogSection posts={posts} /> */}
      <Contact />
      {/* <Clients /> */}
    </main>
  );
}
