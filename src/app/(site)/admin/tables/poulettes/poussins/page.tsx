// import Breadcrumb from "@/components/Common/Breadcrumb";
import Poussins from "@/components/Admin/Tables/Poulettes/Poussins";
// import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Mostafa PC | Sabri Élevage",
  description: "This is Mostapha PC Tableau Poussins",
};

const PoussinsPage = () => {
  return (
    <main>
      <Poussins />
    </main>
  );
};

export default PoussinsPage;
