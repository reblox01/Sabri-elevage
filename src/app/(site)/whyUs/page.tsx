import Breadcrumb from "@/components/Common/Breadcrumb";
import WhyUs from "@/components/WhyUs";
// import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Pourquoi Nous | Sabri elevage",
  description: "This is Pourquoi Nous page description",
};

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="Pourquoi Nous" />
      <WhyUs />
    </main>
  );
};

export default AboutPage;
