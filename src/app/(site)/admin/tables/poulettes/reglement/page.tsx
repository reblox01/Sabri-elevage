// import Breadcrumb from "@/components/Common/Breadcrumb";
import Reglement from "@/components/Admin/Tables/Poulettes/Reglement";
// import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Mostafa PC | Sabri Élevage",
  description: "This is Mostapha PC Tableau Aliment SO",
};

const ReglementPage = () => {
  return (
    <main>
      <Reglement />
    </main>
  );
};

export default ReglementPage;
