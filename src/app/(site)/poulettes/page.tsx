// import Breadcrumb from "@/components/Common/Breadcrumb";
import Poulettes from "@/components/Poulettes";
// import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Mostafa PC | Sabri Élevage",
  description: "This is Pourquoi Nous page description",
};

const PoulettesPage = () => {
  return (
    <main>
      <Poulettes searchParams={{
        q: "",
        offset: ""
      }} />
    </main>
  );
};

export default PoulettesPage;
