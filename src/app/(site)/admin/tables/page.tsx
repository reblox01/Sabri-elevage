// import Breadcrumb from "@/components/Common/Breadcrumb";
import Home from "@/components/Admin/Tables";
// import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Tableaux | Sabri Élevage",
  description: "Les Tableaux de l'entrepries",
};

const HomePage = () => {
  return (
    <main>
      <Home searchParams={{
        q: "",
        offset: ""
      }} />
    </main>
  );
};

export default HomePage;
