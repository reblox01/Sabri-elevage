import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos - Sabri Élevage",
  description: "Découvrez Sabri Élevage, spécialiste en élevage de poulets vivants de qualité, avec un engagement fort envers le bien-être animal et la durabilité. Nous sommes dédiés à fournir des produits de qualité tout en respectant les normes les plus élevées de l'industrie.",
  keywords: "À propos de Sabri Élevage, élevage de poulets vivants, qualité, bien-être animal, durabilité, agriculture",
  robots: "index, follow",
};

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="À propos de nous" />
      <About />
      
    </main>
  );
};

export default AboutPage;
