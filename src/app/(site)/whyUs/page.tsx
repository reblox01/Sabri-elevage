import Breadcrumb from "@/components/Common/Breadcrumb";
import Responses from "@/components/Responses";
import WhyUs from "@/components/WhyUs";
// import Team from "@/components/Team";
// import Features from "@/components/Features";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pourquoi Nous | Sabri Élevage",
  description: "Découvrez pourquoi Sabri Élevage se distingue comme le choix premier pour un élevage de qualité. Apprenez-en plus sur notre engagement envers l'excellence, nos pratiques durables, et le soin exceptionnel apporté à nos animaux.",
  keywords: "Sabri Élevage, élevage de qualité, engagement envers l'excellence, pratiques durables, soin exceptionnel, élevage, agriculture, animaux, éleveurs",
  authors: [{ name: "Sabri Élevage" }],
  robots: "index, follow",

};

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="Pourquoi Nous Choisir ?" />
      <WhyUs />
      <Responses />
    </main>
  );
};

export default AboutPage;
