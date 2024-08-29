// import Breadcrumb from "@/components/Common/Breadcrumb";
import AjouterVente from "@/components/Admin/Tables/Poulettes/Aliment-SO/AjouterVente";
// import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Mostafa PC | Sabri Élevage",
  description: "This is Mostapha PC Tableau Aliment Sofalim",
};

const AjouterVentePage = () => {
  return (
    <main>
      <AjouterVente />
    </main>
  );
};

export default AjouterVentePage;
