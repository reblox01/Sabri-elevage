import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "À propos | Sabri elevage",
  description: "This is À propos page description",
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
